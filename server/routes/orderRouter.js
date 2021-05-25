const express = require("express");
const orderRouter = express.Router();
const { getOrders, createOrder } = require("../controller/orderController");

orderRouter.post("/", createOrder);
orderRouter.get("/", getOrders);
// recipeRouter.delete("/:id", deleteRecipe);

module.exports = orderRouter;
