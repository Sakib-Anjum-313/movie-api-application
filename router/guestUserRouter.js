// external imports
const express = require("express");

// internal imports
const router = express.Router();
const { getGuestUser } = require("../controller/guestController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// login Router
router.get("/", decorateHtmlResponse("regUser"), getGuestUser);


module.exports = router;
