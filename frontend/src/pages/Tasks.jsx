import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import this!

import '../Dashboard.css';

const Tasks = () => {
  return (
    <div className="page-container">

      <div className="left-content">
        <h2>📋 Your Tasks</h2>
        <ul>
          <li>✅ Task 1: Create Fundraising Poster</li>
          <li>🕐 Task 2: Social Media Sharing</li>
          <li>❌ Task 3: Write a Blog Post</li>
          <li>🔜 Task 4: Invite 5 Friends</li>
        </ul>
            <Link to="/dashboard" className="back-btn">← Back to Dashboard</Link>

      </div>

      <div className="right-content">
        <img src="https://cdn-icons-png.flaticon.com/512/3791/3791420.png" alt="Tasks" />
        <p>Track and complete your tasks! 💪</p>
      </div>
    </div>
  );
};

export default Tasks;
