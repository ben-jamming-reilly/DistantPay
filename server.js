const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const http = require("http");
const socket = require("socket.io");
const connectDB = require("./config/db");

connectDB();

const app = express();
const server = http.createServer(app);
const io = socket(server);

// To parse application/json
app.use(bodyParser.json());

// Routes Go Here
// --Orders (A Reciept Essentially)
// --Items (The food that will be sold)
// --Users (The Business End)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started on " + PORT));
