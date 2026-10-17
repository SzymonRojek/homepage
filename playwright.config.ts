import { defineConfig, devices } from "@playwright/test";

const isCI = !!process.env.CI;
// Playwright's own Chromium does not install on older macOS, so local runs use Google Chrome.
const channel = isCI ? undefined : "chrome";
// SAFARI=1 runs the suite in WebKit, Safari's engine, instead. WebKit needs macOS 14 or later,
// so CI runs it in a job of its own.
const safari = !!process.env.SAFARI;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 1 : 0,
  reporter: isCI ? [["github"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: "http://localhost:4173/",
    trace: "on-first-retry",
  },
  // Tests tagged @desktop or @mobile run only in the matching project; tablets run the untagged ones.
  projects: safari
    ? [
        {
          name: "safari-desktop",
          use: { ...devices["Desktop Safari"] },
          grepInvert: /@mobile/,
        },
        {
          // 834px: the menu and the two-column hero.
          name: "safari-ipad",
          use: { ...devices["iPad Pro 11"] },
          grepInvert: /@mobile|@desktop/,
        },
        {
          // 1194px: the links in the bar, below the desktop gutters.
          name: "safari-ipad-landscape",
          use: { ...devices["iPad Pro 11 landscape"] },
          grepInvert: /@mobile|@desktop/,
        },
        {
          name: "safari-iphone",
          use: { ...devices["iPhone 17"] },
          grepInvert: /@desktop/,
        },
        {
          // 375px, a narrow phone.
          name: "safari-iphone-se",
          use: { ...devices["iPhone SE (3rd gen)"] },
          grepInvert: /@desktop/,
        },
      ]
    : [
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
    url: "http://localhost:4173/",
    reuseExistingServer: !isCI,
  },
});
