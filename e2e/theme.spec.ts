import { test, expect } from "./fixtures";

const themeSwitch = (page: import("@playwright/test").Page) =>
  page.getByRole("button", { name: "Dark mode" });

test.describe("with a light OS theme", () => {
  test.use({ colorScheme: "light" });

  test("starts light, toggles and remembers the choice", async ({ page }) => {
    await page.goto("./");
    await expect(themeSwitch(page)).toHaveAttribute("aria-pressed", "false");
    const lightBackground = await page
      .locator("body")
      .evaluate((body) => getComputedStyle(body).backgroundColor);

    await themeSwitch(page).click();

    await expect(themeSwitch(page)).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("body")).not.toHaveCSS(
      "background-color",
      lightBackground,
    );

    await page.reload();

    await expect(themeSwitch(page)).toHaveAttribute("aria-pressed", "true");
  });
});

test.describe("with a dark OS theme", () => {
  test.use({ colorScheme: "dark" });

  test("starts dark when nothing is saved", async ({ page }) => {
    await page.goto("./");

    await expect(themeSwitch(page)).toHaveAttribute("aria-pressed", "true");
  });

  test("a saved light choice wins over the OS theme", async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem("dark", "false"));
    await page.goto("./");

    await expect(themeSwitch(page)).toHaveAttribute("aria-pressed", "false");
  });
});
