const express = require("express");
const router = express.Router();
const { login, refresh, logout } = require("../controllers/authController");
const loginLimitter = require("../middlewares/loginLimiter");

router.route("/").post(loginLimitter, login);

router.route("/refresh").get(refresh);

router.route('/logout').post(logout);

module.exports = router;
