const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
  },
  orders: {
    type: Array,
  },
  isAdmin: {
    type: Boolean,
  },
});

const User = new mongoose.model("User", userSchema);
module.exports = User;
