const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json()); // To parse JSON bodies

// Dummy user data
let userData = {
  name: "Bindushree",
  email: "bindu@example.com",
  referralCode: "REFBIN123",
  amountRaised: 1500
};

// GET existing user
app.get("/api/user", (req, res) => {
  res.json(userData);
});

// POST signup (mock saving new user)
app.post("/api/signup", (req, res) => {
  const { name, email } = req.body;
  userData = {
    name,
    email,
    referralCode: "REF" + name.slice(0, 3).toUpperCase() + "123",
    amountRaised: 0
  };
  res.status(201).json(userData);
});

// ✅ Add this: Mock login
app.post("/api/login", (req, res) => {
  const { email } = req.body;
  if (email === userData.email) {
    res.json(userData);
  } else {
    res.status(401).json({ error: "Invalid email" });
  }
});

// ✅ Add this: Update user profile
app.put("/api/user", (req, res) => {
  const { name, email, amountRaised } = req.body;

  console.log("Received update:", req.body); // 🔍

  if (name) userData.name = name;
  if (email) userData.email = email;
  if (typeof amountRaised === "number") {
    userData.amountRaised = amountRaised;
  }

  res.json(userData);
});



app.listen(PORT, () => {
  console.log(`Mock backend running at http://localhost:${PORT}`);
});
