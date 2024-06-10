const Response = require("../models/assignmentResponseSchema");

exports.getValidation = async (req, res) => {
  try {
    const { userId,courseId} = req.params;
    const getValidation = await Response.findOne({userId:userId,courseId:courseId});
    res.status(201).json({
      success: true,
      data: getValidation,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
