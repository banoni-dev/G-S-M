import {
  deleteSubservice,
  getSubserviceById,
  updateSubservice,
} from "@/services/serviceService";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { subServiceId } = req.query;

  if (typeof subServiceId !== "string") {
    return res.status(400).json({ message: "Invalid subservice ID" });
  }

  try {
    switch (req.method) {
      case "GET": // Fetch a subservice by ID
        const subservice = await getSubserviceById(subServiceId);
        if (!subservice) {
          res.status(404).json({ message: "Subservice not found" });
        } else {
          res.status(200).json(subservice);
        }
        break;

      case "PUT": // Update a subservice by ID
        const updatedSubservice = await updateSubservice(
          subServiceId,
          req.body,
        );
        if (!updatedSubservice) {
          res.status(404).json({ message: "Subservice not found" });
        } else {
          res.status(200).json(updatedSubservice);
        }
        break;

      case "DELETE": // Delete a subservice by ID
        const deletedSubservice = await deleteSubservice(subServiceId);
        if (!deletedSubservice) {
          res.status(404).json({ message: "Subservice not found" });
        } else {
          res.status(200).json(deletedSubservice);
        }
        break;

      default:
        res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error handling subservice by ID API:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
