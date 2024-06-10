
const quizSchema = require("../models/quizSchema");
exports.getQuizData = async (req, res) => {
  try {
    const { id } = req.params;
    const quizData = await  quizSchema .findOne({ courseId: id });
    res.status(201).json({
      success: true,
      data: quizData,
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