import { test, expect } from "./fixtures";

test.describe("Header and footer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("shows name, title and page title", async ({ page }) => {
    await expect(page).toHaveTitle(/Szymon Rojek/);
    await expect(
      page.getByRole("heading", { level: 1, name: "Szymon Rojek" }),
    ).toBeVisible();
    // Scoped to the hero: the top bar also shows the title, hidden on phones.
    await expect(
      page.getByRole("banner").getByText("Software Test Engineer"),
    ).toBeVisible();
    await expect(
      page.getByText("I find what breaks before your users do."),
    ).toBeVisible();
    await expect(page.getByText("· self-taught developer")).toBeVisible();
  });

  test("tells recruiters at a glance what I'm looking for", async ({
    page,
  }) => {
    const header = page.getByRole("banner");

    await expect(
      header.getByText("Open to Test Automation & QA Engineer roles"),
    ).toBeVisible();
    await expect(
      header.getByText(
        "Based in Hove, UK · Full right to work in the UK · Open to relocation",
      ),
    ).toBeVisible();
    await expect(
      header.getByText(/^Four years testing financial data/),
    ).toBeVisible();
    await expect(header.getByRole("list", { name: "Key skills" })).toHaveCount(
      0,
    );
  });

  test("has contact links", async ({ page }) => {
    await expect(page.getByRole("link", { name: "Email me" })).toHaveAttribute(
      "href",
      "mailto:sz.rojek@gmail.com",
    );

    // The hero has one button; LinkedIn lives in the footer.
    await expect(
      page.getByRole("banner").getByRole("link", { name: "LinkedIn" }),
    ).toHaveCount(0);
    await expect(
      page
        .getByRole("contentinfo")
        .getByRole("link", { name: "Message me on LinkedIn" }),
    ).toHaveAttribute("href", /linkedin\.com\/in\//);
  });

  test("shows the main sections in recruiter order", async ({ page }) => {
    await expect(
      page.getByRole("main").getByRole("heading", { level: 2 }),
    ).toHaveText([
      "Two mindsets, one goal",
      "How I test at work",
      "Experience",
      "Projects",
      "Skills",
      "Education & certifications",
    ]);
  });

  test("footer offers email and LinkedIn without showing the address", async ({
    page,
  }) => {
    const footer = page.getByRole("contentinfo");

    await expect(
      footer.getByRole("link", { name: "Send me an email" }),
    ).toHaveAttribute("href", "mailto:sz.rojek@gmail.com");
    await expect(
      footer.getByRole("link", { name: "Message me on LinkedIn" }),
    ).toHaveAttribute("href", /linkedin\.com\/in\//);
    await expect(page.getByText("sz.rojek@gmail.com")).toHaveCount(0);
  });
});
