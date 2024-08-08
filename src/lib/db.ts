import { drizzle } from "drizzle-orm/node-postgres";

// @ts-ignore
import { Pool } from "pg";

// Create a new database pool instance
const pool = new Pool({
  connectionString: process.env.DB_URL,
});

// Log message when trying to connect
console.log("Attempting to connect to the database...");

const db = drizzle(pool);

(async () => {
  try {
    await pool.connect(); // Ensure the connection is established
    console.log("Connected to the database successfully!");
  } catch (err: any) {
    console.error("Failed to connect to the database:", err.stack);
  }
})();
export default db;
