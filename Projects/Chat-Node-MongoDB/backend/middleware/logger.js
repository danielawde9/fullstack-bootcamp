// middleware/logger.js

// Middleware to log each request's URL and timestamp
module.exports = (req, res, next) => {
    console.log(`Logged ${req.method} ${req.url} at ${Date.now()}`);
    next();
  };
  