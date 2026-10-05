const repositoryURL = "https://github.com/SzymonRojek/homepage";

export const quality = {
  intro:
    "I test this site the way I test at work: every push to GitHub runs the checks below, and nothing is deployed unless they all pass.",
  badgeURL: `${repositoryURL}/actions/workflows/ci.yml/badge.svg`,
  workflowURL: `${repositoryURL}/actions/workflows/ci.yml`,
  testsURL: `${repositoryURL}/tree/main/e2e`,
  caseStudyAnchor: "#case-study-homepage",
  checks: [
    "Vitest unit and component tests with a coverage gate",
    "Playwright end-to-end tests on desktop and mobile, with axe accessibility scans",
    "Lighthouse budgets for performance, accessibility, best practices and SEO",
    "Dependency audit on every push and weekly Dependabot updates",
    "GitHub Actions gate every deploy",
  ],
};
