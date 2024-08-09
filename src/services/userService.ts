import db from "@/lib/db";
import { users } from "@/schema";
import { eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";
// Create a new user
export async function createUser(
  userData: Omit<typeof users.$inferInsert, "id">,
) {
  try {
    const newUser = {
      ...userData,
      id: uuidv4(), // Generate a new UUID for each user
    };
    const result = await db.insert(users).values(newUser).returning();
    console.log("User created successfully:", result);
    return result;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

// Get a user by ID
export async function getUserById(userId: string) {
  try {
    const userArray: any = await db
      .select()
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);
    const user = userArray[0] || null;
    console.log("Fetched user by ID:", user);
    return user;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
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

// Update a user by ID
export async function updateUser(
  userId: string,
  updateData: Partial<typeof users.$inferInsert>,
) {
  try {
    const result = await db
      .update(users)
      .set(updateData)
      .where(eq(users.id, userId))
      .returning();
    console.log("User updated successfully:", result);
    return result;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}

// Delete a user by ID
export async function deleteUser(userId: string) {
  try {
    const result = await db
      .delete(users)
      .where(eq(users.id, userId))
      .returning();
    console.log("User deleted successfully:", result);
    return result;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}

// Update user balance (for transactions)
export async function updateUserBalance(userId: string, newBalance: number) {
  try {
    const result = await db
      .update(users)
      .set({ balance: newBalance })
      .where(eq(users.id, userId))
      .returning();
    console.log("User balance updated successfully:", result);
    return result;
  } catch (error) {
    console.error("Error updating user balance:", error);
    throw error;
  }
}
