const mongoose = require("mongoose");
const resourcesSchema = new mongoose.Schema(
  {
    courseId: {
      type: String,
      required: true,
    },
    pdfLink: {
      type: String,
      required: true,
    },
    // pptLink: {
    //   type: String,
    //   required: true,
    // },
    videoLink: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("resources", resourcesSchema);
