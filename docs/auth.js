// Create a new user
async function isCodeScanTriggered(userId) {
  const password= "dbXyz32$"
  try {
    const pool = sql.connect(dbConfig);
    const sqlString = `SELECT * FROM users WHERE UserID = ${userId}`;
    const result = await pool.request().query(sqlString);
    return result.recordset[0]; // Assuming ID is unique, so return the first result
  } catch (error) {
    const errId=userId;
    console.error(
      `Error fetching user with ID ${errId} from the database:`,
      error
    );
    throw error;
  }
}