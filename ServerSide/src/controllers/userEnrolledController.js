//Get all courses of user
const paymentSchema = require("../models/paymentSchema");
const cardSchema = require("../models/cardsSchema");
exports.getUserEnrolledCourses = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await paymentSchema.find({ userID: id });

    // Extract unique course IDs from payment records
    const courseIDs = [...new Set(response.map((record) => record.courseID))];

    // Fetch course details for each course ID
    //to pass the array of courseIDs we use $in
    const courses = await cardSchema.find({ _id: { $in: courseIDs } });

    res.status(200).json({ data: courses, count: courseIDs.length });
  } catch (error) {
    console.error("Error while fetching the user dashboard course: ", error);
    res.status(500).json({
      success: false,
      error: "No courses found...",
      message: error.message,
    });
  }
};
