const express = require("express");
const router = express.Router();
const {SignIn, LogIn} = require('./user.controller.js');

// directs to sign in page
router.get('/signin', SignIn);

// directs to login page
router.get('/login', LogIn);

module.exports = router;
