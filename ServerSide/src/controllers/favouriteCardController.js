const CardSchema = require("../models/cardsSchema");
exports.getFavouriteCards = async (req, res) => {
  try {
    const favouriteCards = await CardSchema.find({ favourite: true });
    res.status(201).json({
      success: true,
      favouriteData: favouriteCards,
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

// Favourite Card
exports.updateFavCards = async (req, res) => {
  try {
    const { id } = req.params;
    const favCard = await CardSchema.findById(id);

    if (!favCard) {
      return res.status(404).json({
        success: false,
        message: "Card not found",
      });
    }

    // Toggle the value of the favourite field
    favCard.favourite = !favCard.favourite;

    // Save the updated card
    await favCard.save();

    res.status(200).json({
      success: true,
      data: favCard,
      message: "Favourite status updated successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
