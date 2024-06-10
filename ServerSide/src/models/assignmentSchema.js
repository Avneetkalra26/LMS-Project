
const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
  },
  questions: {
    type: [String], // Specify that it's an array of strings
    required: true,
  },
});

module.exports = mongoose.model("assignmentSchema", assignmentSchema);
