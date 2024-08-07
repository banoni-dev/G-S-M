import { Client } from "pg";

const client = new Client({
  connectionString: process.env.DB_URL,
});

client
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Connection error", err.stack));

export default client;
