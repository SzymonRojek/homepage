import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/",
  plugins: [react(), svgr()],
  server: { port: 3000 },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    // The first test in a file renders styled-components cold; under coverage on
    // a slow machine that alone can pass the 5 s default.
    testTimeout: 15000,
    // One jsdom per worker instead of one per file: creating it 40 times was
    // 60% of a local run's tracked time. Tests must leave no global state
    // behind for the next file in the worker; if one starts failing here, that
    // coupling is the bug.
    isolate: false,
    exclude: [...configDefaults.exclude, "e2e/**", ".stryker-tmp/**"],
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
      ],
      reporter: ["text-summary", "html"],
      // Raise these as tests are added; CI fails if coverage drops below them.
      // 90 since 2026-10-17 (it was 80), with coverage at about 98% and branches
      // at 92%: the site shows this gate, and 80% read as the coverage itself.
      thresholds: { statements: 90, branches: 90, functions: 90, lines: 90 },
    },
  },
});
