import { test, expect } from "./fixtures";

test.describe("Recommendations", () => {
  test("quotes eight colleagues in the last section, before the footer", async ({
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
    await expect(quotes).toHaveCount(8);
    // The newest first, and Meena's (the second) beside it at the top.
    await expect(quotes.first()).toContainText("David Puttock");
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
    // His came by email, so his card carries the at-sign, not LinkedIn.
    await expect(david.locator("svg")).toHaveAttribute("data-source", "email");
    await expect(
      quotes.filter({ hasText: "Meena Yuvaraj" }).locator("svg"),
    ).toHaveAttribute("data-source", "linkedin");
    // Jim's closing line, marked in his card.
    await expect(
      quotes.filter({ hasText: "Jim Grinsfelder" }).locator("mark"),
    ).toHaveText("you will be fortunate if you get to work with him");
    expect((await karthikeyan.boundingBox())!.y).toBeLessThan(
      (await quotes.filter({ hasText: "Jim Grinsfelder" }).boundingBox())!.y,
    );
  });
});
