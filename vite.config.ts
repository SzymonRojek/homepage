import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/homepage/",
  plugins: [react(), svgr()],
  server: { port: 3000 },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
