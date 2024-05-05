const mongoose = require("mongoose");
const authSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    maxLenght: 50,
  },
  password: {
    type: String,
    maxLenght: 50,
  },
  email: {
    type: String,
    unique: true,
    maxLenght: 50,
  },
});
module.exports = mongoose.model("authSchema", authSchema);
