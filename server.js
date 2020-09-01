const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

connectDB();

const app = express();

// To parse application/json
app.use(bodyParser.json());

// Routes Go Here
// --Orders (A Reciept Essentially)
// --Items (The food that will be sold)
// --Users (The Business End)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started on " + PORT));
