// external imports
const express = require("express");

// internal imports
const router = express.Router();
const { getRegUser } = require("../controller/regUserController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// login Router
router.get("/", decorateHtmlResponse("regUser"), getRegUser);

module.exports = router;
