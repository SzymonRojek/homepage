import { test, expect } from "./fixtures";

test.beforeEach(async ({ page }) => {
  await page.goto("./");
});

test("shows name, title and page title", async ({ page }) => {
  await expect(page).toHaveTitle(/Szymon Rojek/);
  await expect(
    page.getByRole("heading", { level: 1, name: "Szymon Rojek" }),
  ).toBeVisible();
  await expect(page.getByText("Software Test Engineer").first()).toBeVisible();
});

test("has contact links", async ({ page }) => {
  await expect(
    page.getByRole("link", { name: "Get in touch" }),
  ).toHaveAttribute("href", "mailto:sz.rojek@gmail.com");

  const linkedin = page
    .getByRole("banner")
    .getByRole("link", { name: "LinkedIn", exact: true });
  await expect(linkedin).toHaveAttribute("href", /linkedin\.com\/in\//);
  await expect(linkedin).toHaveAttribute("target", "_blank");
});

test("shows the main sections", async ({ page }) => {
  for (const name of [
    "Core skills",
    "Experience",
    "Currently learning",
    "Projects",
    "How this site is tested",
  ]) {
    await expect(page.getByRole("heading", { level: 2, name })).toBeVisible();
  }
});
