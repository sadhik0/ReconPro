const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getDashboard,
  getRecentActivity,
} = require("../controllers/dashboardController");

router.get("/", authMiddleware, getDashboard);
router.get("/activity",authMiddleware,getRecentActivity);

module.exports = router;