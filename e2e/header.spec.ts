import { test, expect } from "./fixtures";

test.describe("Header and footer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("shows name, title and page title", async ({ page }) => {
    await expect(page).toHaveTitle(/Szymon Rojek/);
    // The h1 is for search engines and screen readers; the top bar shows it.
    await expect(
      page.getByRole("heading", { level: 1, name: "Szymon Rojek" }),
    ).toBeAttached();
    const brand = page.getByRole("link", { name: /^Szymon Rojek/ });
    await expect(brand).toBeVisible();
    // Only the name and the job title: the coding side is told further down.
    await expect(brand).toHaveText("Szymon RojekSoftware Test Engineer");
    await expect(
      page.getByText("I find what breaks before your users do."),
    ).toBeVisible();
  });

  test("tells recruiters at a glance what I'm looking for", async ({
    page,
  }) => {
    const header = page.getByRole("banner");

    await expect(
      header.getByText("Open to Test Automation & QA Engineer roles"),
    ).toBeVisible();
    const where = header.getByLabel("Location and right to work");
    await expect(where.getByRole("term")).toHaveText([
      "Based in",
      "Right to work",
      "Relocation",
    ]);
    await expect(where.getByRole("definition")).toHaveText([
      "Hove, UK",
      "UK, full",
      "Open",
    ]);
    await expect(
      header.getByText(/^Four years testing financial data/),
    ).toBeVisible();
    await expect(header.getByRole("list", { name: "Key skills" })).toHaveCount(
      0,
    );
  });

  test("has contact links in the top bar and the footer", async ({
    page,
    isMobile,
  }) => {
    // The hero has no links: contact lives in the top bar and the footer.
    await expect(page.getByRole("banner").getByRole("link")).toHaveCount(0);
    // On a phone Contact sits in the menu.
    if (isMobile) {
      await page.getByRole("button", { name: "Menu" }).click();
    }
    await expect(
      page.getByRole("link", { name: "Contact", exact: true }),
    ).toHaveAttribute("href", "#contact");
    await expect(
      page
        .getByRole("contentinfo")
        .getByRole("link", { name: "Send me an email" }),
    ).toHaveAttribute("href", "mailto:sz.rojek@gmail.com");
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
