import { createService, getAllServices } from "@/services/serviceService";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    switch (req.method) {
      case "GET": // Fetch all services
        const services = await getAllServices();
        res.status(200).json(services);
        break;

      case "POST": // Create a new service
        const newService = await createService(req.body);
        res.status(201).json(newService);
        break;

      default:
        res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error handling services API:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
