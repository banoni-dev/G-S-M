import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "@/services/userService";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { userId } = req.query as { userId?: string }; // Use URL parameter

  switch (req.method) {
    case "POST": // Create a new user
      const newUser = await createUser(req.body);
      res.status(201).json(newUser);
      break;

    case "GET":
      if (userId) {
        // Get a single user by ID
        const user = await getUserById(userId);
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } else {
        // Get all users
        const users = await getAllUsers();
        res.status(200).json(users);
      }
      break;

    case "PUT": // Update a user by ID
      if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
      }
      const updatedUser = await updateUser(userId, req.body);
      res.status(200).json(updatedUser);
      break;

    case "DELETE": // Delete a user by ID
      if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
      }
      const deletedUser = await deleteUser(userId);
      res.status(200).json(deletedUser);
      break;

    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
