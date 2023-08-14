// Importing required modules
const express = require("express"); // Web framework for Node.js
const mysql = require("mysql"); // MySQL client for Node.js
const bodyParser = require("body-parser"); // Middleware to handle POST request data

const app = express(); // Initialize Express app

// Middleware to parse JSON and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Establishing a connection to MySQL database
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Replace with your MySQL user
  password: "", // Replace with your MySQL password
  database: "node_crud", // Database name
});

// Connecting to the database
db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// Endpoint to Create a user (POST request)
app.post("/users", (req, res) => {
  let newUser = { name: req.body.name, email: req.body.email };
  let sql = "INSERT INTO users SET ?";
  db.query(sql, newUser, (err, result) => {
    if (err) throw err;
    res.send("User added...");
  });
});

// Endpoint to Read all users (GET request)
app.get("/users", (req, res) => {
  let sql = "SELECT * FROM users";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Endpoint to Update a user (PUT request)
app.put("/users/:id", (req, res) => {
  let newName = req.body.name;
  let newEmail = req.body.email;
  let sql = `UPDATE users SET name='${newName}', email='${newEmail}' WHERE id=${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("User updated...");
  });
});

// Endpoint to Delete a user (DELETE request)
app.delete("/users/:id", (req, res) => {
  let sql = `DELETE FROM users WHERE id=${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("User deleted...");
  });
});

// Setting the app to listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
