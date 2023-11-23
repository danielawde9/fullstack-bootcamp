require('dotenv').config();
const mysql = require('mysql2');
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const connection = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

connection.getConnection((err) => {
  if (err) return console.error(err);
  console.log('Database connected successfully');
});

module.exports = connection.promise();
