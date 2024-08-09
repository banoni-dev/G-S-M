import { getOrderById, refundOrder } from "@/services/transactionService";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { orderId } = req.query;

  if (typeof orderId !== "string") {
    return res.status(400).json({ message: "Invalid order ID" });
  }

  try {
    switch (req.method) {
      case "GET": // Fetch order by ID
        const order = await getOrderById(orderId);
        if (!order) {
          res.status(404).json({ message: "Order not found" });
        } else {
          res.status(200).json(order);
        }
        break;

      case "POST": // Refund order
        const refundedOrder = await refundOrder(orderId);
        if (!refundedOrder) {
          res
            .status(404)
            .json({ message: "Order not found or already refunded" });
        } else {
          res.status(200).json(refundedOrder);
        }
        break;

      default:
        res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error: any) {
    console.error("Error handling order API:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
