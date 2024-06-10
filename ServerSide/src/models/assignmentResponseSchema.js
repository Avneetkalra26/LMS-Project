const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  ques_answers: [
    {
      assignmentQuestion: {
        type: String,
        required: true,
      },
      assignmentAnswer: {
        type: String,
        required: true,
      },
    },
  ],
  submit: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("assignmentResponse", responseSchema);
