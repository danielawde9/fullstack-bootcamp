const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors())
const PORT = 3001;
const SECRET_KEY = "your_secret_key";

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  database: "classicmodels",
  password: "",
});

app.use(bodyParser.json());

app.post("/register", async (req, res) => {
  const { username, password, email } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await pool.query(
      "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
      [username, hashedPassword, email]
    );
    res.send({ success: true, message: "Registered successfully!" });
  } catch (error) {
    console.error('Registration Error:', error.message);  // Log the actual error

    res
      .status(400)
      .send({ success: false, message: "Error registering user." });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const [users] = await pool.query("SELECT * FROM users WHERE username = ?", [
      username,
    ]);
    const user = users[0];

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user.id }, SECRET_KEY);
      res.send({ success: true, token });
    } else {
      res.status(400).send({ success: false, message: "Invalid credentials." });
    }
  } catch (error) {
    res.status(400).send({ success: false, message: "Error logging in." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
