const mongoose = require("mongoose");

const quizScoreSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  score:{
    type:Number,
    required:true
  },
  submit: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("quizScoreSchema", quizScoreSchema);


