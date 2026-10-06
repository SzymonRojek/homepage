import { test, expect } from "./fixtures";

test.describe("Test projects", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("shows test projects first and other work separately", async ({
    page,
  }) => {
    await test.step("testing projects as case studies, in order", async () => {
      await expect(
        page.getByRole("article").filter({ hasText: "Case study" }),
      ).toHaveText([/This portfolio, tested end to end/, /Email campaign app/]);
      await expect(
        page.getByRole("list", { name: "Test projects" }),
      ).toHaveCount(0);
    });

    await test.step("front-end work under Other projects", async () => {
      const other = page.getByRole("region", { name: "Other projects" });
      await expect(other.getByRole("listitem")).toHaveCount(1);
      await expect(other).toContainText("Role-based sign-in app");
      await expect(other.getByRole("link", { name: "Code" })).toHaveAttribute(
        "href",
        "https://github.com/SzymonRojek/react-sign-in-up",
      );
    });
  });

  test("the email campaign case study links to the code and the live demo", async ({
    page,
  }) => {
    const caseStudy = page.getByRole("article", {
      name: "Email campaign app, secured and tested",
    });

    await expect(caseStudy).toContainText(
      "email-campaign-react-airtable · TypeScript",
    );
    await expect(caseStudy.getByLabel("Impact")).toContainText(
      "end-to-end tests on the production build",
    );
    await expect(
      caseStudy.getByRole("link", { name: "GitHub Repository" }),
    ).toHaveAttribute(
      "href",
      "https://github.com/SzymonRojek/email-campaign-react-airtable",
    );
    await expect(
      caseStudy.getByRole("link", { name: "Live demo" }),
    ).toHaveAttribute(
      "href",
      "https://email-campaign-react-airtable.onrender.com/",
    );

    await caseStudy.getByText("Read the full case study").click();
    await expect(
      caseStudy.getByRole("rowheader", {
        name: "Move the login to the server with signed tokens",
      }),
    ).toBeVisible();
  });

  test("the homepage case study shows impact at a glance", async ({ page }) => {
    const caseStudy = page.getByRole("article", {
      name: "This portfolio, tested end to end",
    });

    await expect(caseStudy).toContainText("Case study");
    await expect(caseStudy.getByLabel("Impact")).toContainText(
      "runtime API calls",
    );
    await expect(caseStudy.getByLabel("Impact").locator("dd")).toHaveCount(4);
    await expect(
      caseStudy.getByRole("heading", { name: "Problem" }),
    ).toBeHidden();
  });

  test("the full case study opens with every part", async ({ page }) => {
    const caseStudy = page.getByRole("article", {
      name: "This portfolio, tested end to end",
    });

    await caseStudy.getByText("Read the full case study").click();

    await expect(caseStudy.getByRole("heading", { level: 4 })).toHaveText([
      "Problem",
      "Constraints",
      "Architecture",
      "Key decisions and trade-offs",
      "Testing, performance, accessibility and security",
      "Lessons learned",
    ]);
    await expect(
      caseStudy.getByRole("list", { name: /^Delivery/ }).getByRole("listitem"),
    ).toHaveCount(9);
    await expect(
      caseStudy.getByRole("list", { name: /^Runtime/ }).getByRole("listitem"),
    ).toHaveCount(5);
    await expect(caseStudy.getByRole("columnheader")).toHaveText([
      "Decision",
      "Why",
      "Trade-off",
    ]);
    await expect(
      caseStudy.getByRole("rowheader", {
        name: "Static project data instead of the GitHub API",
      }),
    ).toBeVisible();
  });

  test("the quality section links to the case study", async ({ page }) => {
    await page
      .getByRole("link", { name: "Read how and why it's built this way" })
      .click();

    await expect(page).toHaveURL(/#case-study-homepage$/);
    await expect(
      page.getByRole("article", { name: "This portfolio, tested end to end" }),
    ).toBeInViewport();
  });

  test("renders without loading or error states", async ({ page }) => {
    // The noGithubApi fixture also fails this test if the page calls GitHub.
    await expect(
      page.getByRole("article", { name: "This portfolio, tested end to end" }),
    ).toBeVisible();
    await expect(
      page.getByRole("article").filter({ hasText: "Case study" }),
    ).toHaveCount(2);
    await expect(page.getByText(/projects are loading/i)).toHaveCount(0);
    await expect(page.getByText(/something went wrong/i)).toHaveCount(0);
  });
});
