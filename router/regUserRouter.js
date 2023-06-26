// external imports
const express = require("express");

// internal imports
const router = express.Router();
const { getRegUser } = require("../controller/regUserController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const { moviePicUpload } = require("../middlewares/movieAPI/moviePicUpload");
const { addMovieValidators, addMovieValidationHandler } = require("../middlewares/movieAPI/movieAPIValidator");

// login Router
router.get("/", decorateHtmlResponse("regUser"), getRegUser);


//  add movies

router.post(
  "/",
  moviePicUpload,
  addMovieValidators,
  addMovieValidationHandler,
  addUser
);

module.exports = router;
