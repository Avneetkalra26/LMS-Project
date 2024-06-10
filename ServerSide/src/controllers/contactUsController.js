const contactUsSchema = require("../models/contactUsSchema");
exports.contactUsController = async (req, res) => {
  try {
    const { userId } = req.params;
    const { username, email, message } = req.body;
    const contactUsData = await contactUsSchema.create({
      userId: userId,
      username: username,
      email: email,
      message: message,
    });
    res.status(200).json({
      success: true,
      data: contactUsData,
      message: "data added successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
