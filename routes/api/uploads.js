const express = require("express");
const router = express.Router();
const fs = require("fs");

// Gives the image to the browser
router.get("/:filename", async (req, res) => {
  const filename = String(req.params.filename);
  try {
    let readstream = fs.createReadStream("./uploads/" + filename);
    readstream.pipe(res);
  } catch (err) {
    console.err(err.message);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
