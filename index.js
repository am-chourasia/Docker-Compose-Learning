const express = require('express');
const mongoose = require('mongoose');
const app = express();

const databaseURL = 'mongodb://mymongo:27017/testup';
mongoose
    .connect(databaseURL)
    .then(() => {
        console.log("Database Connected");
    })
    .catch(() => {
        console.log("Error connecting to database");
    });

app.get('/', (req, res) => {
    res.send("Hello There");
})

app.listen(8000, () => {
    console.log("Server running at http://localhost:8000");
});