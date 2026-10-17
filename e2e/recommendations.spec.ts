import { test, expect } from "./fixtures";

test.describe("Recommendations", () => {
  test("quotes five colleagues in the last section, before the footer", async ({
    page,
  }) => {
    await page.goto("./");

    await expect(
      page.getByRole("main").getByRole("heading", { level: 2 }).last(),
    ).toHaveText("References");
    await expect(
      page.getByText("In the words of the people I’ve worked with", {
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
    // Jim's closing line, marked in his card.
    await expect(
      quotes.filter({ hasText: "Jim Grinsfelder" }).locator("mark"),
    ).toHaveText("you will be fortunate if you get to work with him");
    expect((await karthikeyan.boundingBox())!.y).toBeLessThan(
      (await quotes.filter({ hasText: "Jim Grinsfelder" }).boundingBox())!.y,
    );
  });
});
