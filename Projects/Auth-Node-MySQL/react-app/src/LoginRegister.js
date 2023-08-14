import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

function LoginRegister() {
  const [value, setValue] = useState(0);
  const [form, setForm] = useState({ username: "", password: "", email: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const validateEmail = (email) => {
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
    return re.test(String(email).toLowerCase());
  };

  const register = async () => {
    setError(""); // Clear any previous errors

    if (!form.username || !form.password || !form.email) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password should be at least 6 characters long.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/register", form);
      if (response.data.success) {
        navigate("/dashboard");
      } else {
        setError(response.data.message || "Registration failed.");
      }
    } catch (error) {
      setError("Error registering: " + error.message);
    }
  };

  const login = async () => {
    setError(""); // Clear any previous errors

    if (!form.username || !form.password) {
      setError("Username and password are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/login", form);
      if (response.data.success) {
        navigate("/dashboard");
      } else {
        setError(response.data.message || "Login failed.");
      }
    } catch (error) {
      setError("Error logging in: " + error.message);
    }
  };

  return (
    <Container>
      <Tabs value={value} onChange={handleTabChange} centered>
        <Tab label="Login" />
        <Tab label="Register" />
      </Tabs>
      <Box mt={3}>
        {value === 0 && (
          <div>
            <Typography variant="h4">Login</Typography>
            <TextField
              label="Username"
              name="username"
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              onChange={handleChange}
              fullWidth
            />
            <Button variant="contained" color="primary" onClick={login}>
              Login
            </Button>
            {error && (
              <Alert severity="error" style={{ marginTop: "16px" }}>
                {error}
              </Alert>
            )}
          </div>
        )}
        {value === 1 && (
          <div>
            <Typography variant="h4">Register</Typography>
            <TextField
              label="Username"
              name="username"
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              onChange={handleChange}
              fullWidth
            />
            <Button variant="contained" color="primary" onClick={register}>
              Register
            </Button>
            {error && (
              <Alert severity="error" style={{ marginTop: "16px" }}>
                {error}
              </Alert>
            )}
          </div>
        )}
      </Box>
    </Container>
  );
}

export default LoginRegister;
