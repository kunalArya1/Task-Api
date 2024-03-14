export const CustomeError = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    messsage: err.messsage,
    errName: err.name,
  });
};









