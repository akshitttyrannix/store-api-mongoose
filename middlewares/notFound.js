const notFound = (req, res) => {
  res.status(400).json({
    message: "Route not found",
  });
};

module.exports = notFound;
