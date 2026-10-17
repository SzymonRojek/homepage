import type { Gates, Pipeline } from "./projectsData";

const repositoryURL = "https://github.com/SzymonRojek/homepage";

// The CI gates of this site, shown in the homepage case study's tester view.
export const sitePipeline: Pipeline = {
  name: ".github/workflows/ci.yml",
  checks: [
    "ESLint and a strict TypeScript type check",
    "Vitest unit and component tests with a 90% coverage gate",
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

// The same gates, short, on this site's project card, in the order ci.yml
// runs them: the 90% gate is the coverage threshold in vite.config.ts and
// the median of 3 is numberOfRuns in lighthouserc.json.
export const siteGates: Gates = {
  checks: [
    "npm audit",
    "ESLint + TypeScript",
    "Vitest · 90% coverage gate",
    "Production build",
    "Playwright + axe · desktop & mobile",
    "Lighthouse budgets · median of 3",
  ],
  result: "Deploy to GitHub Pages",
};
