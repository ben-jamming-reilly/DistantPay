const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  pic: {
    type: String,
  },
  item_number: {
    type: Number,
  },
  desc: {
    type: String,
  },
  allergens: {
    type: String,
  },
});

module.exports = Item = mongoose.model("item", ItemSchema);
