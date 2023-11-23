const connection = require('../config/database/connection');

const getAll = async (_, res) => {
  const query = `SELECT 
                    reservations.ID AS reservationID, reservations.userID, users.fullName, users.email, users.role, reservations.eventID, events.title, events.date, events.ticketPrice, events.description, events.venueID, venues.name, venues.description, venues.capacity, venues.image, venues.address
                    FROM reservations
                    INNER JOIN users ON users.ID = reservations.userID
                    INNER JOIN EVENTS ON events.ID = reservations.eventID
                    INNER JOIN venues ON venues.ID = events.venueID;`;

  try {
    const [response] = await connection.query(query);
    return res.status(200).json({
      success: true,
      message: `All reservations retrieved successfully.`,
      data: response,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Unable to retrieve all reservations.`,
      error: error.message,
    });
  }
};

const getByID = async (req, res) => {
  const { ID } = req.params;
  const response = await getReservationByID(ID);
  if (!Array.isArray(response))
    return res.status(400).json({
      success: false,
      message: `Unable to retrieve reservation with id ${ID}.`,
      data: response,
    });
  if (!response.length)
    return res.status(400).json({
      success: false,
      message: `Resevation with id ${ID} not found.`,
    });
  return res.status(200).json({
    success: true,
    message: `Reservation with id ${ID} retrieved successfully.`,
    data: response[0],
  });
};

const getByUserID = async (req, res) => {
  const { ID } = req.params;
  const query = `SELECT 
                    reservations.ID AS reservationID, reservations.userID, users.fullName, users.email, users.role, reservations.eventID, events.title, events.date, events.ticketPrice, events.description, events.venueID, venues.name, venues.description, venues.capacity, venues.image, venues.address
                    FROM reservations
                    INNER JOIN users ON users.ID = reservations.userID
                    INNER JOIN EVENTS ON events.ID = reservations.eventID
                    INNER JOIN venues ON venues.ID = events.venueID
                    WHERE reservations.userID = ?;`;
  try {
    const [response] = await connection.query(query, [ID]);
    return res.status(200).json({
      success: true,
      message: `All reservations for user with id = ${ID} retrieved successfully.`,
      data: response,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Unable to retrieve all reservations for user with id = ${ID}.`,
      error: error.message,
    });
  }
};
const getByEventID = async (req, res) => {
  const { ID } = req.params;
  const query = `SELECT 
                    reservations.ID AS reservationID, reservations.userID, users.fullName, users.email, users.role, reservations.eventID, events.title, events.date, events.ticketPrice, events.description, events.venueID, venues.name, venues.description, venues.capacity, venues.image, venues.address
                    FROM reservations
                    INNER JOIN users ON users.ID = reservations.userID
                    INNER JOIN EVENTS ON events.ID = reservations.eventID
                    INNER JOIN venues ON venues.ID = events.venueID
                    WHERE reservations.eventID = ?;`;
  try {
    const [response] = await connection.query(query, [ID]);
    return res.status(200).json({
      success: true,
      message: `All reservations for event with id = ${ID} retrieved successfully.`,
      data: response,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Unable to retrieve all reservations for event with id = ${ID}.`,
      error: error.message,
    });
  }
};

const addReservation = async (req, res) => {
  const { userID, eventID } = req.body;
  const query = `INSERT INTO reservations (userID, eventID) VALUES (?, ?)`;
  try {
    const [response] = await connection.query(query, [userID, eventID]);
    const data = await getReservationByID(response.insertId);
    return res.status(200).json({
      success: true,
      message: `User with id = ${userID} successfully reserve a ticket to event with id = ${eventID}.`,
      data: data[0],
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Error while trying to reserve a ticket for event with id = ${eventID} and user with id = ${userID}.`,
      error: error.message,
    });
  }
};

const updateByID = async (req, res) => {
  const { ID } = req.params;
  const { userID, eventID } = req.body;
  const query = `UPDATE reservations SET userID = ?, eventID = ? WHERE ID = ?`;
  try {
    const [response] = await connection.query(query, [userID, eventID, ID]);
    if (!response.affectedRows)
      return res.status(400).json({
        success: false,
        message: `Reservation with id = ${ID} not found.`,
      });
    const data = await getReservationByID(ID);
    return res.status(200).json({
      success: true,
      message: `Reservation with id = ${ID} updated successfully.`,
      data: data[0],
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Error while trying to update reservation with id = ${ID}.`,
      error: error.message,
    });
  }
};

const deleteByID = async (req, res) => {
  const { ID } = req.params;
  const query = `DELETE FROM reservations WHERE ID = ?`;
  try {
    const [response] = await connection.query(query, [ID]);
    if (!response.affectedRows)
      return res.status(400).json({
        success: false,
        message: `Reservation with id = ${ID} not found.`,
      });
    return res.status(200).json({
      success: true,
      message: `Reservation with id = ${ID} deleted successfully.`,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Unable to delete reservation with id ${ID}.`,
      error: error.message,
    });
  }
};

const getReservationByID = async (ID) => {
  const query = `SELECT 
                    reservations.ID AS reservationID, reservations.userID, users.fullName, users.email, users.role, reservations.eventID, events.title, events.date, events.ticketPrice, events.description, events.venueID, venues.name, venues.description, venues.capacity, venues.image, venues.address
                    FROM reservations
                    INNER JOIN users ON users.ID = reservations.userID
                    INNER JOIN EVENTS ON events.ID = reservations.eventID
                    INNER JOIN venues ON venues.ID = events.venueID
                    WHERE reservations.ID = ?;`;

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
  getByUserID,
  getByEventID,
  addReservation,
  updateByID,
  deleteByID,
};
