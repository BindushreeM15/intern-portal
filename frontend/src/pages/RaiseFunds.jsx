import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Dashboard.css"; 

const RaiseFunds = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [donationAmount, setDonationAmount] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/user")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.error("Failed to fetch user:", err));
  }, []);

  const handleDonation = async () => {
    const amount = parseInt(donationAmount);
    if (!amount || amount < 1) return alert("Enter a valid amount");

    try {
      const updatedUser = {
        ...userData,
        amountRaised: (userData.amountRaised || 0) + amount,
      };

      const res = await fetch("http://localhost:5000/api/user", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      });

      if (!res.ok) throw new Error("Network error");
      const updated = await res.json();
      setUserData(updated);
      setDonationAmount("");
    } catch (err) {
      console.error("Donation error:", err);
    }
  };

  return (
    <div className="page-container">
      <div className="left-content">
        <h2>💰 Raise Funds</h2>
        <p><strong>Referral Link:</strong></p>
        <a href="https://shecan.org/donate?ref=INT2025ABC" target="_blank" rel="noreferrer" style={{ color: "#0072ff" }}>
          https://shecan.org/donate?ref=INT2025ABC
        </a>

        <p style={{ marginTop: "20px" }}>
          <strong>Amount Raised:</strong> ₹{userData.amountRaised || 0}
        </p>

        <input
          type="number"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          placeholder="Enter amount (₹)"
          style={{
            padding: "8px", marginTop: "10px", borderRadius: "8px",
            border: "1px solid #ccc", width: "100%", fontSize: "14px"
          }}
        />

<button
  onClick={handleDonation}
  style={{
    marginTop: "15px",
    padding: "10px 20px",
    background: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    display: "block"
  }}
>
  🚀 Raise Amount
</button>

<br />

<button
  onClick={() => navigate("/dashboard")}
  style={{
    marginTop: "10px",
    padding: "8px 16px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    display: "block"
  }}
>
  ← Back to Dashboard
</button>

      </div>

      <div className="right-content">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/investment-saving-fund-5380343-4511091.png?f=webp"
          alt="Fundraising"
          style={{ width: "250px", marginBottom: "10px" }}
        />
        <p>Support a cause and boost your badge level! 💖</p>
      </div>
    </div>
  );
};

export default RaiseFunds;
