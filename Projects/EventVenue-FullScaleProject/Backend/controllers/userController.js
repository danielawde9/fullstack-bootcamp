const bcrypt = require('bcrypt');
const connection = require('../config/database/connection');
const { generateToken } = require('../extra/generateToken');

const getAll = async (_, res) => {
  const query = `SELECT * FROM users`;
  try {
    const [response] = await connection.query(query);
    return res.status(200).json({
      success: true,
      message: `All users retrieved successfully.`,
      data: response,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Unable to retrieve all users.`,
      error: error.message,
    });
  }
};

const getByID = async (req, res) => {
  const ID = req.params.ID;
  const response = await getUserByID(ID);
  if (!Array.isArray(response))
    return res.status(400).json({
      success: false,
      message: `Unable to retrieve user with id ${ID}.`,
      data: response,
    });
  if (!response.length)
    return res.status(400).json({
      success: false,
      message: `User with id ${ID} not found.`,
    });
  return res.status(200).json({
    success: true,
    message: `User with id ${ID} retrieved successfully.`,
    data: response[0],
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const query = `SELECT * FROM users WHERE email = ?`;
  try {
    const [response] = await connection.query(query, [email]);

    if (!response.length)
      return res.status(400).json({
        success: false,
        message: `User with email ${email} not found.`,
      });
    const checkPassword = await bcrypt.compare(password, response[0].password);
    if (!checkPassword)
      return res.status(400).json({
        success: false,
        message: `Wrong password.`,
      });
    return res.status(200).json({
      success: true,
      message: `User with email ${email} logged in successfully.`,
      data: {
        ...response[0],
        token: generateToken(response[0].ID, response[0].role),
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Unable to login.`,
      error: error.message,
    });
  }
};

const register = async (req, res) => {
  const { fullName, email, password } = req.body;
  const query = `INSERT INTO users (fullName, email, password, role) VALUES (?, ?, ?, 'user')`;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const [response] = await connection.query(query, [
      fullName,
      email,
      hashedPassword,
    ]);
    const data = await getUserByID(response.insertId);
    if (!Array.isArray(data)) throw new Error(`Unable to register a new user.`);
    return res.status(200).json({
      success: true,
      message: `User added successfully.`,
      token: generateToken(data[0].ID, data[0].role),
      data: data[0],
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Error while trying to regsiter a new user.`,
      error: error.message,
    });
  }
};

const updateByID = async (req, res) => {
  const ID = req.params.ID;
  const { fullName, email } = req.body;
  const query = `UPDATE users SET fullName = ?, email = ? WHERE ID = ?`;
  try {
    const [response] = await connection.query(query, [fullName, email, ID]);
    if (!response.affectedRows)
      return res.status(400).json({
        success: false,
        message: `User with id = ${ID} not found.`,
      });
    const data = await getUserByID(ID);
    return res.status(200).json({
      success: true,
      message: `User updated successfully.`,
      data: data[0],
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Error while trying to update user with id ${ID}.`,
      error: error.message,
    });
  }
};

const switchToAdmin = async (req, res) => {
  const ID = req.params.ID;
  const query = `UPDATE users SET role = 'admin' WHERE ID = ?`;
  try {
    const [response] = await connection.query(query, [ID]);
    console.log(response);
    if (!response.affectedRows)
      return res.status(400).json({
        success: false,
        message: `User with id = ${ID} not found.`,
      });
    if (!response.changedRows)
      return res.status(400).json({
        success: false,
        message: `User with id = ${ID} is already an admin.`,
      });
    const data = await getUserByID(ID);
    return res.status(200).json({
      success: true,
      message: `User with id ${ID} switched to admin successfully.`,
      data: data[0],
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Error while trying to update user with id ${ID}.`,
      error: error.message,
    });
  }
};

const deleteByID = async (req, res) => {
  const ID = req.params.ID;
  const query = `DELETE FROM users WHERE ID = ?`;
  try {
    const [response] = await connection.query(query, [ID]);
    if (!response.affectedRows)
      return res.status(400).json({
        success: false,
        message: `User with id = ${ID} not found.`,
      });
    return res.status(200).json({
      success: true,
      message: `User with id = ${ID} deleted successfully.`,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Unable to delete user with id ${ID}.`,
      error: error.message,
    });
  }
};

const getUserByID = async (ID) => {
  const query = `SELECT * FROM users where ID = ?`;
  try {
    const [response] = await connection.query(query, [ID]);
    return response;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAll,
  getByID,
  login,
  register,
  updateByID,
  switchToAdmin,
  deleteByID,
};
