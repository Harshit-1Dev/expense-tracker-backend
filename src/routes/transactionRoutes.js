console.log("Transaction routes loaded");
const express = require("express");
const authenticate = require("../middleware/authMiddleware");
const {
  addTransaction,
  getTransactions,
} = require("../controllers/transactionController");

const router = express.Router();

router.post("/", authenticate, addTransaction);
router.get("/", authenticate, getTransactions);

module.exports = router;
