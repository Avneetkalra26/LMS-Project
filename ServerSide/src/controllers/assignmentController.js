const assignmentSchema = require("../models/assignmentSchema");
exports.getAssignmentData = async (req, res) => {
  try {
    const { id } = req.params;
    const assignmentData = await assignmentSchema.findOne({ courseId: id });
    res.status(201).json({
      success: true,
      data: assignmentData,
      message: "Get Data successfully",
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
