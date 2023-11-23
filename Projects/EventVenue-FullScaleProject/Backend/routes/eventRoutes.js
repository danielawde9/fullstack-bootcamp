const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/auth');

const {
  getAll,
  getByID,
  addEvent,
  updateByID,
  deleteByID,
} = require('../controllers/eventController');

router.get('/getAll', getAll);
router.get('/getByID/:ID', getByID);
router.post('/add', isAuthenticated, addEvent);
router.put('/update/:ID', isAuthenticated, updateByID);
router.delete('/delete/:ID', isAuthenticated, deleteByID);

module.exports = router;
