const CardSchema = require("../models/cardsSchema");
exports.getCardsData = async (req, res) => {
  try {
    const cardData = await CardSchema.find();
    res.status(201).json({
      success: true,
      data: cardData,
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
//getCardDatabyId
//this controller is also used tp fetch the courseName by  id in the certificate component
exports.getCardsDataById = async (req, res) => {
  try {
    const {courseId} = req.params;
    const cardDataById = await CardSchema.findById({ _id:courseId});
    if (!cardDataById) {
      return res.status(404).json({
        succss: false,
        message: "Data not found",
      });
    }
    res.status(201).json({
      success: true,
      data: cardDataById,
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
