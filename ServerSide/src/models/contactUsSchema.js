const mongoose = require("mongoose");
const contactUsSchema = new mongoose.Schema({
  userId: {
    type: String,
    maxLenght: 50,
  },
  username: {
    type: String,
    maxLenght: 50,
  },
  email: {
    type: String,
    maxLenght: 50,
  },
  message: {
    type: String,
    maxLenght: 50,
  },
});
module.exports = mongoose.model("contactUs", contactUsSchema);
