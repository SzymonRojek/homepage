import { defineConfig, devices } from "@playwright/test";

const isCI = !!process.env.CI;
// Playwright's own Chromium does not install on older macOS, so local runs use Google Chrome.
const channel = isCI ? undefined : "chrome";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 1 : 0,
  reporter: isCI ? [["github"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: "http://localhost:4173/homepage/",
    trace: "on-first-retry",
  },
  // Tests tagged @desktop or @mobile run only in the matching project.
  projects: [
    {
      name: "desktop",
      use: { ...devices["Desktop Chrome"], channel },
      grepInvert: /@mobile/,
    },
    {
      name: "mobile",
      use: { ...devices["Pixel 7"], channel },
      grepInvert: /@desktop/,
    },
  ],
  webServer: {
    command: "npm run build && npm run preview -- --port 4173 --strictPort",
    url: "http://localhost:4173/homepage/",
    reuseExistingServer: !isCI,
  },
});
