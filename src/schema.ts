import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 50 }).notNull().unique(),
  email: varchar("email", { length: 100 }).notNull().unique(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  phoneNumber: varchar("phone_number", { length: 20 }),
  address: text("address"),
  city: varchar("city", { length: 100 }),
  state: varchar("state", { length: 100 }),
  country: varchar("country", { length: 100 }),
  zipCode: varchar("zip_code", { length: 10 }),
  balance: integer("balance").default(0),
});

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull().unique(),
  type: varchar("type", { length: 50 }).notNull(), // "IMEI" or "Server"
});

export const subservices = pgTable("subservices", {
  id: serial("id").primaryKey(),
  serviceId: integer("service_id")
    .references(() => services.id)
    .notNull(),
  name: varchar("name", { length: 100 }).notNull(),
  description: text("description"),
  price: integer("price").notNull(), // price in cents or lowest currency denomination
});

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  subserviceId: integer("subservice_id")
    .references(() => subservices.id)
    .notNull(),
  amount: integer("amount").notNull(), // Amount deducted from balance in cents
  createdAt: timestamp("created_at").defaultNow().notNull(),
  status: varchar("status", { length: 50 }).notNull(), // e.g., "completed", "pending"
});
