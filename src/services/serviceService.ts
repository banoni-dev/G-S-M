import db from "@/lib/db";
import { services, subservices } from "@/schema";
import { eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";

// Create a new service
export async function createService(
  serviceData: Omit<typeof services.$inferInsert, "id">,
) {
  try {
    const newService = {
      ...serviceData,
      id: uuidv4(),
    };
    const result = await db.insert(services).values(newService).returning();
    console.log("Service created successfully:", result);
    return result;
  } catch (error) {
    console.error("Error creating service:", error);
    throw error;
  }
}

// Get a service by ID
export async function getServiceById(serviceId: string) {
  try {
    const serviceArray = await db
      .select()
      .from(services)
      .where(eq(services.id, serviceId))
      .limit(1);
    const service = serviceArray[0] || null;
    console.log("Fetched service by ID:", service);
    return service;
  } catch (error) {
    console.error("Error fetching service by ID:", error);
    throw error;
  }
}

// Get all services
export async function getAllServices() {
  try {
    const allServices = await db.select().from(services);
    console.log("Fetched all services:", allServices);
    return allServices;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
}

// Update a service by ID
export async function updateService(
  serviceId: string,
  updateData: Partial<typeof services.$inferInsert>,
) {
  try {
    const result = await db
      .update(services)
      .set(updateData)
      .where(eq(services.id, serviceId))
      .returning();
    console.log("Service updated successfully:", result);
    return result;
  } catch (error) {
    console.error("Error updating service:", error);
    throw error;
  }
}

// Delete a service by ID
export async function deleteService(serviceId: string) {
  try {
    const result = await db
      .delete(services)
      .where(eq(services.id, serviceId))
      .returning();
    console.log("Service deleted successfully:", result);
    return result;
  } catch (error) {
    console.error("Error deleting service:", error);
    throw error;
  }
}

// Subservice functions

// Create a new subservice
export async function createSubservice(
  subserviceData: Omit<typeof subservices.$inferInsert, "id">,
) {
  try {
    const newSubservice = {
      ...subserviceData,
      id: uuidv4(),
    };
    const result = await db
      .insert(subservices)
      .values(newSubservice)
      .returning();
    console.log("Subservice created successfully:", result);
    return result;
  } catch (error) {
    console.error("Error creating subservice:", error);
    throw error;
  }
}

// Get a subservice by ID
export async function getSubserviceById(subserviceId: string) {
  try {
    const subserviceArray = await db
      .select()
      .from(subservices)
      .where(eq(subservices.id, subserviceId))
      .limit(1);
    const subservice = subserviceArray[0] || null;
    console.log("Fetched subservice by ID:", subservice);
    return subservice;
  } catch (error) {
    console.error("Error fetching subservice by ID:", error);
    throw error;
  }
}

// Get all subservices
export async function getAllSubservices() {
  try {
    const allSubservices = await db.select().from(subservices);
    console.log("Fetched all subservices:", allSubservices);
    return allSubservices;
  } catch (error) {
    console.error("Error fetching subservices:", error);
    throw error;
  }
}

// Update a subservice by ID
export async function updateSubservice(
  subserviceId: string,
  updateData: Partial<typeof subservices.$inferInsert>,
) {
  try {
    const result = await db
      .update(subservices)
      .set(updateData)
      .where(eq(subservices.id, subserviceId))
      .returning();
    console.log("Subservice updated successfully:", result);
    return result;
  } catch (error) {
    console.error("Error updating subservice:", error);
    throw error;
  }
}

// Delete a subservice by ID
export async function deleteSubservice(subserviceId: string) {
  try {
    const result = await db
      .delete(subservices)
      .where(eq(subservices.id, subserviceId))
      .returning();
    console.log("Subservice deleted successfully:", result);
    return result;
  } catch (error) {
    console.error("Error deleting subservice:", error);
    throw error;
  }
}
