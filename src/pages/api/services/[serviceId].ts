import {
  deleteService,
  getServiceById,
  updateService,
} from "@/services/serviceService";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { serviceId } = req.query;

  if (typeof serviceId !== "string") {
    return res.status(400).json({ message: "Invalid service ID" });
  }

  try {
    switch (req.method) {
      case "GET": // Fetch a service by ID
        const service = await getServiceById(serviceId);
        if (!service) {
          res.status(404).json({ message: "Service not found" });
        } else {
          res.status(200).json(service);
        }
        break;

      case "PUT": // Update a service by ID
        const updatedService = await updateService(serviceId, req.body);
        if (!updatedService) {
          res.status(404).json({ message: "Service not found" });
        } else {
          res.status(200).json(updatedService);
        }
        break;

      case "DELETE": // Delete a service by ID
        const deletedService = await deleteService(serviceId);
        if (!deletedService) {
          res.status(404).json({ message: "Service not found" });
        } else {
          res.status(200).json(deletedService);
        }
        break;

      default:
        res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error handling service by ID API:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
