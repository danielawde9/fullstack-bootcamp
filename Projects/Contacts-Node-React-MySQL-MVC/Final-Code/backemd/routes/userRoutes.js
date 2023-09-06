// user routes requests comes from /api/users
// i need to use shi esmo router
const userController = require("../controllers/userControllers");
const auth = require('../middleware/auth')
const express = require("express");
const router = express.Router();

// /api/users/login
router.post("/login", userController.login);
router.post("/signup", userController.signup);

router.use('/home', auth.verifyToken)

module.exports = router;
