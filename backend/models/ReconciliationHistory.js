const mongoose = require("mongoose");

const reconciliationHistorySchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  filename: {
    type: String,
    required: true,
    trim: true,
  },

  uploadDate: {
    type: Date,
    default: Date.now,
  },

  totalTransactions: {
    type: Number,
    required: true,
    default: 0,
  },

  matched: {
    type: Number,
    required: true,
    default: 0,
  },

  unmatched: {
    type: Number,
    required: true,
    default: 0,
  },

  processingTime: {
    type: Number,
    required: true,
    default: 0,
  },

});

module.exports = mongoose.model(
  "ReconciliationHistory",
  reconciliationHistorySchema
);