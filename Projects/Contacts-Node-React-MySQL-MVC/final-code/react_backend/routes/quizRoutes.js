const express = require("express");
const quizController = require("../controllers/quizControllers");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/quizzes", quizController.createQuiz);
router.get("/quizzes", quizController.getAllQuizzes);
router.get("/quizzes/:quizId", quizController.getSingleQuiz);
router.put("/quizzes/:quizId", quizController.updateQuiz);
router.delete("/quizzes/:quizId", quizController.deleteQuiz);

module.exports = router;
