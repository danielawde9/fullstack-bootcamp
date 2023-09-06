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

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (Auth.isUserAuthenticated()) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSignUp = async () => {
    if (!username || !password) {
      setError("username and password must be filled out");
      return;
    }
    try {
      const response = await api.post("/users/signup", {
        username,
        password,
      });
      if (response.data.success) {
        Auth.authenticateUser();
        navigate("home");
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
          <Typography variant="h5">Sign Up</Typography>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            required={true}
          />
          <br />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required={true}
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
