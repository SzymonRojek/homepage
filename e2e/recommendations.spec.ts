import { test, expect } from "./fixtures";

test.describe("Recommendations", () => {
  test("quotes five colleagues first, right under the hero", async ({
    page,
  }) => {
    await page.goto("./");

    await expect(
      page.getByRole("main").getByRole("heading", { level: 2 }).first(),
    ).toHaveText("Recommendations");
    await expect(
      page.getByText("“…you will be fortunate if you get to work with him.”", {
        exact: true,
      }),
    ).toBeVisible();
    const quotes = page
      .getByRole("list", { name: "Recommendations from LinkedIn" })
      .getByRole("listitem");
    await expect(quotes).toHaveCount(5);
    // The newest first, and Karthikeyan's (the second) beside it at the top.
    await expect(quotes.first()).toContainText("Venkat Nagadasari");
    const karthikeyan = quotes.filter({ hasText: "Karthikeyan Palanivel" });
    await expect(karthikeyan.locator("mark")).toHaveText(
      "highly skilled professional",
    );
    expect((await karthikeyan.boundingBox())!.y).toBeLessThan(
      (await quotes.filter({ hasText: "Jim Grinsfelder" }).boundingBox())!.y,
    );
  });
});
