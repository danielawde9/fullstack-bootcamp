const express = require("express");
const userController = require("../controllers/userControllers");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);

// router.use(authMiddleware.verifyToken);
router.use("/home", authMiddleware.verifyToken);

module.exports = router;