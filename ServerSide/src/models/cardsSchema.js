const mongoose = require("mongoose");
const CardSchema = new mongoose.Schema({
  title: {
    type: String,
    maxLength: 50,
  },
  description: {
    type: String,
    maxLength: 300,
  },
  imageUrl: {
    type: String,
    maxLength: 300,
  },
  rating: {
    type:Number,
    maxLength:10,
  },
  favourite:{
    type : Boolean ,
    default:false
  }
});

//export the schema by the name of Todo and this can be used by the name of Todo.
module.exports = mongoose.model("CardSchema", CardSchema);
