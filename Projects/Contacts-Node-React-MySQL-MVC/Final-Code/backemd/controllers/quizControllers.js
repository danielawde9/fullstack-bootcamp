const db = require("../database");

exports.create = async (req, res) => {
  try {
    const { title, description } = req.body;
    await db.execute("INSERT INTO quizzes (title, description) VALUES (?, ?)", [
      title,
      description,
    ]);
    res.json({
      success: true,
      message: "quiz created",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.fetchAll = async (req, res) => {
  try {
    const [quizzes] = await db.execute("select * from quizzes");
    console.log(quizzes);
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.fetch = async (req, res) => {
  try {
    const quizID = req.params.quizID;
    const [quizzes] = await db.execute("select * from quizzes where id = ?", [
      quizID,
    ]);
    if (quizzes.length === 0) {
      res.status(404).json({ error: "quiz not found" });
    }
    res.json(quizzes[0]);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.update = async (req, res) => {
  try {
    const quizID = req.params.quizID;
    const { title, description } = req.body;
    await db.execute(
      "update quizzes set title = ?, description = ? where id = ?",
      [title, description, quizID]
    );
    res.json({
      message: "quiz updated success",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.delete = async (req, res) => {
  try {
    const quizID = req.params.quizID;

    await db.execute("delete from quizzes where id =? ", [quizID]);
    res.json({ message: "deleted " });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
