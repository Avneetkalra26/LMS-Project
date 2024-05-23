const mongoose = require("mongoose")
const paymentSchema = new mongoose.Schema({
    userID:{
        type:String,
        required:true
    },
    courseID:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("payment",paymentSchema)