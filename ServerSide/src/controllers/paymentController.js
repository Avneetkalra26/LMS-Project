const { payment } = require("express");
const paymentSchema = require("../models/paymentSchema");
const paymentRazorpay = require("razorpay");
exports.paymentGateway = async (req, res) => {
  const { userID, courseID, amount, currency, keyId, keySecret } = req.body;
  const razorpay = new paymentRazorpay({
    key_id: keyId,
    key_secret: keySecret,
  });
  const options = {
    amount: amount * 100,
    currency: currency,
    payment_capture: 1,
  };
  try {
    const payment = await razorpay.orders.create(options);
    const paymentData = await paymentSchema.create({
      userID,
      courseID,
    });
    res.json({
      order_id: payment.id,
      currency: payment.currency,
      amount: payment.amount,
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
