const express = require('express');
const router = express.Router();
const {
  getAll,
  getByID,
  login,
  register,
  updateByID,
  switchToAdmin,
  deleteByID,
} = require('../controllers/userController');
const { isAuthenticated } = require('../middlewares/auth');

router.get('/getAll', getAll);
router.get('/getByID/:ID', getByID);
router.post('/login', login);
router.post('/register', register);
router.put('/update/:ID', isAuthenticated, updateByID);
router.put('/switchToAdmin/:ID', isAuthenticated, switchToAdmin);
router.delete('/delete/:ID', isAuthenticated, deleteByID);

module.exports = router;
