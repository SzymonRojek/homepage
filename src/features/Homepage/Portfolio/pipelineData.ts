import type { Pipeline } from "./projectsData";

const repositoryURL = "https://github.com/SzymonRojek/homepage";

// The CI gates of this site, shown in the homepage case study's tester view.
export const sitePipeline: Pipeline = {
  name: ".github/workflows/ci.yml",
  checks: [
    "ESLint and a strict TypeScript type check",
    "Vitest unit and component tests with an 80% coverage gate",
    "40+ Playwright tests on desktop and mobile, with axe scans of both themes",
    "Lighthouse budgets on the median of three runs",
    "npm audit on every push and weekly Dependabot updates",
    "A fixture that fails any test calling the GitHub API",
  ],
  result: "Every check passes → deploy to GitHub Pages",
  badgeURL: `${repositoryURL}/actions/workflows/ci.yml/badge.svg`,
  workflowURL: `${repositoryURL}/actions/workflows/ci.yml`,
  testsURL: `${repositoryURL}/tree/main/e2e`,
};
