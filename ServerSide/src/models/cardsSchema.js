const mongoose = require("mongoose");
const CardSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      maxLength: 50,
    },
    description: {
      type: String,
      required: true,
      maxLength: 50,
    },
    imageUrl: {
        type: String,
        required: true
    }
  });
  
  //export the schema by the name of Todo and this can be used by the name of Todo.
  module.exports= mongoose.model( "CardSchema", CardSchema )

