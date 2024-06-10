const assignmentModel = require('../models/assignmentResponseSchema');
const quizModel = require('../models/quizScoreSchema');

exports.getCertificate = async (req, res) => {
  try {
    const { userID, courseID } = req.params;

    const assignmentResponse = await assignmentModel.findOne({ userId: userID, courseId: courseID });
    const quizResponse = await quizModel.findOne({ userId: userID, courseId: courseID });

    let totalCount = 0;
    if (assignmentResponse && assignmentResponse.submit && quizResponse && quizResponse.submit) {
      totalCount = 1;
    }

    res.status(200).json({ assignment: assignmentResponse, quiz: quizResponse, count: totalCount });
  } catch (error) {
    console.log("Error while getting the certificate");
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
