import { Config, defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schema/*",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DB_URL,
  },
} as Config);
