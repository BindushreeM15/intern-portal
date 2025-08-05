import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Tasks from "./pages/Tasks";
import RaiseFunds from "./pages/RaiseFunds";
import Leaderboard from "./pages/Leaderboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/raise-funds" element={<RaiseFunds />} />
        <Route path="/leaderboard" element={<Leaderboard />} />

      </Routes>
    </Router>
  );
};

export default App;
