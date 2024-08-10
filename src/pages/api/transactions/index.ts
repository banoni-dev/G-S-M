import { processOrder } from "@/services/transactionService";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    try {
      const { userId, subserviceId, amount } = req.body;
      const order = await processOrder({ userId, subserviceId, amount });
      res.status(201).json(order);
    } catch (error: any) {
      console.error("Error processing order:", error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
