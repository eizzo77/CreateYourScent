const express = require("express");
const quizItemsRouter = express.Router();

const { getQuizItems } = require("../controller/quizItemsController");
// recipeRouter.post("/", createRecipe);
quizItemsRouter.get("/", getQuizItems);
// recipeRouter.delete("/:id", deleteRecipe);

module.exports = quizItemsRouter;
