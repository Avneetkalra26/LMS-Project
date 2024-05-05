const CardSchema = require("../models/cardsSchema");
const getCardsData = async (req, res) => {
  try {
    const cardData = await CardSchema.find();
    res.status(200).json({
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
module.exports= getCardsData;