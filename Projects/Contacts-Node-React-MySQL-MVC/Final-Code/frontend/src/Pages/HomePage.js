import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Auth from "../Auth";
import { useNavigate } from "react-router-dom";
import QuizManager from "../Components/QuizManager";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.isUserAuthenticated()) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    Auth.deAuthenticateUser();
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <QuizManager />
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default HomePage;
