import { test, expect } from "./fixtures";

test.describe("Recommendations", () => {
  test("quotes four colleagues first, right under the hero", async ({
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
    await expect(quotes).toHaveCount(4);
    // The newest first, and Oskar's (the second) beside it at the top.
    await expect(quotes.first()).toContainText("Karthikeyan Palanivel");
    const oskar = quotes.filter({ hasText: "Oskar Wielanowski" });
    await expect(oskar.locator("mark")).toHaveText(
      "saving the team time and preventing future bugs",
    );
    expect((await oskar.boundingBox())!.y).toBeLessThan(
      (await quotes.filter({ hasText: "Jim Grinsfelder" }).boundingBox())!.y,
    );
  });
});
