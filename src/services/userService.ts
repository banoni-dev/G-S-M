import db from "@/lib/db";
import { users } from "@/schema";

// Create a new user
export async function createUser(userData: typeof users.$inferInsert) {
  try {
    const result = await db.insert(users).values(userData).returning();
    console.log("User created successfully:", result);
    return result;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error; // Re-throw to propagate the error up the call stack
  }
}

// Get all users
export async function getAllUsers() {
  try {
    //@ts-ignore
    const allUsers = await db.select().from(users);
    console.log("Fetched all users:", allUsers);
    return allUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
//
//// Get a user by ID
//export async function getUserById(userId: number) {
//  return db.select().from(users).where(eq(users.id, userId)).limit(1).first();
//}
//

//
//// Update a user by ID
//export async function updateUser(
//  userId: number,
//  updateData: Partial<typeof users.$inferInsert>,
//) {
//  return db
//    .update(users)
//    .set(updateData)
//    .where(eq(users.id, userId))
//    .returning();
//}
//
//// Delete a user by ID
//export async function deleteUser(userId: number) {
//  return db.delete(users).where(eq(users.id, userId)).returning();
//}
//
//// Update user balance (for transactions)
//export async function updateUserBalance(userId: number, newBalance: number) {
//  return db
//    .update(users)
//    .set({ balance: newBalance })
//    .where(eq(users.id, userId))
//    .returning();
//}
