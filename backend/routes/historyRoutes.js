const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {

saveHistory,

getHistory,

deleteHistory,

} = require("../controllers/historyController");

router.post("/", authMiddleware, saveHistory);

router.get("/", authMiddleware, getHistory);

router.delete("/:id", authMiddleware, deleteHistory);

module.exports = router;