import db from "@/lib/db";
import { orders, subservices, users } from "@/schema";
import { eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";

interface ProcessOrderInput {
  userId: string;
  subserviceId: string;
  amount: number;
}

// Process an order (buy a subservice, update user balance)
export async function processOrder({
  userId,
  subserviceId,
  amount,
}: ProcessOrderInput) {
  try {
    return await db.transaction(async (tx) => {
      // Fetch the user
      const userArray = await tx
        .select()
        .from(users)
        .where(eq(users.id, userId))
        .limit(1);

      const user = userArray[0];
      if (!user) {
        throw new Error("User not found");
      }

      // Fetch the subservice
      const subserviceArray = await tx
        .select()
        .from(subservices)
        .where(eq(subservices.id, subserviceId))
        .limit(1);

      const subservice = subserviceArray[0] || null;

      if (!subservice) {
        throw new Error("Subservice not found");
      }

      // Ensure user has sufficient balance
      if (user.balance! < amount) {
        throw new Error("Insufficient balance");
      }

      // Deduct balance from the user
      await tx
        .update(users)
        .set({ balance: user.balance! - amount })
        .where(eq(users.id, userId));

      // Create an order
      const newOrder = {
        id: uuidv4(),
        userId,
        subserviceId,
        amount,
        status: "completed",
        createdAt: new Date(),
      };

      const insertedOrder = await tx
        .insert(orders)
        .values(newOrder)
        .returning();

      return insertedOrder;
    });
  } catch (error) {
    console.error("Error processing order:", error);
    throw error; // Re-throw the error to propagate it up the call stack
  }
}

// Get all orders for a user
export async function getUserOrders(userId: string) {
  try {
    const userOrders = await db
      .select()
      .from(orders)
      .where(eq(orders.userId, userId));

    return userOrders;
  } catch (error) {
    console.error("Error fetching user orders:", error);
    throw error;
  }
}

// Get a specific order by ID
export async function getOrderById(orderId: string) {
  try {
    const orderArray = await db
      .select()
      .from(orders)
      .where(eq(orders.id, orderId))
      .limit(1);

    const order = orderArray[0] || null;

    return order || null;
  } catch (error) {
    console.error("Error fetching order by ID:", error);
    throw error;
  }
}

// Refund an order
export async function refundOrder(orderId: string) {
  try {
    return await db.transaction(async (tx) => {
      // Fetch the order
      const orderArray = await tx
        .select()
        .from(orders)
        .where(eq(orders.id, orderId))
        .limit(1);

      const order = orderArray[0] || null;

      if (!order) {
        throw new Error("Order not found");
      }

      // Fetch the user to refund
      const userArray = await tx
        .select()
        .from(users)
        .where(eq(users.id, order.userId))
        .limit(1);

      const user = userArray[0] || null;

      if (!user) {
        throw new Error("User not found");
      }

      // Refund the user
      await tx
        .update(users)
        .set({ balance: user.balance! + order.amount })
        .where(eq(users.id, user.id));

      // Update the order status to "refunded"
      const refundedOrder = await tx
        .update(orders)
        .set({ status: "refunded" })
        .where(eq(orders.id, orderId))
        .returning();

      return refundedOrder;
    });
  } catch (error) {
    console.error("Error processing refund:", error);
    throw error;
  }
}
