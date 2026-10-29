import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    url:
      process.env.NODE_DATABASE_URL! ||
      "postgresql://myuser:mypassword@localhost:5432/mydb",
  },
});
