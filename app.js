require("dotenv").config();
require("express-async-errors");

const express = require("express");

const notFoundMiddleware = require("./middlewares/notFound");
const errorHandlerMiddleware = require("./middlewares/errorHandler");
const connectDB = require("./db/connect");

const productRoutes = require("./routes/products");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("Testing home endpoint");
  res.status(200).json({
    message: "Hey Hi! Tyrannix is here!",
  });
});

app.use("/api/v1/products", productRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log("Server started...");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
