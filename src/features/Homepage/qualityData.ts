const repositoryURL = "https://github.com/SzymonRojek/homepage";

export const quality = {
  intro:
    "I test this site the way I test at work: every push to GitHub runs the checks below, and nothing is deployed unless they all pass.",
  badgeURL: `${repositoryURL}/actions/workflows/ci.yml/badge.svg`,
  workflowURL: `${repositoryURL}/actions/workflows/ci.yml`,
  testsURL: `${repositoryURL}/tree/main/e2e`,
  checks: [
    "TypeScript in strict mode, type-checked on every push",
    "Unit and component tests with Vitest and Testing Library",
    "End-to-end tests with Playwright on desktop and mobile, with the GitHub API mocked",
    "Accessibility scans with axe in light and dark mode",
    "Lint, type checks and all tests in GitHub Actions before each deploy",
  ],
};
