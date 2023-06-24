// external imports
const express = require("express");
const { check } = require("express-validator");

// internal imports
const router = express.Router();
const { getUsers, addUser } = require("../controller/AdminController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/userValidator");

// login Router
router.get("/", decorateHtmlResponse("Users"), getUsers);

//  add user
router.post(
  "/",
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);

module.exports = router;
