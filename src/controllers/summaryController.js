const { Op, fn, col } = require("sequelize");
const Transaction = require("../models/Transaction");

const getMonthlySummary = async (req, res) => {
  try {
    const { month } = req.query;

    if (!month) {
      return res.status(400).json({ message: "Month is required (YYYY-MM)" });
    }

    // Build date range
    const startDate = new Date(`${month}-01`);
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);

    // Fetch aggregated totals
    const results = await Transaction.findAll({
      attributes: [
        "type",
        [fn("SUM", col("amount")), "total"],
      ],
      where: {
        userId: req.user.id,
        createdAt: {
          [Op.gte]: startDate,
          [Op.lt]: endDate,
        },
      },
      group: ["type"],
    });

    let income = 0;
    let expense = 0;

    results.forEach((row) => {
      if (row.type === "INCOME") income = Number(row.get("total"));
      if (row.type === "EXPENSE") expense = Number(row.get("total"));
    });

    res.json({
      month,
      income,
      expense,
      balance: income - expense,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch summary" });
  }
};

module.exports = { getMonthlySummary };
