// Using Node.js `require()`
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Using ES6 imports
import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://jemiapalo83:<db_password>@thevoice.8r2ml.mongodb.net/?retryWrites=true&w=majority&appName=TheVoice")
.then(() => {
    console.log("Connected to database!")
})
.catch(() => {
    console.log("Connection failed!");
})