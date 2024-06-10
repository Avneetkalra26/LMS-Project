const Response = require("../models/assignmentResponseSchema");

exports.assignmentAnswers = async (req, res) => {
  try {
    const { userId } = req.params;
    const { courseId, ques_answers } = req.body;

    // Create a new document with the provided data
    const answersData = await Response.create({
      userId,
      courseId,
      ques_answers: ques_answers,
    });

    res.status(200).json({ success: true, data: answersData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

