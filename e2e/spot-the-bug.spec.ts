import { test, expect } from "./fixtures";

test.describe("Spot the bug", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("is the first section: three levels of a made-up record", async ({
    page,
  }) => {
    await expect(
      page.getByRole("main").getByRole("heading", { level: 2 }).first(),
    ).toHaveText("Spot the bug");
    const section = page.getByRole("region", { name: "Spot the bug" });
    await expect(
      section.getByRole("group", { name: "Difficulty" }).getByRole("button"),
    ).toHaveText(["Level 1 · Easy", "Level 2 · Medium", "Level 3 · Hard"]);
    await expect(
      section.getByRole("table", {
        name: "A made-up client record, before and after the migration",
      }),
    ).toBeVisible();
    await expect(section.getByRole("status")).toHaveText("");
  });

  test("a visitor can play all three levels", async ({ page }) => {
    const section = page.getByRole("region", { name: "Spot the bug" });
    const status = section.getByRole("status");

    await test.step("level 1: a lost digit", async () => {
      await section
        .getByRole("button", { name: "Name in the new system: Łukasz Nowak" })
        .click();
      await expect(status).toContainText("the name came across exactly");
      await section
        .getByRole("button", { name: "Shares held in the new system: 125" })
        .click();
      await expect(status).toContainText("Good catch.");
      await section.getByRole("button", { name: "Next level →" }).click();
    });

    await test.step("level 2: a date that changed its meaning", async () => {
      await expect(
        section.getByRole("button", { name: "Level 2 · Medium" }),
      ).toHaveAttribute("aria-pressed", "true");
      await section
        .getByRole("button", {
          name: "Date of birth in the new system: 1981-03-04",
        })
        .click();
      await expect(status).toContainText("read it as 4 March");
      await section.getByRole("button", { name: "Next level →" }).click();
    });

    await test.step("level 3: the right amount in the wrong currency", async () => {
      await section
        .getByRole("button", {
          name: "Date of birth in the new system: 1981-04-03",
        })
        .click();
      await expect(status).toContainText("That's correct.");
      await section
        .getByRole("button", {
          name: "Dividend paid in the new system: 84.20 EUR",
        })
        .click();
      await expect(status).toContainText("pounds became euros");
      await expect(
        section.getByRole("button", { name: "Next level →" }),
      ).toHaveCount(0);
    });
  });

  test("works from the keyboard, and gives the answer on request", async ({
    page,
  }) => {
    const section = page.getByRole("region", { name: "Spot the bug" });

    await section.getByRole("button", { name: "Level 3 · Hard" }).focus();
    await page.keyboard.press("Enter");
    await section.getByRole("button", { name: "Show me" }).focus();
    await page.keyboard.press("Enter");

    await expect(section.getByRole("status")).toContainText("Here it is.");
    await expect(section.getByRole("status")).toContainText(
      "pounds became euros",
    );
  });
});
