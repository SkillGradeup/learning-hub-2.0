const swaggerJsdoc = require('swagger-jsdoc');


const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'user-management-app',
      version: '1.0.1',
      description: 'API documentation with Swagger',
    },
  },
  apis: ['./routes/*.js'], // Path to your API routes
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
