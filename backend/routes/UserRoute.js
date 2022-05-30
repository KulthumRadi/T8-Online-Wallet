const express = require("express");
const {
  register,
  loginUser,
  userdata,
  userInfo,
  logoutUser,
} = require("../controllers/userController");
const {isAuthenticatedUser} = require("../utils/auth.js");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(loginUser);
router.route("/userdata").post(userdata);
router.route("/user").get(isAuthenticatedUser,userInfo);

module.exports = router;
