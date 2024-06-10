const mongoose = require("mongoose");
const feedbackSchema = new mongoose.Schema({
  userId: {
    type: String,
    maxLenght: 50,
  },
  courseId: {
    type: String,
    maxLenght: 50,
  },
  username: {
    type: String,
    maxLenght: 50,
  },
  message: {
    type: String,
    maxLenght: 50,
  },
  feedbackResponse: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("feedback", feedbackSchema);
