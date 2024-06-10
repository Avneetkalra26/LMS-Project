const express = require("express");
const router = express.Router();

//import controller and define api routes and map it with controller
const {
  getCardsData,
  getCardsDataById,
} = require("../controllers/getCardDataController");
router.get("/getCards", getCardsData);
router.get("/getcardbyid/:courseId", getCardsDataById);

const { signupUser, signinUser } = require("../controllers/authUserController");
router.post("/signupUser", signupUser);
router.post("/signinUser", signinUser);

const {
  updateRatingController,
} = require("../controllers/updateRatingController");
router.put("/updaterating/:id", updateRatingController);

const {
  getFavouriteCards,
  updateFavCards,
} = require("../controllers/favouriteCardController");
router.get("/favouriteCards", getFavouriteCards);
router.put("/updatefavcards/:id", updateFavCards);

const { getResourcesData } = require("../controllers/resourcesController");
router.get("/getResourcesData/:id", getResourcesData);

const {
  paymentGateway,
  savePaymentData,
} = require("../controllers/paymentController");
router.post("/payment", paymentGateway);
router.post("/paymentData", savePaymentData);

const {
  getUserEnrolledCourses,
} = require("../controllers/userEnrolledController");
router.get("/enrolledCourses/:id", getUserEnrolledCourses);

const { getUserProfile } = require("../controllers/userProfileController");
router.get("/getUserProfile/:id", getUserProfile);

const { getAssignmentData } = require("../controllers/assignmentController");
router.get("/getAssignment/:id", getAssignmentData);

const {
  assignmentAnswers,
} = require("../controllers/assignmentResponseController");
router.post("/assignmentSubmit/:userId", assignmentAnswers);

const { getValidation } = require("../controllers/getResponseController");
router.get("/getValidation/:userId/:courseId", getValidation);

const {
  updateValidation,
} = require("../controllers/updateVaildationController");
router.put("/updateValidation/:userId/:courseId", updateValidation);

const { getQuizData } = require("../controllers/quizController");
router.get("/getQuiz/:id", getQuizData);

const {
  getQuizResponse,
  updateQuizValidation,
} = require("../controllers/quizScores");
router.get("/getQuizResponse/:userId/:courseId", getQuizResponse);
router.put("/updateQuizValidation/:userId/:courseId", updateQuizValidation);

const {
  postFeedbackData,
  getFeedbackData,
} = require("../controllers/feedbackController");
router.post("/postFeedback/:userID", postFeedbackData);
router.get("/getFeedback/:userID/:courseID", getFeedbackData);

const { quizResponse } = require("../controllers/quizScores");
router.post("/quizResponse/:userId", quizResponse);

const { getCertificate } = require("../controllers/certificateController");
router.get("/certificate/:userID/:courseID", getCertificate);

const { getCompletedCourses } = require("../controllers/mylearningController");
router.get("/completed/:userID", getCompletedCourses);

const { contactUsController } = require("../controllers/contactUsController");
router.post("/contactUs/:userId", contactUsController);

module.exports = router;
