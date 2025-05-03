const express = require('express');
const router = express.Router();
const verifyuser= require("../middleware/verifyuser")
const paymentController= require("../Controllers/Payment.Controller")


// Endpoint to create an order
router.route('/create-order').post(verifyuser,paymentController.payment);
router.route('/verifyPayment').post(verifyuser,paymentController.verifyPayment)

module.exports= router;