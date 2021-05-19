const mongoose = require("mongoose");

const quizItemsSchema = new mongoose.Schema({
  jars: {
    type: Object,
    required: true,
  },
  waxes: {
    type: Object,
    required: true,
  },
  scents: {
    type: Object,
    required: true,
  },
  colors: {
    type: Object,
    required: true,
  },
  wicks: {
    type: Object,
    required: true,
  },
});

const QuizItems = new mongoose.model("quiz-items", quizItemsSchema);
module.exports = QuizItems;
