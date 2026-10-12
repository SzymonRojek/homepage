import { test, expect } from "./fixtures";

test.describe("Projects", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("shows test projects first and other work separately", async ({
    page,
  }) => {
    await test.step("testing projects as case studies, in order", async () => {
      await expect(
        page.getByRole("article").filter({ hasText: "Case study" }),
      ).toHaveText([/Talent Outreach/, /This website: built and tested/]);
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

  test("the Talent Outreach case study links to the code and the live demo", async ({
    page,
  }) => {
    const caseStudy = page.getByRole("article", {
      name: "Talent Outreach: job offers to the right candidates",
    });

    await expect(caseStudy).toContainText("talent-outreach · TypeScript");
    await expect(
      caseStudy.getByRole("link", { name: "GitHub Repository" }),
    ).toHaveAttribute("href", "https://github.com/SzymonRojek/talent-outreach");
    await expect(
      caseStudy.getByRole("link", { name: "Live demo" }),
    ).toHaveAttribute(
      "href",
      "https://talent-outreach.onrender.com/?utm_source=portfolio",
    );

    await caseStudy.getByText("Read the full case study").click();
    await expect(
      caseStudy.getByRole("rowheader", {
        name: "An outbox instead of real sending in the demo",
      }),
    ).toBeVisible();
  });

  test("the homepage case study opens with its story, not stat boxes", async ({
    page,
  }) => {
    const caseStudy = page.getByRole("article", {
      name: "This website: built and tested like a real product",
    });

    await expect(caseStudy).toContainText("Case study");
    await expect(caseStudy.getByLabel("Impact")).toHaveCount(0);
    await expect(
      caseStudy.getByRole("list", { name: "How I solved it" }),
    ).toContainText("My first website, from 2021, was a learning project");
    await expect(
      caseStudy.getByRole("heading", { name: "Problem" }),
    ).toBeHidden();
  });

  test("the full case study opens with every part", async ({ page }) => {
    const caseStudy = page.getByRole("article", {
      name: "This website: built and tested like a real product",
    });

    await caseStudy.getByText("Read the full case study").click();

    await expect(caseStudy.getByRole("heading", { level: 4 })).toHaveText([
      "Brief",
      "Research",
      "Solution",
      "Value",
      "How I built it",
      "How I proved it works",
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
    await expect(
      caseStudy
        .getByRole("region", { name: "Key decisions and trade-offs" })
        .getByRole("columnheader"),
    ).toHaveText(["Decision", "Why", "Trade-off"]);
    await expect(
      caseStudy.getByRole("rowheader", {
        name: "Static project data instead of the GitHub API",
      }),
    ).toBeVisible();
  });

  test("the Talent Outreach case study tells how the problem was solved", async ({
    page,
  }) => {
    const story = page
      .getByRole("article", {
        name: "Talent Outreach: job offers to the right candidates",
      })
      .getByRole("list", { name: "How I solved it" });

    await expect(story.getByRole("heading", { level: 4 })).toHaveText([
      "Brief",
      "Research",
      "Solution",
      "Value",
    ]);
    await expect(story).toContainText("keeps its candidates in a spreadsheet");
    const research = story.getByRole("table");
    await expect(research.getByRole("columnheader")).toHaveText([
      "Spreadsheet and Gmail",
      "My design",
    ]);
    await expect(research.getByRole("row")).toHaveCount(7);
    await expect(research).toContainText("skipped by default");
    await expect(story).toContainText("Not built yet: real delivery.");
  });

  test("each case study shows how it was built and how it was tested", async ({
    page,
  }) => {
    const caseStudy = page.getByRole("article", {
      name: "Talent Outreach: job offers to the right candidates",
    });

    await expect(
      caseStudy.getByRole("heading", { name: "How I built it" }),
    ).toBeVisible();
    await expect(
      caseStudy.getByRole("heading", { name: "How I proved it works" }),
    ).toBeVisible();
    await expect(
      caseStudy.getByRole("list", { name: "Tester view stack" }),
    ).toContainText("Newman");
    await expect(
      caseStudy.getByRole("list", { name: "Developer view stack" }),
    ).toContainText("Express");
  });

  test("a half of the portrait opens the projects from that side", async ({
    page,
  }) => {
    const views = page.getByRole("group", { name: "View projects as" });

    await page
      .getByRole("link", { name: "See my projects from the tester side" })
      .click();

    await expect(page).toHaveURL(/#projects$/);
    await expect(
      page.getByRole("heading", { level: 2, name: "Projects" }),
    ).toBeInViewport();
    await expect(views.getByRole("button", { name: "Tester" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await expect(
      page.getByRole("heading", { name: "How I built it" }),
    ).toHaveCount(0);

    await test.step("the developer half works from the keyboard", async () => {
      await page
        .getByRole("link", { name: "See my projects from the developer side" })
        .focus();
      await page.keyboard.press("Enter");
      await expect(
        views.getByRole("button", { name: "Developer" }),
      ).toHaveAttribute("aria-pressed", "true");
    });
  });

  test("the view switch shows the developer or the tester side", async ({
    page,
  }) => {
    const views = page.getByRole("group", { name: "View projects as" });
    const built = page.getByRole("heading", { name: "How I built it" });
    const tested = page.getByRole("heading", {
      name: "How I proved it works",
    });

    await test.step("starts with both sides", async () => {
      await expect(views.getByRole("button", { name: "Both" })).toHaveAttribute(
        "aria-pressed",
        "true",
      );
      await expect(built).toHaveCount(2);
      await expect(tested).toHaveCount(2);
    });

    await test.step("tester view hides how it was built", async () => {
      await views.getByRole("button", { name: "Tester" }).click();
      await expect(
        views.getByRole("button", { name: "Tester" }),
      ).toHaveAttribute("aria-pressed", "true");
      await expect(built).toHaveCount(0);
      await expect(tested).toHaveCount(2);
    });

    await test.step("developer view hides how it was tested", async () => {
      await views.getByRole("button", { name: "Developer" }).click();
      await expect(built).toHaveCount(2);
      await expect(tested).toHaveCount(0);
    });

    await test.step("works from the keyboard", async () => {
      await views.getByRole("button", { name: "Developer" }).focus();
      await page.keyboard.press("Shift+Tab");
      await page.keyboard.press("Enter");
      await expect(views.getByRole("button", { name: "Both" })).toHaveAttribute(
        "aria-pressed",
        "true",
      );
      await expect(tested).toHaveCount(2);
    });
  });

  test("the homepage tester view shows the CI pipeline with live status", async ({
    page,
  }) => {
    const caseStudy = page.getByRole("article", {
      name: "This website: built and tested like a real product",
    });
    const checks = caseStudy
      .getByRole("list", { name: "CI checks" })
      .getByRole("listitem");

    await expect(checks).toHaveCount(6);
    await expect(checks.filter({ hasText: "Lighthouse budgets" })).toHaveCount(
      1,
    );
    await expect(checks.filter({ hasText: "Dependabot" })).toHaveCount(1);
    await expect(
      caseStudy.getByText("Every check passes → deploy to GitHub Pages"),
    ).toBeVisible();
    await expect(
      caseStudy.getByRole("link", { name: "CI status" }),
    ).toHaveAttribute("href", /actions\/workflows\/ci\.yml$/);

    await page
      .getByRole("group", { name: "View projects as" })
      .getByRole("button", { name: "Developer" })
      .click();
    await expect(
      caseStudy.getByRole("list", { name: "CI checks" }),
    ).toHaveCount(0);
  });

  test("the tester mindset links to the pipeline as proof", async ({
    page,
  }) => {
    await page
      .getByRole("article", { name: "Tester mindset" })
      .getByRole("link", { name: /See it in practice/ })
      .click();

    await expect(page).toHaveURL(/#case-study-homepage$/);
    await expect(
      page.getByRole("article", {
        name: "This website: built and tested like a real product",
      }),
    ).toBeInViewport();
  });

  test("renders without loading or error states", async ({ page }) => {
    // The noGithubApi fixture also fails this test if the page calls GitHub.
    await expect(
      page.getByRole("article", {
        name: "This website: built and tested like a real product",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("article").filter({ hasText: "Case study" }),
    ).toHaveCount(2);
    await expect(page.getByText(/projects are loading/i)).toHaveCount(0);
    await expect(page.getByText(/something went wrong/i)).toHaveCount(0);
  });
});
