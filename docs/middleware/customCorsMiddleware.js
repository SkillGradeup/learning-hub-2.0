// corsMiddleware.js
const customCorsMiddleware = (req, res, next) => {
  const allowedOrigins = ["http://localhost:3000"]; // Add your allowed origins here any front end app
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
};

module.exports = customCorsMiddleware;
