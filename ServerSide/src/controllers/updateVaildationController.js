const Response = require("../models/assignmentResponseSchema");

exports.updateValidation = async (req, res) => {
  try {
    const { userId, courseId } = req.params;
    const { submit } = req.body;
    const updateValidation = await Response.findOneAndUpdate(
      { userId: userId, courseId: courseId },
      { submit: submit },
      { new: true }
    );
    if (!updateValidation) {
      // If no document is found with the given userId, create a new one
      const newResponse = new Response({
        userId: userId,
        courseId: courseId,
        submit: submit,
      });
      await newResponse.save();
      res.status(201).json({
        success: true,
        data: newResponse,
        message: "Validation updated successfully",
      });
    } else {
      res.status(200).json({
        success: true,
        data: updateValidation,
        message: "Validation updated successfully",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
