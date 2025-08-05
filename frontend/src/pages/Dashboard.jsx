// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from backend
    fetch("http://localhost:5000/api/user")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => {
        console.error("Error fetching user data:", err);
        setUser({ name: "Unknown User", referralCode: "UNKNOWN", totalRaised: 0 });
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  if (!user) return <p>Loading dashboard...</p>;

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user.name} 🎉</h1>
      <p className="subtext">Intern Portal Dashboard</p>

      <div className="info-section">
        <p><strong>Referral Code:</strong> {user.referralCode}</p>
         <p><strong>Total Donations Raised:</strong> ₹{user.amountRaised}</p>
      </div>

      <div className="cards">
        <div className="card" onClick={() => navigate("/profile")}>👤 Profile</div>
        <div className="card" onClick={() => navigate("/tasks")}>📋 Tasks</div>
        <div className="card" onClick={() => navigate("/raise-funds")}>💰 Raise Funds</div>
      </div>

      <div className="rewards-section">
        <h3>🎁 Rewards & Unlockables</h3>
        <ul>
          <li>✔️ Completed 3 tasks – Unlocked: Bronze Badge</li>
          <li>💸 Raised ₹5,000 – Unlocked: Donation Champ title</li>
          <li>🚀 Silver Badge - ₹1K Raised</li>
          <li>🔓 Custom Avatar - Unlocked</li>
        </ul>
      </div>
<div className="card" onClick={() => navigate("/leaderboard")}>
  <img
    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    alt="Leaderboard"
    style={{ width: "60px", height: "60px", objectFit: "contain", marginBottom: "7px" }}
  />
  <h3>View Leaderboard</h3>
  <p>Check top fundraisers</p>
</div>


      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
