import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginRegister from "./LoginRegister";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/" element={<LoginRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
