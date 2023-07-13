const getAllProducts = async (req, res) => {
  // throw new Error("could not get products");
  res.status(200).json({
    message: "get all products",
  });
};

const getAllStaticProducts = async (req, res) => {
  res.status(200).json({
    message: "get all static products",
  });
};

module.exports = {
  getAllProducts,
  getAllStaticProducts,
};
