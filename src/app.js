require("dotenv").config();
const { sequelize } = require("./config/database");
const express = require("express");
const cors = require("cors");


const { connectDB } = require("./config/database");
require("./models/users");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Expense Tracker API running" });
});

const PORT = process.env.PORT || 5000;

connectDB();
sequelize.sync();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

