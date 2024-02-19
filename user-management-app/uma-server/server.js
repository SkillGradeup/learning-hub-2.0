const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swaggerConfig');
const bodyParser = require("body-parser");
const customCorsMiddleware = require("./middleware/customCorsMiddleware");
const userRouter = require("./routes/userRouter");
require("dotenv").config();

const app = express();
const NODE_APP_PORT = process.env.SERVER_PORT;

// Middleware
app.use(bodyParser.json());
app.use(customCorsMiddleware);

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Use the user router for user-related routes
app.use("/api/user", userRouter);

// Start server
app.listen(NODE_APP_PORT, () =>
  console.log(`Node server running on ${NODE_APP_PORT}`)
);
