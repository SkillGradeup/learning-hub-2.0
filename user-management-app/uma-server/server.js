const express = require("express");
const sql = require("mssql");

const app = express();
const port = 3000;

// Configuration for your SQL Server connection
const dbConfig = {
  user: "Learning_Hub",
  password: "password",
  server: "DESKTOP-343T846", // You can use 'localhost\\instance' to connect to named instance
  database: "Learning_Hub",
  options: {
    trustServerCertificate: true, // For Azure SQL Database, set this to true
  },
};

// Define route for the homepage
app.get("/", async (req, res) => {
  try {
    // Connect to the database
    await sql.connect(dbConfig);

    // Query
    const result = await sql.query`SELECT * FROM users`;

    // Close the connection
    await sql.close();

    // Send response with the query result
    res.send(result);
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
