const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  item: {
    type: Object,
  },
});

const Order = new mongoose.model("order", orderSchema);
module.exports = Order;
