import { test, expect } from "./fixtures";

test.describe("Skills", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("shows skill groups with AI-assisted testing last", async ({ page }) => {
    const skills = page.getByRole("region", { name: "Skills" });
    await expect(skills.getByRole("heading", { level: 3 })).toHaveText([
      "Data migration testing",
      "Software testing",
      "API testing",
      "Automation & code",
      "AI-assisted testing",
    ]);
    await expect(skills.getByRole("article").last()).toContainText(
      "Human review & CI test gates for AI-generated code",
    );
    await expect(skills.getByText(/^Tools:.*· Claude$/)).toBeVisible();
  });

  test(
    "the odd skill card spans the full row",
    { tag: "@desktop" },
    async ({ page }) => {
      const cards = page
        .getByRole("region", { name: "Skills" })
        .getByRole("article");
      const first = await cards.first().boundingBox();
      const last = await cards.last().boundingBox();

      expect(first).not.toBeNull();
      expect(last).not.toBeNull();
      expect(last?.width).toBeGreaterThan((first?.width ?? 0) * 1.9);
    },
  );
});
