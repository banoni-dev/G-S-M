import { users } from "@/schema";
import { drizzle } from "drizzle-orm/postgres-js";
import { NextApiRequest, NextApiResponse } from "next";
import postgres from "postgres";
const connectionString = process.env.DATABASE_URL || "";
const client = postgres(connectionString, { prepare: false });
const db = drizzle(client);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    // Example query to test the connection
    const result = await db.select().from(users);
    res.status(200).json({ message: "Database connection successful", result });
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ message: "Database connection error", error });
  }
}
