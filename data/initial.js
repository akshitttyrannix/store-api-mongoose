require("dotenv").config();

const connectDB = require("../db/connect");
const Product = require("../models/products");

const productsData = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(productsData);
    console.log("Products data created successfully");
    process.exit(0);
  } catch (error) {
    console.log("Error creating products data");
    console.log(error);
    process.exit(1);
  }
};

start();
