import { test, expect, mockRepositoriesError } from "./fixtures";

test("shows featured projects grouped by category", async ({ page }) => {
  await page.goto("./");

  const testing = page.getByRole("region", { name: "Testing" });
  const frontEnd = page.getByRole("region", { name: "Front-end" });

  await expect(testing.getByRole("heading", { level: 4 })).toHaveText([
    "df-automation-tests",
    "counter-testing",
  ]);
  await expect(frontEnd.getByRole("heading", { level: 4 })).toHaveText([
    "homepage",
    "react-sign-in-up",
    "my-music-website",
  ]);
  await expect(page.getByText("not-featured")).toHaveCount(0);
  await expect(page.getByText("forked-repo")).toHaveCount(0);
});

test("shows curated details on a tile", async ({ page }) => {
  await page.goto("./");

  const tile = page
    .getByRole("listitem")
    .filter({ hasText: "counter-testing" });
  await expect(tile).toContainText("Cypress end-to-end tests");
  await expect(tile.getByRole("link", { name: "Live demo" })).toHaveAttribute(
    "href",
    "https://szymonrojek.github.io/counter-testing/",
  );
  await expect(
    tile.getByRole("link", { name: "GitHub Repository" }),
  ).toHaveAttribute("href", "https://github.com/SzymonRojek/counter-testing");
});

test("shows the error box when GitHub fails", async ({ page }) => {
  await page.unrouteAll();
  await mockRepositoriesError(page);
  await page.goto("./");

  await expect(page.getByText(/something went/i)).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Go to GitHub" }),
  ).toHaveAttribute("href", "https://github.com/SzymonRojek");
});
