import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  TextareaAutosize,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import api from "../api";

function QuizManager() {
  const [quizzes, setQuizzes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      const response = await api.get("/quiz/quizzes");
      setQuizzes(response.data);
    } catch (error) {
      console.error("Error fetching quizzes:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      try {
        await api.put(`/quiz/quizzes/${editingId}`, { title, description });
        setEditingId(null);
      } catch (error) {
        console.error("Error updating quiz:", error);
      }
    } else {
      try {
        await api.post("/quiz/quizzes", { title, description });
      } catch (error) {
        console.error("Error creating quiz:", error);
      }
    }
    setTitle("");
    setDescription("");
    fetchQuizzes();
  };

  const handleEdit = (quiz) => {
    setTitle(quiz.title);
    setDescription(quiz.description);
    setEditingId(quiz.id);
  };

  const handleDelete = async (quizId) => {
    try {
      await api.delete(`/quiz/quizzes/${quizId}`);
      fetchQuizzes();
    } catch (error) {
      console.error("Error deleting quiz:", error);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Quiz Title"
          required
        />
        <TextareaAutosize
          minRows={3}
          style={{ width: "100%", padding: "12px" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Quiz Description"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: "12px" }}
        >
          {editingId ? "Update Quiz" : "Create Quiz"}
        </Button>
      </form>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quizzes.map((quiz) => (
              <TableRow key={quiz.id}>
                <TableCell>{quiz.title}</TableCell>
                <TableCell>{quiz.description}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(quiz)}
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(quiz.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default QuizManager;
