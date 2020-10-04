const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const connectDB = require("./config/db");

connectDB();

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// To parse application/json
app.use(bodyParser.json());

app.use("./uploads", express.static("uploads"));

// Routes Go Here
// --Orders (A Reciept Essentially)
app.use("/api/users", require("./routes/api/users"));
app.use("/api/items", require("./routes/api/items"));

// Socket goes here
io.on("connection", async (socket) => {
  console.log("New Client Connected");

  socket.send("hello");
  socket.on("disconnect", () => {
    console.log("Client Disconnected");
  });
});

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  //set static file
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("Server started on " + PORT));
