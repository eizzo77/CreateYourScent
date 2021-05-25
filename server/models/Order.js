const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  date: {
    type: String,
  },
  candle: {
    type: Object,
  },
});

const Order = new mongoose.model("order", orderSchema, "order");
module.exports = Order;
