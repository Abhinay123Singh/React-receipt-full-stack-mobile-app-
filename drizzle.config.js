// drizzle.config.js
// drizzle.config.js
import "dotenv/config";
import { ENV } from "./src/config/env.js";

export default {
  schema: "./src/db/schema.js",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: ENV.DATABASE_URL, // ✅ use `url`, not `connectionString`
  },
};
