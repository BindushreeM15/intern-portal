import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Profile from "./pages/Profile";
import Tasks from "./pages/Tasks";
import RaiseFunds from "./pages/RaiseFunds";
import Leaderboard from "./pages/Leaderboard";

import './index.css';
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/raise-funds" element={<RaiseFunds />} />
        <Route path="/leaderboard" element={<Leaderboard />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
