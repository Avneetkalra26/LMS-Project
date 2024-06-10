const Razorpay = require("razorpay");
const paymentSchema = require("../models/paymentSchema");

exports.paymentGateway = async (req, res) => {
  const { userID, courseID, amount, currency, keyId, keySecret } = req.body;
  const existingEnrollment = await paymentSchema.findOne({userID,courseID})
  if(existingEnrollment) {
    return res.status(400)
    .json({
      success:false,
      message:"user already enrolled"
    })
  }

  const razorpay = new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });

  const options = {
    amount: amount * 100, // amount in the smallest currency unit
    currency: currency,
    payment_capture: 1,
  };

  try {
    const payment = await razorpay.orders.create(options);
    res.json({
      success: true,
      order_id: payment.id,
      currency: payment.currency,
      amount: payment.amount,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

//Save payment data
exports.savePaymentData = async (req, res) => {
  try {
    const { userID, courseID } = req.body;
    const response = await paymentSchema.create({ userID, courseID });
    res
      .status(200)
      .json({ success: true, data: response});
    // if (response) {
    //   try {
    //     const validity = await validityModel.create({ userID, courseID });
    //     res
    //       .status(200)
    //       .json({ success: true, data: response, validityData: validity });
    //   } catch (err) {
    //     console.error(err);
    //     res.status(400).send("Unable to set the course validity");
    //   }
    // }
  } catch (err) {
    console.error(err);
    res.status(400).send("Payment data not saved");
  }
};
