const Product = require("../models/products");

const getAllProducts = async (req, res) => {
  // we can control which parameters are allowed by using this approach
  const { featured, company, name } = req.query;

  const queryParams = {};
  if (featured) queryParams.featured = featured;
  if (company) queryParams.company = company;
  if (name) queryParams.name = { $regex: name, $options: "i" }; // check name contains

  const products = await Product.find(queryParams);

  return res.status(200).json({
    message: "Products fetched successfully",
    count: products.length,
    products,
  });
};

const getAllStaticProducts = async (req, res) => {
  const staticProducts = await Product.find({ featured: true });

  return res.status(200).json({
    message: "Static Products fetched successfully",
    count: staticProducts.length,
    staticProducts,
  });
};

module.exports = {
  getAllProducts,
  getAllStaticProducts,
};
