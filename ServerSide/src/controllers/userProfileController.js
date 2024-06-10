const authSchema = require("../models/authSchema");
exports.getUserProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const userProfile = await authSchema.findById({_id:id});
    res.status(200).json({
      success: true,
      userData: userProfile,
      message: "User data found successfully",
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
