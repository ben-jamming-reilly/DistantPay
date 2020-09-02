const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  user_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  date_created: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = User = mongoose.model("user", UserSchema);
