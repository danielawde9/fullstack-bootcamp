const connection = require('../config/database/connection');
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
const { imageUploader } = require('../extra/imageUploader');

const getAll = async (_, res) => {
  const query = `SELECT * FROM venues`;
  try {
    const [response] = await connection.query(query);
    return res.status(200).json({
      success: true,
      message: `All venues retrieved successfully.`,
      data: response,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Unable to retrieve all venues.`,
      error: error.message,
    });
  }
};

const getByID = async (req, res) => {
  const ID = req.params.ID;
  const response = await getVenueByID(ID);
  if (!Array.isArray(response))
    return res.status(400).json({
      success: false,
      message: `Unable to retrieve venue with id ${ID}.`,
      data: response,
    });
  if (!response.length)
    return res.status(400).json({
      success: false,
      message: `Venue with id ${ID} not found.`,
    });
  return res.status(200).json({
    success: true,
    message: `Venue with id ${ID} retrieved successfully.`,
    data: response[0],
  });
};

const addVenue = async (req, res) => {
  const { name, description, capacity, address } = req.body;
  const query = `INSERT INTO venues (name, description, capacity, image, address) VALUES (?, ?, ?, ?, ?)`;

  if (!CLOUDINARY_API_SECRET)
    return res
      .status(400)
      .json({ success: false, message: 'No CLOUDINARY API SECRET' });

  const imageURL = await imageUploader(req);

  try {
    const [response] = await connection.query(query, [
      name,
      description,
      capacity,
      imageURL,
      address,
    ]);
    const data = await getVenueByID(response.insertId);
    if (!Array.isArray(data)) throw new Error(`Unable to add a new venue.`);
    return res.status(200).json({
      success: true,
      message: `Venue added successfully.`,
      data: data[0],
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Error while trying to add a new venue.`,
      error: error.message,
    });
  }
};
const updateByID = async (req, res) => {
  const { ID } = req.params;
  const { name, description, capacity, image, address } = req.body;
  let imageURL = '';
  const query = `UPDATE venues SET name = ?, description = ?, capacity = ?, image = ?, address = ? WHERE ID = ?`;
  try {
    if (req.file) imageURL = await imageUploader(req);
    else imageURL = image;

    if (!name || !description || !capacity || !address || !imageURL) {
      return res.status(400).json({
        success: false,
        message: `Enter all fields to update venue with id = ${ID}.`,
      });
    }

    const [response] = await connection.query(query, [
      name,
      description,
      capacity,
      imageURL,
      address,
      ID,
    ]);

    if (!response.affectedRows)
      return res.status(400).json({
        success: false,
        message: `Venue with id = ${ID} not found.`,
      });

    const data = await getVenueByID(ID);
    return res.status(200).json({
      success: true,
      message: `Venue updated successfully.`,
      data: data[0],
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Error while trying to update venue with id ${ID}.`,
      error: error.message,
    });
  }
};

const deleteByID = async (req, res) => {
  const { ID } = req.params;
  const query = `DELETE FROM venues WHERE ID = ?`;
  try {
    const [response] = await connection.query(query, [ID]);
    if (!response.affectedRows)
      return res.status(400).json({
        success: false,
        message: `Venue with id = ${ID} not found.`,
      });
    return res.status(200).json({
      success: true,
      message: `Venue with id ${ID} deleted successfully.`,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Unable to delete venue with id ${ID}.`,
      error: error.message,
    });
  }
};

const getVenueByID = async (ID) => {
  const query = `SELECT * FROM venues WHERE ID = ?`;
  try {
    const [response] = await connection.query(query, [ID]);
    return response;
  } catch (error) {
    return error.message;
  }
};

module.exports = { getAll, getByID, addVenue, updateByID, deleteByID };
