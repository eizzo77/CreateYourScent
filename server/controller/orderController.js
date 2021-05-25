const orders = require("../models/Order");

const getOrders = async (req, res) => {
  try {
    const orderData = await orders.find();
    console.log(orderData);
    res.status(200).send(orderData);
  } catch (e) {
    res.status(404).send(e);
  }
};

const createOrder = async (req, res) => {
  try {
    const insertedData = await orders.create({ ...req.body });
    console.log(insertedData);
    res.status(200).send(insertedData);
  } catch (e) {
    res.status(404).send(e.message);
  }
};

module.exports = {
  getOrders,
  createOrder,
};
