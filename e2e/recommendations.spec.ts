import { test, expect } from "./fixtures";

test.describe("Recommendations", () => {
  test("quotes three colleagues first, right under the hero", async ({
    page,
  }) => {
    await page.goto("./");

    await expect(
      page.getByRole("main").getByRole("heading", { level: 2 }).first(),
    ).toHaveText("What colleagues say");
    await expect(
      page.getByText("“…you will be fortunate if you get to work with him.”", {
        exact: true,
      }),
    ).toBeVisible();
    const quotes = page
      .getByRole("list", { name: "Recommendations" })
      .getByRole("listitem");
    await expect(quotes).toHaveCount(3);
    await expect(quotes.first()).toContainText("Oskar Wielanowski");
    await expect(quotes.first()).toContainText("root cause of issues");
  });
});
