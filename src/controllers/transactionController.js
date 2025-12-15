const Transaction = require("../models/Transaction");

const addTransaction = async (req, res) => {
  try {
    const { type, amount, category, description } = req.body;

    if (!type || !amount || !category) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const transaction = await Transaction.create({
      type,
      amount,
      category,
      description,
      userId: req.user.id,
    });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Failed to add transaction" });
  }
};

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      where: { userId: req.user.id },
      order: [["createdAt", "DESC"]],
    });

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch transactions" });
  }
};

module.exports = { addTransaction, getTransactions };
