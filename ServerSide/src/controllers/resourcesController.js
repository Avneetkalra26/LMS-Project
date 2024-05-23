const resourcesSchema = require("../models/resourcesSchema");
exports.getResourcesData = async (req, res) => {
  try {
    const {id} = req.params;
    const resourcesData = await resourcesSchema.findOne({courseId:id});
    res.status(201).json({
      success: true,
      data: resourcesData,
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
