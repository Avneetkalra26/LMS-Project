const express = require("express");
const router = express.Router();

//import controller
const {getCardsData, getCardsDataById} = require("../controllers/getCardDataController");
const {signupUser,signinUser} = require("../controllers/authUserController");
const {updateRatingController} = require("../controllers/updateRatingController")
const {getFavouriteCards,updateFavCards} = require("../controllers/favouriteCardController")
const {getResourcesData} = require("../controllers/resourcesController")
const {paymentGateway} = require("../controllers/paymentController")
//define api routes and map it with controller
router.get("/getCards", getCardsData)
router.post("/signupUser", signupUser)
router.post("/signinUser", signinUser)
router.put("/updaterating/:id",updateRatingController)
router.get("/favouriteCards",getFavouriteCards)
router.put("/updatefavcards/:id",updateFavCards)
router.get("/getcardbyid/:id",getCardsDataById)
router.get("/getResourcesData/:id",getResourcesData)
router.post("/payment",paymentGateway)

module.exports = router;
