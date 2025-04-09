const express = require('express');
const connectToDb = require('./database');

const app = express(); // Parentheses are necessary

// connect to the database
connectToDb();

// middleware

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App is running on ${port}`);
})