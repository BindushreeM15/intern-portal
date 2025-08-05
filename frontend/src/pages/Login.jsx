import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'animate.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.email === email) {
    navigate('/dashboard', { state: { name: user.name } }); // 👈 Pass userId here
    } else {
      alert('User not found! Please sign up first.');
    }
  };

  return (
    <div className="animate__animated animate__fadeIn" style={{
      background: 'linear-gradient(to right, #ff758c, #ff7eb3)',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Poppins, sans-serif',
    }}>
      <div style={{
        background: '#fff', padding: '40px', borderRadius: '15px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.2)', width: '350px', textAlign: 'center'
      }}>
        <h2>👋 Welcome Back</h2>
        <p>Login to your account</p>
        <input
          type="email" placeholder="Enter your email"
          value={email} onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleLogin} style={btnStyle}>Login</button>
        <p style={{ marginTop: "15px" }}>
          New user? <a href="/signup" style={{ color: "#ff758c" }}>Sign up</a>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '14px'
};

const btnStyle = {
  padding: '10px 20px',
  width: '100%',
  background: '#ff5e78',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold'
};
