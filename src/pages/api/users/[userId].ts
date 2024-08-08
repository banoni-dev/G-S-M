import { deleteUser, getUserById, updateUser } from "@/services/userService";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { userId } = req.query as { userId?: string };
  console.log("userId", userId);

  switch (req.method) {
    case "GET":
      if (userId) {
        // Get a single user by ID
        const user = await getUserById(userId);
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      }

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
