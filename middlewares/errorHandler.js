const errorHandlerMiddleware = async (err, req, res, next) => {
  console.log(`Error: ${err.message}`);

  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({
    status: statusCode,
    message: "Something went wrong, Please try again later",
  });
};

module.exports = errorHandlerMiddleware;
