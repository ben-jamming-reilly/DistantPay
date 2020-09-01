const express = require("express");
const path = require("path");
const body = require("body-parser");
const connectDB = require("./config/db");

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started on " + PORT));
