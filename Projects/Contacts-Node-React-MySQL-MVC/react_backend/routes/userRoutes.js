const express = require("express");
const userController = require("../controllers/userControllers");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);

// Protect routes below this middleware
router.use(authMiddleware.verifyToken);

module.exports = router;
