const express = require("express");
const router = express.Router();

//import controller
const getCardsData = require("../controllers/getCardsData");
const {signupUser} = require("../controllers/authUser");

//define api routes and map it with controller
router.get("/getCards", getCardsData);
router.post("/signupUser", signupUser);
// router.post("/signinUser",signinUser)

module.exports = router;
