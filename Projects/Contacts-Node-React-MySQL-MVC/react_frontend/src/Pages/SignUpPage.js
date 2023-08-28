import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import api from "../api";
import Auth from "../Auth";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await api.post("/users/signup", { username, password });
      // Authenticate user after signup and redirect to home
      const loginResponse = await api.post("/users/login", {
        username,
        password,
      });
      Auth.authenticateUser(loginResponse.data.token);
      navigate("/home");
    } catch (err) {
      setError(err.response.data.error || "Signup failed.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card style={{ width: "300px" }}>
        <CardContent>
          <Typography variant="h5">Sign Up</Typography>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
          <br />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSignUp}
            style={{ marginTop: "16px" }}
            fullWidth
          >
            Sign Up
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
