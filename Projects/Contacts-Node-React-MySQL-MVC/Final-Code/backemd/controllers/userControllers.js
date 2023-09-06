const db = require("../database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// to keep the user logged in
exports.signup = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password);
  try {
    await db.query("INSERT INTO users (username, password) VALUES (?, ?)", [
      username,
      hashedPassword,
    ]);
    res.json({ success: true, message: "Registered successfully!" });
  } catch (error) {
    console.error("Registration Error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const [users] = await db.execute("select * from users where username = ?", [
      username,
    ]);

    const user = users[0];

    if (!user) return res.status(404).json({ message: "user not found" });
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(401).json({ message: "incorrect password" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: 86400,
    });

    res.json({ success: true, token });
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
