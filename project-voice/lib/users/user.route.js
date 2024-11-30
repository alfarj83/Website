const express = require("express");
const router = express.Router();
const {SignUp, LogIn} = require('./user.controller.js');

// directs to sign in page
router.get('/signup', SignUp);

// directs to login page
router.get('/login', LogIn);

module.exports = router;
