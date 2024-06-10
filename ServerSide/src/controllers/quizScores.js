//get quiz
const quizScoreSchema = require("../models/quizScoreSchema");

exports.getQuizResponse = async (req, res) => {
  try {
    const { userId, courseId } = req.params;
    const quizResponse = await quizScoreSchema.findOne({
      userId: userId,
      courseId: courseId,
    });
    res.status(201).json({
      success: true,
      data: quizResponse,
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
//update quiz response
exports.updateQuizValidation = async (req, res) => {
  try {
    const { userId, courseId} = req.params;
    const { submit ,score} = req.body;
    const updateQuizValidation = await quizScoreSchema.findOneAndUpdate(
      { userId: userId, courseId: courseId },
      { submit: submit ,score:score},
      {new : true}
    );
    if (!updateQuizValidation) {
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
        message: "Validation successfully",
      });
    } else {
      res.status(200).json({
        success: true,
        data: updateQuizValidation,
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


//post quiz 
const quizResponse = require("../models/quizScoreSchema");

exports.quizResponse = async (req, res) => {
  try {
    const { userId } = req.params;
    const { courseId,score} = req.body;

    // Create a new document with the provided data
    const  quizData = await quizResponse.create({
      userId,
      courseId,
      score:score,
    });

    res.status(200).json({ success: true, data: quizData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};