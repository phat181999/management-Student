const { Pool, Client } = require("pg");
const fs = require("fs");
const path = require("path");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "assignment",
  password: "tanphat99",
  port: 5432,
});

const sqlFilePath = path.join(__dirname, "../db.sql");
const sqlScript = fs.readFileSync(sqlFilePath, "utf-8");

const checkDatabaseConnection = async () => {
  try {
    const client = await pool.connect();
    console.log("Connected to PostgreSQL database");
    await client.query(sqlScript);
    client.release();
    return true;
  } catch (error) {
    console.error("Error connecting to PostgreSQL:", error);
    return false;
  }
};

module.exports = { checkDatabaseConnection, pool };
