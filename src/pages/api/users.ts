import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    try {
      const result = await client.query("SELECT * FROM users");
      res.status(200).json(result.rows);
    } catch (error) {
      res.status(500).json({ error: "Database query failed" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
