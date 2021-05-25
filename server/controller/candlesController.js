const candles = require("../models/Candle");

// const createCandle = async (req, res) => {
//   try {
//     console.log(req.body.url);
//     let checkExists = await candle.findOne({ url: req.body.url });
//     if (checkExists) throw Error("already exists");
//     let recipeScrapped = await recipeScrapper(req.body.url);
//     recipeScrapped = {
//       ...recipeScrapped,
//       id: req.body.url.split("/").slice(-1).join(),
//     };
//     const recipe = await new Recipe(recipeScrapped);
//     await recipe.save();
//     res.status(201).send(recipe);
//   } catch (e) {
//     if (e.message === "already exists") {
//       res.status(400).send(checkExists);
//     }
//     console.log(e.message);
//     res.status(400).send(e);
//   }
// };

const getCandles = async (req, res) => {
  try {
    console.log("HERE");
    const candleData = await candles.find();
    console.log(candleData);
    res.status(200).send(candleData);
  } catch (e) {
    res.status(404).send(e);
  }
};
// const deleteRecipe = async (req, res) => {
//   try {
//     console.log("delete");
//     const deleteResult = await Recipe.findOneAndDelete({ id: req.params.id });
//     res.status(200).send(deleteResult);
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// };
module.exports = {
  getCandles,
};
