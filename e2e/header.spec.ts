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
    await expect(
      page.getByText("Software Test Engineer").first(),
    ).toBeVisible();
  });

  test("tells recruiters at a glance what I'm looking for", async ({
    page,
  }) => {
    const header = page.getByRole("banner");

    await expect(
      header.getByText("Open to QA Engineer & Data/ETL Test Analyst roles"),
    ).toBeVisible();
    await expect(
      header.getByText(
        "Based in Hove, UK · Full right to work in the UK · Open to relocation",
      ),
    ).toBeVisible();
    await expect(
      header.getByRole("list", { name: "Key skills" }).getByRole("listitem"),
    ).toHaveText([
      "4 years in software testing",
      "Data migration & ETL testing",
      "SQL reconciliation",
      "REST API testing",
    ]);
  });

  test("has contact links", async ({ page }) => {
    await expect(page.getByRole("link", { name: "Email me" })).toHaveAttribute(
      "href",
      "mailto:sz.rojek@gmail.com",
    );

    const linkedin = page
      .getByRole("banner")
      .getByRole("link", { name: "LinkedIn", exact: true });
    await expect(linkedin).toHaveAttribute("href", /linkedin\.com\/in\//);
    await expect(linkedin).toHaveAttribute("target", "_blank");
  });

  test("shows the main sections in recruiter order", async ({ page }) => {
    await expect(
      page.getByRole("main").getByRole("heading", { level: 2 }),
    ).toHaveText([
      "Experience",
      "Test projects",
      "How this site is tested",
      "Skills",
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
