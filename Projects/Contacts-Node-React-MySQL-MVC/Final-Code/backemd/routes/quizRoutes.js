const express = require("express");
const quizController = require("../controllers/quizControllers");
const router = express.Router();

router.post("/create", quizController.create);
router.get("/fetchAll", quizController.fetchAll);
router.get("/fetch/:quizID", quizController.fetch);
router.put("/update/:quizID", quizController.update);
router.delete("/delete/:quizID", quizController.delete);

module.exports = router;
