import { test, expect } from "./fixtures";

test.describe("Recommendations", () => {
  test("quotes nine colleagues in the last section, before the footer", async ({
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
      .getByRole("list", { name: "Recommendations from colleagues" })
      .getByRole("listitem");
    await expect(quotes).toHaveCount(9);
    // The newest first, and David's (the second) beside it at the top.
    await expect(quotes.first()).toContainText("Sushant Gupta");
    // John's and David's are the two that back up the AI section above.
    await expect(
      quotes.filter({ hasText: "John Burrows" }).locator("mark"),
    ).toHaveText("a great understanding of the latest AI technologies");
    const karthikeyan = quotes.filter({ hasText: "Karthikeyan Palanivel" });
    await expect(karthikeyan.locator("mark")).toHaveText(
      "highly skilled professional",
    );
    const david = quotes.filter({ hasText: "David Puttock" });
    await expect(david.locator("mark")).toHaveText(
      "rapid progression in his technical abilities",
    );
    const sushant = quotes.filter({ hasText: "Sushant Gupta" });
    await expect(sushant.locator("mark")).toHaveText(
      "edge-case scenarios that others overlooked",
    );
    // Theirs came by email, so their cards carry the at-sign, not LinkedIn.
    await expect(david.locator("svg")).toHaveAttribute("data-source", "email");
    await expect(sushant.locator("svg")).toHaveAttribute(
      "data-source",
      "email",
    );
    await expect(
      quotes.filter({ hasText: "Meena Yuvaraj" }).locator("svg"),
    ).toHaveAttribute("data-source", "linkedin");
    // The at-sign is cut out of each tile by a mask of that card's own, so
    // the two email cards never share an id and both tiles are drawn.
    const maskIds = await quotes
      .locator("mask")
      .evaluateAll((masks) => masks.map((mask) => mask.id));
    expect(new Set(maskIds).size).toBe(2);
    // Jim's closing line, marked in his card.
    await expect(
      quotes.filter({ hasText: "Jim Grinsfelder" }).locator("mark"),
    ).toHaveText("you will be fortunate if you get to work with him");
    expect((await karthikeyan.boundingBox())!.y).toBeLessThan(
      (await quotes.filter({ hasText: "Jim Grinsfelder" }).boundingBox())!.y,
    );
  });
});
