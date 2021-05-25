const mongoose = require("mongoose");

const candleSchema = new mongoose.Schema({
  jar: {
    type: String,
    required: true,
  },
  wax: {
    type: String,
    required: true,
  },
  scents: {
    type: Array,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  wick: {
    type: String,
    required: true,
  },
  burnTime: {
    type: String,
  },
  imageURL: {
    type: String,
  },
});

const Candle = new mongoose.model("candle", candleSchema, "candle");
module.exports = Candle;
