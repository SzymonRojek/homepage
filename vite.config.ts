import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/homepage/",
  plugins: [react(), svgr()],
  server: { port: 3000 },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    exclude: [...configDefaults.exclude, "e2e/**"],
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx}"],
      // Styles and page composition are checked by the Playwright and axe suite.
      exclude: [
        "src/**/*.test.{ts,tsx}",
        "src/**/styled.ts",
        "src/index.tsx",
        "src/setupTests.ts",
        "src/**/*.d.ts",
        "src/features/Homepage/repositoryFixture.ts",
      ],
      reporter: ["text-summary", "html"],
      // Raise these as tests are added; CI fails if coverage drops below them.
      thresholds: { statements: 70, branches: 80, functions: 65, lines: 70 },
    },
  },
});
