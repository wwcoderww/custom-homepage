import { defineConfig } from "vitest/config";
import * as dotenv from "dotenv";

// Manually parse your .env file
dotenv.config();

export default defineConfig({
  test: {
    globals: true,
    // Assign the loaded environment variables to the test context
    env: process.env as Record<string, string>,
  },
});
