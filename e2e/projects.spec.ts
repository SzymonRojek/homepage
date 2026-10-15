import type { Page } from "@playwright/test";
import { test, expect } from "./fixtures";

const TALENT = "Talent Outreach: job offers to the right candidates";
const HOMEPAGE = "This website: built and tested like a real product";

// Experience and story cards are articles too, so case studies are looked for
// inside the Projects section only.
const caseStudies = (page: Page) =>
  page.getByRole("region", { name: "Projects" }).getByRole("article");

// Opens a case study from its card, as a visitor would.
const openCaseStudy = async (page: Page, name: string) => {
  await page
    .getByRole("list", { name: "Case studies" })
    .getByRole("listitem")
    .filter({ has: page.getByRole("heading", { name }) })
    .getByRole("button", { name: "Case study" })
    .click();
  return page.getByRole("article", { name });
};

test.describe("Projects", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("shows two case-study cards, all closed", async ({ page }) => {
    const cards = page.getByRole("list", { name: "Case studies" });

    await expect(cards.getByRole("heading", { level: 3 })).toHaveText([
      TALENT,
      HOMEPAGE,
    ]);
    await expect(cards.getByRole("button", { name: "Case study" })).toHaveCount(
      2,
    );
    await expect(caseStudies(page)).toHaveCount(0);
    await expect(
      page.getByRole("group", { name: "View projects as" }),
    ).toHaveCount(0);
    await expect(page.getByRole("list", { name: "Test projects" })).toHaveCount(
      0,
    );
    await expect(
      page.getByRole("region", { name: "Other projects" }),
    ).toHaveCount(0);
  });

  test("both case studies are in the page's HTML while closed", async ({
    page,
    request,
  }) => {
    // What search engines and AI tools read, without clicking anything.
    const html = await (await request.get("/")).text();

    expect(html).toContain("Tested from a single function to the live app");
    expect(html).toContain(
      "A static React app with nothing that can fail for a visitor",
    );
    await expect(caseStudies(page)).toHaveCount(0);
  });

  test("a card links to the code and the live demo", async ({ page }) => {
    const card = page
      .getByRole("list", { name: "Case studies" })
      .getByRole("listitem")
      .filter({ has: page.getByRole("heading", { name: TALENT }) });

    await expect(card).not.toContainText("talent-outreach ·");
    const caseStudy = await openCaseStudy(page, TALENT);
    await expect(caseStudy).not.toContainText("talent-outreach ·");
    await expect(card.locator("img")).toHaveCount(0);
    await expect(card.getByRole("link", { name: "Code" })).toHaveAttribute(
      "href",
      "https://github.com/SzymonRojek/talent-outreach",
    );
    await expect(card.getByRole("link", { name: "Demo" })).toHaveAttribute(
      "href",
      "https://talent-outreach.onrender.com/?utm_source=portfolio",
    );
  });

  test("opens one case study at a time and closes it", async ({ page }) => {
    const talent = await openCaseStudy(page, TALENT);

    await test.step("opens below the cards and takes focus", async () => {
      await expect(talent).toBeVisible();
      await expect(talent).toBeFocused();
      await expect(talent).toBeInViewport();
      await expect(page).toHaveURL(/#case-study-talent-outreach$/);
    });

    await test.step("opening another closes the first", async () => {
      const homepage = await openCaseStudy(page, HOMEPAGE);
      await expect(homepage).toBeVisible();
      await expect(talent).toHaveCount(0);
      await expect(page).toHaveURL(/#case-study-homepage$/);
    });

    await test.step("closes from its card", async () => {
      await page
        .getByRole("button", { name: "Case study", expanded: true })
        .click();
      await expect(caseStudies(page)).toHaveCount(0);
      await expect(page).toHaveURL(/#projects$/);
    });
  });

  test("a link can open one case study", async ({ page }) => {
    await page.goto("./#case-study-homepage");

    const homepage = page.getByRole("article", { name: HOMEPAGE });
    await expect(homepage).toBeVisible();
    await expect(homepage).toBeInViewport();
    await expect(caseStudies(page)).toHaveCount(1);
  });

  test("the Talent Outreach case study tells how the problem was solved", async ({
    page,
  }) => {
    const story = (await openCaseStudy(page, TALENT)).getByRole("list", {
      name: "How I solved it",
    });

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

  test("the technical details close from their end, back at its toggle", async ({
    page,
  }) => {
    const caseStudy = await openCaseStudy(page, HOMEPAGE);
    const toggle = caseStudy.getByText("Technical details");
    await toggle.click();

    await caseStudy
      .getByRole("button", { name: "Close the technical details" })
      .click();

    await expect(
      caseStudy.getByRole("heading", { name: "Problem" }),
    ).toBeHidden();
    await expect(toggle).toBeFocused();
    await expect(toggle).toBeInViewport();
  });

  test("the technical details open with every part", async ({ page }) => {
    const caseStudy = await openCaseStudy(page, HOMEPAGE);
    await expect(
      caseStudy.getByRole("heading", { name: "Problem" }),
    ).toBeHidden();

    await caseStudy.getByText("Technical details").click();

    await expect(caseStudy.getByRole("heading", { level: 4 })).toHaveText([
      "Brief",
      "Research",
      "Solution",
      "Value",
      "How I proved it works",
      "How I built it",
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
    ).toHaveCount(6);
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

  test("each case study shows how it was built and how it was tested", async ({
    page,
  }) => {
    const caseStudy = await openCaseStudy(page, TALENT);

    await expect(
      caseStudy.getByRole("heading", { level: 4 }).filter({
        hasText: /^How I/,
      }),
    ).toHaveText(["How I proved it works", "How I built it"]);
    await expect(
      page.getByRole("group", { name: "View projects as" }),
    ).toHaveCount(0);

    await expect(
      caseStudy.getByRole("heading", { name: "How I built it" }),
    ).toBeVisible();
    await expect(
      caseStudy.getByRole("heading", { name: "How I proved it works" }),
    ).toBeVisible();
    await expect(
      caseStudy.getByRole("list", { name: "Automation view stack" }),
    ).toContainText("Newman");
    await expect(
      caseStudy.getByRole("list", { name: "Developer view stack" }),
    ).toContainText("Express");
  });

  test("a CV link opens a case study at the developer side", async ({
    page,
  }) => {
    await page.goto("./#case-study-talent-outreach-developer");

    await expect(page.getByRole("article", { name: TALENT })).toBeVisible();
    await expect(
      page.locator("#case-study-talent-outreach-developer"),
    ).toBeInViewport();
  });

  test("the homepage tester view shows the CI pipeline with live status", async ({
    page,
  }) => {
    const caseStudy = await openCaseStudy(page, HOMEPAGE);
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
  });

  test("renders without loading or error states", async ({ page }) => {
    // The noGithubApi fixture also fails this test if the page calls GitHub.
    // One "Case study" button per card; the facts are list items too.
    await expect(
      page
        .getByRole("list", { name: "Case studies" })
        .getByRole("button", { name: "Case study" }),
    ).toHaveCount(2);
    await expect(page.getByText(/projects are loading/i)).toHaveCount(0);
    await expect(page.getByText(/something went wrong/i)).toHaveCount(0);
  });
});
