const serverErrorHandler = (err, req, res, next) => {
  console.log(err.stack)

  const statusCode = err.statusCode || 500 // server error
  const message = err.message || "Internal server error"

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
}

module.exports = serverErrorHandler
