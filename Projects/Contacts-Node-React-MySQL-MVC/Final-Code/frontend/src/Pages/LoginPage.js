import React, { useState, useEffect } from "react";
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

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (Auth.isUserAuthenticated()) {
      navigate("/home");
    }
  }, [navigate]);

  const handleLogin = async () => {
    if (!username || !password) {
      setError("username or password must not be empty");
      return;
    }
    try {
      const response = await api.post("/users/login", {
        username,
        password,
      });
      if (response.data.success) {
        Auth.authenticateUser(response.data.token);
        navigate("/home");
      }
    } catch (err) {
      setError(err.response.data.message);
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
          <Typography variant="h5">Login</Typography>
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
            onClick={handleLogin}
            style={{ marginTop: "16px" }}
            fullWidth
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
