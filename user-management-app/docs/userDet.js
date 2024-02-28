// This code is vulnerable to SQL injection
function getUserById(userId) {
  const query = `SELECT * FROM users WHERE UserID = ${userId}`;
  // Execute query and return user data
}

// Usage example
const userId = "1; DROP TABLE users; --";
getUserById(userId);
