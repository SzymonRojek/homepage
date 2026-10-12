import { test, expect } from "./fixtures";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("the top bar links to each section", async ({ page }) => {
    const nav = page.getByRole("navigation", { name: "Sections" });

    for (const [link, heading] of [
      ["Projects", "Projects"],
      ["Experience", "Experience"],
      ["Skills", "Skills"],
      ["Mindset", "Two mindsets, one goal"],
      ["How I test", "How I test at work"],
    ]) {
      await test.step(link, async () => {
        await nav.getByRole("link", { name: link }).click();
        await expect(
          page.getByRole("heading", { level: 2, name: heading }),
        ).toBeInViewport();
      });
    }
  });

  test("the contact button scrolls to the contact card", async ({ page }) => {
    await page.getByRole("link", { name: "Contact", exact: true }).click();

    await expect(page).toHaveURL(/#contact$/);
    await expect(
      page.getByRole("link", { name: "Send me an email" }),
    ).toBeInViewport();
  });

  test("the top bar stays visible while scrolling", async ({ page }) => {
    await page
      .getByRole("heading", { name: "Skills" })
      .scrollIntoViewIfNeeded();

    await expect(
      page.getByRole("navigation", { name: "Sections" }),
    ).toBeInViewport();
    await expect(
      page.getByRole("button", { name: "Dark mode" }),
    ).toBeInViewport();
  });

  test("keyboard users can skip straight to the content", async ({ page }) => {
    const skip = page.getByRole("link", { name: "Skip to content" });
    // The page renders with JavaScript; a Tab pressed earlier has nothing to focus.
    await expect(skip).toBeAttached();

    await page.keyboard.press("Tab");
    await expect(skip).toBeFocused();
    await expect(skip).toBeInViewport();

    await page.keyboard.press("Enter");

    await expect(page.getByRole("main")).toBeFocused();
  });
});
