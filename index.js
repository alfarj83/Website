// uses express dependency
// npm i express
const express = require('express')
// dependency to access db
const mongoose = require('mongoose');
// const Article = require('./research-database/article.model.js');
const referenceRoute = require('./routes/article.route.js');
const app = express()

// middleware
app.use(express.json());
// can directly modify database
app.use(express.urlencoded({ extended: false }));

// adds routes to api
app.use("/api/references", referenceRoute);

// sets server to run on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// req = request (whatever client sends to server)
// res = response (what server responds back with)
app.get('/', (req, res) => {
    res.send("hello from Node API");
});

// my db pass: fJYCw1wL4kZRL0hl
mongoose.connect("mongodb+srv://jemiapalo83:fJYCw1wL4kZRL0hl@thevoice.8r2ml.mongodb.net/Node-API?retryWrites=true&w=majority&appName=TheVoice")
.then(() => {
    console.log("Connected!");
})
.catch(() => {
    console.log("Connection failed!");
})