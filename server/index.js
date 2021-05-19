const express = require("express");
const cors = require("cors");
require("./db/mongoose");
const path = require("path");
const port = process.env.PORT || 5555;
const app = express();

app.use(express.json());
app.use(cors());

const QuizItemsRouter = require("./routes/quizItemsRoutes");
// const favouriteRouter = require("./routes/favouriteRouter");

app.use("/api/quiz-items", QuizItemsRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
} else {
  app.use(express.static(path.join(__dirname, "../client/public")));
}

// app.use("/api/recipes", recipeRouter);
// app.use("/api/favourites", favouriteRouter);
app.listen(port, () => console.log(`application start at ${port}`));
