const express = require("express");
const authenticate = require("../middleware/authMiddleware");
const { getMonthlySummary } = require("../controllers/summaryController");

const router = express.Router();

router.get("/", authenticate, getMonthlySummary);

module.exports = router;
