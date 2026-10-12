import { test, expect } from "./fixtures";

test.describe("Recommendations", () => {
  test("quotes three colleagues right after Spot the bug", async ({ page }) => {
    await page.goto("./");

    await expect(
      page.getByRole("main").getByRole("heading", { level: 2 }).nth(1),
    ).toHaveText("What colleagues say");
    const quotes = page
      .getByRole("list", { name: "Recommendations" })
      .getByRole("listitem");
    await expect(quotes).toHaveCount(3);
    await expect(quotes.first()).toContainText("Oskar Wielanowski");
    await expect(quotes.first()).toContainText("root cause of issues");
    await expect(
      page.getByRole("link", { name: "Read them on LinkedIn" }),
    ).toHaveAttribute("href", /\/details\/recommendations\/$/);
  });
});
