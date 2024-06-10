const mongoose = require("mongoose");
// Define the quiz question schema
const quizQuestionSchema = new mongoose.Schema({
  ques: {
    type: String,
    required: true
  },
  options: {
    type: [String], // Array of strings for options
    required: true
  },
  answer: {
    type: String,
    required: true
  }
}, { _id: false });

// Define the course schema
const quizSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
  },
  quizQuestion: [quizQuestionSchema] // Array of quiz question sub-schemas
});

// Create and export the Mongoose model
module.exports = mongoose.model("Quiz", quizSchema);
