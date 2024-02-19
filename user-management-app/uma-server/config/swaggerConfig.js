const swaggerJsdoc = require('swagger-jsdoc');
const glob = require('glob');
const path = require('path');

// Define the base path for your route files
const routesPath = path.join(__dirname, '../routes');
console.log("routerPath",routesPath)

// Find all route files using glob pattern
const routeFiles = glob.sync(`${routesPath}/*.js`);

// Define options for Swagger
const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'user-management-app',
            version: '1.0.1',
            description: 'API documentation with Swagger',
        },
    },
    // Dynamically load route files
    apis: routeFiles,
};

// Generate Swagger specification
const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
