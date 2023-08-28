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

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // todo here
  const handleLogin = async () => {};

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
