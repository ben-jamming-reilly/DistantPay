const express = require("express");
const router = express.Router();
const config = require("config");
const multer = require("multer");
const fs = require("fs");
const auth = require("../../middleware/auth");
const Item = require("../../models/Item");

// Middleware for file storage

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
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

// Get all the menu items that are in stock
router.get("/all", auth, async (req, res) => {
  try {
    const allItems = await Item.find({}).lean();
    return res.json(allItems);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

// Creates a new menu item, needs auth middleware added after tested
router.post("/", upload.single("image"), async (req, res) => {
  // Keep in mind that this is sent as multipart/formdata
  const form = JSON.parse(req.body.data);
  try {
    let item = new Item({
      name: form.name,
      price: form.price,
      pic_filename: req.file.filename,
      item_number: form.item_number,
      desc: form.desc,
      in_stock: form.in_stock,
      allergens: form.allergens,
    });

    await item.save();

    // needs to emit an update to all sockets

    return res.status(201).json(item);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

// Modifies a menu item, needs auth middleware added after tested
router.post("/:id", upload.single("image"), async (req, res) => {
  const form = JSON.parse(req.body.data);
  const id = req.params.id;
  try {
    let modItem = await Item.findById(id);
    if (!modItem)
      return res
        .status(404)
        .json({ errors: [{ msg: "Item does not exist." }] });

    // need to handle when there is no file uploaded as well.
    if (req.file) {
      // if there is a new upload then update the file_name
      fs.unlinkSync("./uploads/" + removeItem.pic_filename);
      modItem.pic_filename = req.file.filename;
    }

    // Update all other file info
    modItem.name = form.name;
    modItem.price = form.price;
    modItem.item_number = form.item_number;
    modItem.desc = form.desc;
    modItem.in_stock = form.in_stock;
    modItem.allergens = form.allergens;

    await modItem.save();

    // needs to emit an update to all sockets

    return res.status(200).json(modItem);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

// Deletes an item from the menu, needs auth middleware added after tested
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let removeItem = await Item.findById(id);
    if (!removeItem)
      return res
        .status(404)
        .json({ errors: [{ msg: "Item does not exist." }] });

    // Removes food pic from uploads dir
    fs.unlinkSync("./uploads/" + removeItem.pic_filename);

    await Item.findByIdAndDelete(id);

    // needs to emit an update to all sockets

    return res.status(200).json({ msg: "Item removed." });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
