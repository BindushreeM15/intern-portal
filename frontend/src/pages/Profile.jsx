import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Dashboard.css';


const Profile = () => {
  const [user, setUser] = useState({ name: '', email: '', referralCode: '', amountRaised: 0 });
  const [editing, setEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '' });

  useEffect(() => {
    fetch('http://localhost:5000/api/user')
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setForm({ name: data.name, email: data.email });
      })
      .catch(err => console.error('Error fetching user:', err));
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(user.referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleSave = () => {
    fetch('http://localhost:5000/api/user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setEditing(false);
      })
      .catch(err => console.error('Error updating user:', err));
  };

  return (
    <div className="page-container">

      <div className="left-content">
        <h2>👤 Intern Profile</h2>

        {editing ? (
          <>
            <label>Name: </label>
            <input 
              type="text" 
              value={form.name} 
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            /><br />
            <label>Email: </label>
            <input 
              type="email" 
              value={form.email} 
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            /><br />
            <button className="save-btn" onClick={handleSave}>💾 Save</button>
          </>
        ) : (
          <>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button className="edit-btn" onClick={() => setEditing(true)}>✏️ Edit</button>
          </>
        )}

        <p><strong>Internship Role:</strong> Fundraising Intern</p>
        <p><strong>Total Raised:</strong> ₹{user.amountRaised || 0}</p>

        <p>
          <strong>Referral Code:</strong> 
          <span className="code"> {user.referralCode} </span>
          <button className="copy-btn" onClick={handleCopy}>
            📋 {copied ? "Copied!" : "Copy"}
          </button>
        </p>

        <Link to="/dashboard" className="back-btn">← Back to Dashboard</Link>
      </div>

      <div className="right-content">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" />
        <p>Your details are shown here 📋</p>
      </div>
    </div>
  );
};

export default Profile;
