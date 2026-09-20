import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // jsdom fornece window/localStorage para testar o service de persistência.
    environment: "jsdom",
    include: ["src/**/*.test.js"],
  },
});
