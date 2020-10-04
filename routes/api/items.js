const express = require("express");
const router = express.Router();
const config = require("config");
const multer = require("multer");

const fs = require("fs");
const auth = require("../../middleware/auth");

const Item = require("../../models/Item");

const storageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    const parts = file.mimetype.split("/");
    cb(null, String(file.fieldname + "-" + Date.now() + "." + parts[1]));
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storageEngine,
  fileFilter: fileFilter,
});

// Get all the menu items that are in stock
router.get("/", async (req, res) => {
  try {
    const avaliableItems = await Item.find({ in_stock: true }).lean();

    return res.json(avaliableItems);
  } catch (err) {
    console.err(err.message);
    return res.status(500).send("Server Error");
  }
});

// Get all the menu items that are in stock
router.get("/all", auth, async (req, res) => {
  try {
    const allItems = await Item.find({}).lean();
    return res.json(allItems);
  } catch (err) {
    console.err(err.message);
    return res.status(500).send("Server Error");
  }
});

// Creates a new menu item
router.post("/", upload.single("image"), async (req, res) => {
  try {
    console.log(req.file);
  } catch (err) {
    console.err(err.message);
    return res.status(500).send("Server Error");
  }
});

// Modifies a menu item
router.post("/:id", async (req, res) => {
  try {
  } catch (err) {
    console.err(err.message);
    return res.status(500).send("Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let removeItem = await Item.findById(id);
  } catch (err) {
    console.err(err.message);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
