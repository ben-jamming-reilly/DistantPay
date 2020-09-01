const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  name: {
    type: String,
  },
  time_ordered: {
    type: Date,
    default: Date.now(),
  },
  items: [
    {
      id: {
        id: mongoose.Schema.Types.ObjectId,
        ref: "item",
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
});

module.exports = Order = mongoose.model("order", OrderSchema);
