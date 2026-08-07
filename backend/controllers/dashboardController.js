const ReconciliationHistory = require("../models/ReconciliationHistory");

// ==========================
// Dashboard KPIs
// ==========================
exports.getDashboard = async (req, res) => {

  try {

    const histories = await ReconciliationHistory.find({
      user: req.user.id,
    });

    const totalUploads = histories.length;

    const totalTransactions = histories.reduce(
      (sum, item) => sum + item.totalTransactions,
      0
    );

    const matched = histories.reduce(
      (sum, item) => sum + item.matched,
      0
    );

    const unmatched = histories.reduce(
      (sum, item) => sum + item.unmatched,
      0
    );

    const averageMatch =
      totalTransactions === 0
        ? 0
        : Math.round((matched / totalTransactions) * 100);

    res.json({

      totalUploads,

      totalTransactions,

      matched,

      unmatched,

      averageMatch,

    });

  } catch (err) {

    console.error("Dashboard Error:", err);

    res.status(500).json({
      message: "Failed to load dashboard",
    });

  }

};

// ==========================
// Recent Activity
// ==========================
exports.getRecentActivity = async (req, res) => {

  try {

    const history = await ReconciliationHistory.find({

      user: req.user.id,

    })
      .sort({ uploadDate: -1 })
      .limit(5);

    res.json(history);

  } catch (err) {

    console.error("Recent Activity Error:", err);

    res.status(500).json({
      message: "Failed to load recent activity",
    });

  }

};