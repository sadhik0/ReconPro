const ReconciliationHistory = require("../models/ReconciliationHistory");

exports.saveHistory = async (req, res) => {

  try {

    const history = await ReconciliationHistory.create({

      user: req.user.id,

      filename: req.body.filename,

      totalTransactions: req.body.totalTransactions,

      matched: req.body.matched,

      unmatched: req.body.unmatched,

      processingTime: req.body.processingTime,

    });

    res.status(201).json(history);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: err.message,
    });

  }

};


exports.getHistory = async (req, res) => {

  try {

    const history = await ReconciliationHistory.find({

      user: req.user.id,

    }).sort({

      uploadDate: -1,

    });

    res.json(history);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};


exports.deleteHistory = async (req, res) => {

  try {

    await ReconciliationHistory.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Deleted",
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};