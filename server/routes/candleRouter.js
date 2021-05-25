const express = require("express");
const candleRouter = express.Router();

const { getCandles } = require("../controller/candlesController");
// recipeRouter.post("/", createRecipe);
candleRouter.get("/", getCandles);
// recipeRouter.delete("/:id", deleteRecipe);

module.exports = candleRouter;
