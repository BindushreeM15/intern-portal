import React from "react";
import { useNavigate } from "react-router-dom";
import "./Leaderboard.css"; // We'll define styles here

const leaderboardData = [
  { name: "👑 Ananya Sharma", amount: 8000 },
  { name: "🔥 Rishabh Mehta", amount: 6500 },
  { name: "💎 Nikhil Rao", amount: 5300 },
  { name: "🌟 Bindu Shree", amount: 4200 },
  { name: "🚀 Pooja K", amount: 3800 },
];

const Leaderboard = () => {
  const navigate = useNavigate();

  return (
    <div className="leaderboard-container">
      <h1 className="title">🏆 Top Fundraisers</h1>
      <div className="leaderboard-card">
        {leaderboardData.map((user, index) => (
          <div className={`leaderboard-item place-${index + 1}`} key={index}>
            <span className="rank">#{index + 1}</span>
            <span className="username">{user.name}</span>
            <span className="amount">₹{user.amount}</span>
          </div>
        ))}
      </div>

      <button className="back-button" onClick={() => navigate("/dashboard")}>
        ← Back to Dashboard
      </button>
    </div>
  );
};

export default Leaderboard;
