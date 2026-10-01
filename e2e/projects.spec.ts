import { test, expect, mockRepositoriesError } from "./fixtures";

test.describe("Test projects", () => {
  test("shows test projects first and front-end work as Also built", async ({
    page,
  }) => {
    await page.goto("./");

    await test.step("test project tiles in curated order", async () => {
      const tiles = page.getByRole("list", { name: "Test projects" });
      await expect(tiles.getByRole("heading", { level: 3 })).toHaveText([
        "This portfolio, tested end to end",
        "Ferry booking E2E suite",
        "Email campaign API tests",
      ]);
    });

    await test.step("front-end work in Also built", async () => {
      const alsoBuilt = page.getByRole("region", { name: "Also built" });
      await expect(alsoBuilt.getByRole("listitem")).toHaveCount(2);
      await expect(alsoBuilt).toContainText("Role-based sign-in app");
      await expect(alsoBuilt).toContainText("Guitar music website");
      await expect(
        alsoBuilt
          .getByRole("listitem")
          .filter({ hasText: "Guitar music website" })
          .getByRole("link", { name: "Live demo" }),
      ).toHaveAttribute(
        "href",
        "https://szymonrojek.github.io/my-music-website/",
      );
    });

    await test.step("unfeatured repos and forks are hidden", async () => {
      await expect(page.getByText("not-featured")).toHaveCount(0);
      await expect(page.getByText("forked-repo")).toHaveCount(0);
    });
  });

  test("shows curated details on a tile", async ({ page }) => {
    await page.goto("./");

    const tile = page
      .getByRole("listitem")
      .filter({ hasText: "This portfolio, tested end to end" });
    await expect(tile).toContainText("Playwright end-to-end tests");
    await expect(tile.getByRole("link", { name: "Live demo" })).toHaveCount(0);
    await expect(
      tile.getByRole("link", { name: "GitHub Repository" }),
    ).toHaveAttribute("href", "https://github.com/SzymonRojek/homepage");
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
});
