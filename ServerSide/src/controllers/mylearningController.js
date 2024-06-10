// completed course

const assignmentModel = require('../models/assignmentResponseSchema');
const quizModel = require('../models/quizScoreSchema');
const cardModel = require("../models/cardsSchema")

exports.getCompletedCourses = async (req, res) => {
  try {
    const { userID } = req.params;

    // Fetch all assignment responses for the user
    const assignmentResponses = await assignmentModel.find({
      userId: userID,
      submit: true
    });

    // Fetch all quiz responses for the user
    const quizResponses = await quizModel.find({
      userId: userID,
      submit: true
    });

    // Create a set of course IDs from assignment responses
    const assignmentCourseIds = new Set(assignmentResponses.map(course => course.courseId));

    // Filter quiz responses to only include those where the course ID is in the assignmentCourseIds set
    const completedCourses = quizResponses
      .filter(course => assignmentCourseIds.has(course.courseId))
      .map(course => course.courseId);

    const courses = await cardModel.find({ _id: { $in: completedCourses } });

    res.status(200).json({
      success: true,
      data: courses,
      count : completedCourses.length
    });
  } catch (error) {
    console.log("Error while getting the completed courses");
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

