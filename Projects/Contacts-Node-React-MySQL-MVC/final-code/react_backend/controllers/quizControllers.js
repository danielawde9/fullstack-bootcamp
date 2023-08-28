const db = require("../database");

exports.createQuiz = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const [result] = await db.execute(
      "INSERT INTO quizzes (title, description) VALUES (?, ?)",
      [title, description]
    );

    res.status(201).json({
      message: "Quiz created successfully!",
      quizId: result.insertId,
    });
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
};

exports.getAllQuizzes = async (req, res) => {
  try {
    const [quizzes] = await db.execute("SELECT * FROM quizzes");
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
};

exports.getSingleQuiz = async (req, res) => {
  try {
    const quizId = req.params.quizId;

    const [quizzes] = await db.execute("SELECT * FROM quizzes WHERE id = ?", [
      quizId,
    ]);

    if (quizzes.length === 0) {
      return res.status(404).json({ error: "Quiz not found" });
    }

    res.status(200).json(quizzes[0]);
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
};

exports.updateQuiz = async (req, res) => {
  try {
    const quizId = req.params.quizId;
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    await db.execute(
      "UPDATE quizzes SET title = ?, description = ? WHERE id = ?",
      [title, description, quizId]
    );

    res.status(200).json({
      message: "Quiz updated successfully!",
    });
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
};

exports.deleteQuiz = async (req, res) => {
  try {
    const quizId = req.params.quizId;

    await db.execute("DELETE FROM quizzes WHERE id = ?", [quizId]);

    res.status(200).json({
      message: "Quiz deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
};
