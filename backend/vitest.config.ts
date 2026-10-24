import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Injects describe, it, expect, etc. globally
  },
});
