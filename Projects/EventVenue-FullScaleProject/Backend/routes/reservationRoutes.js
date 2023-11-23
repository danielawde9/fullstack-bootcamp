const express = require('express');
const router = express.Router();
const {
  getAll,
  getByID,
  getByUserID,
  getByEventID,
  addReservation,
  updateByID,
  deleteByID,
} = require('../controllers/reservationController');
const { isAuthenticated } = require('../middlewares/auth');

router.get('/getAll', getAll);
router.get('/get/:ID', getByID);
router.get('/getByUserID/:ID', getByUserID);
router.get('/getByEventID/:ID', getByEventID);
router.post('/add', isAuthenticated, addReservation);
router.put('/update/:ID', isAuthenticated, updateByID);
router.delete('/delete/:ID', isAuthenticated, deleteByID);

module.exports = router;
