// uses express dependency
// npm i express
const express = require('express')
// dependency to access db
const mongoose = require('mongoose');
// to connect database to frontend (securely)
const cors = require('cors');
// routes
const referenceRoute = require('./src/articles/article.route.js');
// const userRoute = require('./src/users/user.route.js');
const app = express()

// to secure db url
require('dotenv').config()

// middleware
app.use(express.json());
// can directly modify database
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}))
app.use(express.urlencoded({ extended: false }));

// adds routes to api
app.use("/api/references", referenceRoute);
// app.use("/api/auth", userRoute);

// sets server to run on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// req = request (whatever client sends to server)
// res = response (what server responds back with)
app.get('/', (req, res) => {
    res.send("This is the Voice!");
});

// my db pass: fJYCw1wL4kZRL0hl
mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log("Connected!");
})
.catch(() => {
    console.log("Connection failed!");
})