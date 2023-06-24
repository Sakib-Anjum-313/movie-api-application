// external imports
const express = require("express");

// internal imports
const router = express.Router();
const { getLogin } = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");


// login Router
router.get("/", decorateHtmlResponse("Login"), getLogin);




module.exports = router;