const db = require('../database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  const [result] = await db.execute('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
  res.status(200).json({ message: "User registered successfully!" });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const [users] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
  const user = users[0];

  if (!user) return res.status(404).json({ error: 'User not found' });

  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) return res.status(401).json({ error: 'Password is not valid' });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: 86400
  });

  res.status(200).json({ auth: true, token });
};
