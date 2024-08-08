import { isValidUUID } from "@/lib/utils";
import { deleteUser, getUserById, updateUser } from "@/services/userService";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { userId } = req.query as { userId?: string };

  switch (req.method) {
    case "GET":
      if (userId) {
        if (!isValidUUID(userId)) {
          res.status(400).json({ message: "Invalid UUID format" });
          return;
        }

        try {
          const user = await getUserById(userId);
          if (user) {
            res.status(200).json(user);
          } else {
            res.status(404).json({ message: "User not found" });
          }
        } catch (error: any) {
          res
            .status(500)
            .json({ message: "Error fetching user", error: error.message });
        }
      }
      break;
    case "PUT": // Update a user by ID
      if (!userId || !isValidUUID(userId)) {
        res.status(400).json({ message: "Invalid UUID format" });
        return;
      }

      try {
        const updatedUser = await updateUser(userId, req.body);
        res.status(200).json(updatedUser);
      } catch (error: any) {
        res
          .status(500)
          .json({ message: "Error updating user", error: error.message });
      }
      break;

    case "DELETE": // Delete a user by ID
      if (!userId || !isValidUUID(userId)) {
        res.status(400).json({ message: "Invalid UUID format" });
        return;
      }

      try {
        const deletedUser = await deleteUser(userId);
        res.status(200).json(deletedUser);
      } catch (error: any) {
        res
          .status(500)
          .json({ message: "Error deleting user", error: error.message });
      }
      break;

    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
