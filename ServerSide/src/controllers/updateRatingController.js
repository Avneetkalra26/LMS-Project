const CardSchema = require("../models/cardsSchema");
exports.updateRatingController = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating } = req.body;
    const updateRating = await CardSchema.findByIdAndUpdate(
      { _id: id },
      { rating }
    );
    res.status(201).json({
      success: true,
      data: updateRating,
      message: "Rating updated successfully",
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
