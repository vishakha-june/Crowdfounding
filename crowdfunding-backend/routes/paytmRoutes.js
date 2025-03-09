const express = require("express");
const { initiatePayment, paymentCallback } = require("../controllers/paytmController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();
router.post("/initiate", authMiddleware, initiatePayment);
router.post("/callback", paymentCallback);

module.exports = router;
