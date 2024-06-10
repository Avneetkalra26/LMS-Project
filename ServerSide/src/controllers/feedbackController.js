const feedbackSchema = require("../models/feedbackSchema");

exports.postFeedbackData = async (req, res) => {
  try {
    const { userID} = req.params;
    const {courseID,username,message} = req.body
    const feedbackResponse = await feedbackSchema.create({userId:userID,courseId:courseID,username,message,feedbackResponse:true });
    res.status(201).json({
      success: true,
      data: feedbackResponse,
      message: "Get Data successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};


exports.getFeedbackData = async (req,res)=>{
    try {

        const {userID,courseID} = req.params
        const feedbackResponse = await feedbackSchema.findOne({userId:userID,courseId:courseID})

        res.status(201).json({
            success: true,
            data: feedbackResponse,
            message: "Get Data successfully",
          });
        
    } catch (error) {
        console.log("Error while getting feedback")
        console.log(error)
        
    }
}
