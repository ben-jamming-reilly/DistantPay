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
  pic_file_name: {
    type: String,
    require: true,
  },
  item_number: {
    type: Number,
  },
  desc: {
    type: String,
  },
  in_stock: {
    type: Boolean,
    default: false,
  },
  allergens: [
    {
      type: String,
    },
  ],
});

module.exports = Item = mongoose.model("item", ItemSchema);
