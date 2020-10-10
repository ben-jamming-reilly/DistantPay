const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const connectDB = require("./utils/db");

connectDB();

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(bodyParser.json());

// Specifies the folder for images
app.use("./uploads", express.static("uploads"));

app.use("/api/orders", require("./routes/api/order"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/items", require("./routes/api/items"));
app.use("/api/uploads", require("./routes/api/uploads"));

// Socket goes here
io.on("connection", async (socket) => {
  console.log("Client Connected: " + JSON.stringify(socket.handshake.query));

  socket.on("new_order", data => {
    
  });

  socket.on("complete_order", data => {
    
  });

  socket.on("new_item", data => {
    
  });

  socket.on("remove_item", data => {
    
  });

  socket.on("mod_item", data => {
    
  });


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
