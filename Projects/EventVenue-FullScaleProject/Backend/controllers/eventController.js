const { format } = require('date-fns');
const connection = require('../config/database/connection');

const getAll = async (_, res) => {
  const query = `SELECT * FROM events`;
  try {
    const [response] = await connection.query(query);
    return res.status(200).json({
      success: true,
      message: `All events retrieved successfully.`,
      data: response.map((event) => ({
        ...event,
        date: format(new Date(event.date), 'yyyy-MM-dd'),
      })),
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Unable to retrieve all events.`,
      error: error.message,
    });
  }
};

const getByID = async (req, res) => {
  const ID = req.params.ID;
  const response = await getEventByID(ID);
  if (!Array.isArray(response))
    return res.status(400).json({
      success: false,
      message: `Unable to retrieve event with id ${ID}.`,
      data: response,
    });
  if (!response.length)
    return res.status(400).json({
      success: false,
      message: `Event with id ${ID} not found.`,
    });
  return res.status(200).json({
    success: true,
    message: `Event with id ${ID} retrieved successfully.`,
    data: {
      ...response[0],
      date: format(new Date(response[0].date), 'yyyy-MM-dd'),
    },
  });
};

const addEvent = async (req, res) => {
  const { title, ticketPrice, description, venueID } = req.body;
  const query = `INSERT INTO events (title, ticketPrice, description, venueID) VALUES (?, ?, ?, ?)`;

  try {
    const [response] = await connection.query(query, [
      title,
      ticketPrice,
      description,
      venueID,
    ]);
    const data = await getEventByID(response.insertId);
    if (!Array.isArray(data)) throw new Error(`Unable to add a new event.`);
    return res.status(200).json({
      success: true,
      message: `Event added successfully.`,
      data: { ...data[0], date: format(new Date(data[0].date), 'yyyy-MM-dd') },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Error while trying to add a new event.`,
      error: error.message,
    });
  }
};

const updateByID = async (req, res) => {
  const { ID } = req.params;
  const { title, ticketPrice, description, venueID } = req.body;
  const query = `UPDATE events SET title = ?, ticketPrice = ?, description = ?, venueID = ? WHERE ID = ?`;
  console.log(req.body);
  try {
    if (!title || !ticketPrice || !description || !venueID) {
      return res.status(400).json({
        success: false,
        message: `Enter all fields to update event with id = ${ID}.`,
      });
    }

    const [response] = await connection.query(query, [
      title,
      ticketPrice,
      description,
      venueID,
      ID,
    ]);

    if (!response.affectedRows)
      return res.status(400).json({
        success: false,
        message: `Event with id = ${ID} not found.`,
      });

    const data = await getEventByID(ID);
    return res.status(200).json({
      success: true,
      message: `Event updated successfully.`,
      data: { ...data[0], date: format(new Date(data[0].date), 'yyyy-MM-dd') },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Error while trying to update event with id ${ID}.`,
      error: error.message,
    });
  }
};

const deleteByID = async (req, res) => {
  const { ID } = req.params;
  const query = `DELETE FROM events WHERE ID = ?`;
  try {
    const [response] = await connection.query(query, [ID]);
    if (!response.affectedRows)
      return res.status(400).json({
        success: false,
        message: `Event with id = ${ID} not found.`,
      });
    return res.status(200).json({
      success: true,
      message: `Event with id ${ID} deleted successfully.`,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Unable to delete event with id ${ID}.`,
      error: error.message,
    });
  }
};

const getEventByID = async (ID) => {
  const query = `SELECT * FROM events WHERE ID = ?`;
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
  addEvent,
  updateByID,
  deleteByID,
};
