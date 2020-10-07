const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  time_ordered: {
    type: Date,
    default: Date.now(),
  },
  complete: {
    type: Boolean,
    default: false,
  },
  paid: {
    type: Boolean,
    default: false,
  },
  total: {
    type: Number,
    required: true,
  },
  items: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
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
