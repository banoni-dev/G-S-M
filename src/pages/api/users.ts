import { createUser, getAllUsers } from "@/services/userService";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { userId } = req.query;

  switch (req.method) {
    case "POST": // Create a new user
      const newUser = await createUser(req.body);
      res.status(201).json(newUser);
      break;
    case "GET":
      const users = await getAllUsers();
      res.status(200).json(users);
    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
