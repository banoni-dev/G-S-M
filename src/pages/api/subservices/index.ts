import { createSubservice, getAllSubservices } from "@/services/serviceService";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    switch (req.method) {
      case "GET": // Fetch all subservices
        const subservices = await getAllSubservices();
        res.status(200).json(subservices);
        break;

      case "POST": // Create a new subservice
        const newSubservice = await createSubservice(req.body);
        res.status(201).json(newSubservice);
        break;

      default:
        res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error handling subservices API:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
