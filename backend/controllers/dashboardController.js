const ReconciliationHistory = require("../models/ReconciliationHistory");

exports.getDashboard = async (req, res) => {
  try {

    const userId = req.user.id;

    const histories = await ReconciliationHistory.find({
      user: userId,
    });

    const dashboard = {

      totalUploads: histories.length,

      totalTransactions: histories.reduce(
        (sum, item) => sum + item.totalTransactions,
        0
      ),

      matched: histories.reduce(
        (sum, item) => sum + item.matched,
        0
      ),

      unmatched: histories.reduce(
        (sum, item) => sum + item.unmatched,
        0
      ),

    };

    res.json(dashboard);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Failed to load dashboard",
    });

  }
};