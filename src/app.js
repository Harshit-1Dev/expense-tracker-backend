require("dotenv").config();
const { sequelize } = require("./config/database");
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const summaryRoutes = require("./routes/summaryRoutes");




const { connectDB } = require("./config/database");
require("./models/users");
require("./models/Transaction");


const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/transactions", transactionRoutes);
app.use("/summary", summaryRoutes);


app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Expense Tracker API running" });
});

const PORT = process.env.PORT || 5000;

connectDB();
sequelize.sync({alter: true});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

