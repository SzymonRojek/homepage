import { test, expect } from "./fixtures";

test.describe("Test projects", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("shows test projects first and other work separately", async ({
    page,
  }) => {
    await test.step("test project tiles in curated order", async () => {
      const tiles = page.getByRole("list", { name: "Test projects" });
      await expect(tiles.getByRole("heading", { level: 3 })).toHaveText([
        "This portfolio, tested end to end",
        "Ferry booking E2E suite",
        "Email campaign API tests",
      ]);
    });

    await test.step("front-end work under Other projects", async () => {
      const other = page.getByRole("region", { name: "Other projects" });
      await expect(other.getByRole("listitem")).toHaveCount(1);
      await expect(other).toContainText("Role-based sign-in app");
      await expect(other.getByRole("link", { name: "Code" })).toHaveAttribute(
        "href",
        "https://github.com/SzymonRojek/react-sign-in-up",
      );
    });
  });

  test("shows curated details on a tile", async ({ page }) => {
    const tile = page
      .getByRole("listitem")
      .filter({ hasText: "This portfolio, tested end to end" });
    await expect(tile).toContainText("homepage · TypeScript");
    await expect(tile).toContainText("Playwright end-to-end tests");
    await expect(tile.getByRole("link", { name: "Live demo" })).toHaveCount(0);
    await expect(
      tile.getByRole("link", { name: "GitHub Repository" }),
    ).toHaveAttribute("href", "https://github.com/SzymonRojek/homepage");
  });

  test("renders without loading or error states", async ({ page }) => {
    // The noGithubApi fixture also fails this test if the page calls GitHub.
    await expect(
      page.getByRole("list", { name: "Test projects" }).getByRole("listitem"),
    ).toHaveCount(3);
    await expect(page.getByText(/projects are loading/i)).toHaveCount(0);
    await expect(page.getByText(/something went wrong/i)).toHaveCount(0);
  });
});
