const mongoose = require("mongoose");

const candleSchema = new mongoose.Schema({
  jar: {
    type: String,
  },
  wax: {
    type: String,
  },
  scents: {
    type: Array,
  },
  color: {
    type: String,
  },
  wick: {
    type: String,
  },
});

const Candle = new mongoose.model("Candle", candleSchema);
module.exports = Candle;
