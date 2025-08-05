import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'animate.css';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

const handleSignup = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email })
    });

    if (!response.ok) {
      throw new Error("Signup failed");
    }

    const userData = await response.json(); 
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/dashboard");
  } catch (error) {
    console.error("Signup Error:", error);
    alert("Signup failed. Please try again.");
  }
};


  return (
    <div className="animate__animated animate__fadeIn" style={containerStyle}>
      <div style={cardStyle}>
        <h2>👋 New Here?</h2>
        <p>Sign up to start your journey!</p>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
        <button onClick={handleSignup} style={btnStyle}>Sign Up</button>
        <p style={{ marginTop: "15px" }}>
          Already have an account? <a href="/" style={{ color: "#0072ff" }}>Login</a>
        </p>
      </div>
    </div>
  );
}

const containerStyle = {
  background: 'linear-gradient(to right, #00c6ff, #0072ff)',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Poppins, sans-serif',
};

const cardStyle = {
  background: '#fff',
  padding: '40px',
  borderRadius: '15px',
  boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
  width: '350px',
  textAlign: 'center',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '14px',
};

const btnStyle = {
  padding: '10px 20px',
  width: '100%',
  background: '#0072ff',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold',
};
