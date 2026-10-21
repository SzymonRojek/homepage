import { test, expect } from "./fixtures";

test.describe("How I use AI", () => {
  test("is the first section, right under the hero", async ({ page }) => {
    await page.goto("./");

    const headings = page.getByRole("main").getByRole("heading", { level: 2 });
    await expect(headings.first()).toHaveText("How I use AI");

    const section = page.getByRole("region", { name: "How I use AI" });
    await expect(section).toContainText("The questions are mine.");
    // The two columns, as a table, not the ticked stages of How I test.
    const table = section.getByRole("table", {
      name: "What the agent does, and what I do",
    });
    await expect(table.getByRole("columnheader")).toHaveText([
      "The agent",
      "Me",
    ]);
    await expect(table.getByRole("row")).toHaveCount(5);
    await expect(section.getByRole("list")).toHaveCount(0);
  });

  test("says what I did myself, and nothing more", async ({ page }) => {
    await page.goto("./");

    const section = page.getByRole("region", { name: "How I use AI" });
    // Built: the spec-change check. Tested: the agent pilot others built.
    await expect(section).toContainText(
      "I built it: the agent instructions and the pipeline",
    );
    await expect(section).toContainText(
      "our engineers built and released to us",
    );
    // The false claim this section replaced must not come back anywhere.
    await expect(page.getByRole("main")).not.toContainText(
      "agentic testing procedures",
    );
    // Clients, internal tools and systems stay confidential.
    await expect(page.getByRole("main")).not.toContainText(
      /TestPilot|Broadridge|SharePoint/,
    );
  });

  test("steps down from the hero instead of jumping, in both themes", async ({
    page,
  }) => {
    await page.goto("./");

    const bandOf = (name: string) =>
      page
        .getByRole("region", { name })
        .evaluate((section) => getComputedStyle(section).backgroundColor);

    // Light: the near-black hero lifts into the raised green, which then
    // steps up into the white How I test band, so the page keeps one big
    // step in and one out.
    expect(await bandOf("How I use AI")).toBe("rgb(28, 77, 70)");
    expect(await bandOf("How I test")).toBe("rgb(255, 255, 255)");

    await page.getByRole("button", { name: "Dark mode" }).click();
    await expect(page.locator("body")).toHaveCSS(
      "background-color",
      "rgb(11, 21, 19)",
    );
    // Dark: a shade between the hero above and How I test below, which is
    // the deep green in this theme.
    expect(await bandOf("How I use AI")).toBe("rgb(14, 42, 38)");
    expect(await bandOf("How I test")).toBe("rgb(18, 60, 55)");
  });

  test("@mobile stacks each pair, with its column name above it", async ({
    page,
  }) => {
    await page.goto("./");

    const firstRow = page
      .getByRole("region", { name: "How I use AI" })
      .getByRole("row")
      .nth(1);
    const [agent, me] = await firstRow.getByRole("cell").all();
    // Stacked, not side by side: mine sits below the agent's.
    const agentBox = (await agent.boundingBox())!;
    const meBox = (await me.boundingBox())!;
    expect(meBox.y).toBeGreaterThan(agentBox.y + agentBox.height - 1);
    // The headings are off screen when stacked, so each cell carries its own.
    await expect(agent).toHaveAttribute("data-column", "The agent");
    await expect(me).toHaveAttribute("data-column", "Me");
  });
});
