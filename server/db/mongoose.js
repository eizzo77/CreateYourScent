const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://ItayZ:frXBQm1hw1BeUDvu@in-light.j4dym.mongodb.net/in-light-candle?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("connected to DB"));
