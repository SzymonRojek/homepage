import { githubUserName } from "./githubUserName";

export type ProjectCategory = "Testing" | "Other";

export interface Decision {
  decision: string;
  why: string;
  tradeOff: string;
}

export type QualityArea =
  "Testing" | "Performance" | "Accessibility" | "Security";

// An in-depth write-up. Projects without one show as a short tile, so a case
// study appears on the page as soon as this is filled in.
export interface CaseStudy {
  // The problem in one or two sentences, visible without expanding.
  summary: string;
  // 2–4 numbers a recruiter can scan. Prefer thresholds CI enforces, so they stay true.
  impact: { value: string; label: string }[];
  problem: string[];
  constraints: string[];
  diagrams: { title: string; steps: string[] }[];
  decisions: Decision[];
  quality: { area: QualityArea; text: string }[];
  lessons: string[];
}

export interface Project {
  title: string;
  // GitHub repository name under githubUserName.
  repo: string;
  language: string;
  description: string;
  category: ProjectCategory;
  demoUrl?: string;
  caseStudy?: CaseStudy;
}

const homepageCaseStudy: CaseStudy = {
  summary:
    "My portfolio is also a test project: a React and TypeScript site that ships only when unit, end-to-end, accessibility, performance and security checks all pass.",
  impact: [
    {
      value: "0",
      label: "runtime API calls, so nothing can fail for a visitor",
    },
    { value: "40+", label: "end-to-end tests on desktop and mobile" },
    { value: "80%+", label: "unit test coverage, enforced in CI" },
    {
      value: "95+",
      label: "Lighthouse accessibility, SEO and best practices, enforced in CI",
    },
  ],
  problem: [
    "A CV can say “Playwright” and “CI/CD”, but a recruiter can't check it. I wanted the portfolio itself to be the evidence: readable by HR in 30 seconds, and able to stand up to a hiring manager's review of the code.",
    "The earlier version loaded my projects from the GitHub API in the visitor's browser. That API allows 60 unauthenticated requests per hour per IP address, so a recruiter on a shared office network could see an error box in the middle of a tester's portfolio.",
  ],
  constraints: [
    "Free static hosting on GitHub Pages under /homepage/, with no server.",
    "One maintainer with limited time, so automation has to catch regressions.",
    "Privacy: no phone number anywhere on the site.",
    "WCAG AA colour contrast in both the light and the dark theme.",
    "An older Mac (macOS 12) where Playwright can't install its own browser, so local runs use the installed Chrome.",
  ],
  diagrams: [
    {
      title: "Runtime: what a visitor's browser loads",
      steps: [
        "Content in TypeScript data files",
        "React components with light and dark themes",
        "Vite production build",
        "Static files on GitHub Pages",
        "Browser: no API calls",
      ],
    },
    {
      title: "Delivery: every change goes through these gates",
      steps: [
        "Commit on dev",
        "Dependency audit",
        "Lint and type check",
        "Unit tests with 80% coverage gate",
        "Production build",
        "Playwright and axe on desktop and mobile",
        "Lighthouse budgets",
        "Pull request to main, merged by me",
        "Deploy to GitHub Pages",
      ],
    },
  ],
  decisions: [
    {
      decision: "Static project data instead of the GitHub API",
      why: "Rate limits on shared networks could show recruiters an error.",
      tradeOff:
        "Descriptions are updated by hand. An end-to-end fixture fails if the page ever calls the GitHub API again.",
    },
    {
      decision:
        "Test pyramid: Vitest for logic and components, Playwright for real-browser behaviour, axe for accessibility",
      why: "Fast feedback on logic, and real confidence in what visitors see.",
      tradeOff:
        "End-to-end tests take about a minute, so they cover only user-visible behaviour.",
    },
    {
      decision: "An 80% coverage gate that leaves out styles",
      why: "Coverage should measure logic, not CSS.",
      tradeOff: "Styles are checked by the end-to-end and axe tests instead.",
    },
    {
      decision: "Paint the theme before JavaScript loads",
      why: "Reloading in dark mode briefly flashed a light page.",
      tradeOff:
        "The background colours live in two places. A unit test keeps them in sync.",
    },
    {
      decision: "Self-hosted font and a right-sized photo",
      why: "Google Fonts blocked rendering, and the photo was three times larger than displayed.",
      tradeOff: "Font updates now come through npm instead of Google.",
    },
    {
      decision: "Protected main branch with pull requests I merge myself",
      why: "Every push to main deploys. The rule also stops an AI coding assistant from shipping on its own.",
      tradeOff:
        "Even a one-line fix needs a pull request and a green pipeline.",
    },
  ],
  quality: [
    {
      area: "Testing",
      text: "Vitest and Testing Library cover logic and components. Playwright runs against the production build in desktop and mobile Chrome, with tests grouped by page section and named steps. Role-based locators also check that every control has an accessible name.",
    },
    {
      area: "Performance",
      text: "Lighthouse runs three times on every push and fails CI if the median performance score drops below 0.85 or layout shift goes above 0.1. Self-hosting the font and resizing the photo raised the mobile score from 0.84 to about 0.9 and brought the first paint forward from 3.0 s to 2.2 s. The page still waits for JavaScript to render, so prerendering is the next step.",
    },
    {
      area: "Accessibility",
      text: "axe scans the page in the light and dark themes with every case study expanded, and any serious or critical violation fails the build. Lighthouse accessibility must stay at 95 or above. The page uses semantic headings, landmarks and labelled lists.",
    },
    {
      area: "Security",
      text: "No secrets and no runtime API calls. npm audit fails CI on high-severity advisories in the code shipped to visitors, and Dependabot proposes updates every week. External links use rel=“noreferrer”. Development-only tools still carry some advisories, but they never reach the browser.",
    },
  ],
  lessons: [
    "A bug I couldn't reproduce, a light flash on reload, became solvable once I wrote a failing test that recorded the background colour on every frame.",
    "A fix can look broken because of browser caching. I now check what the server actually serves before changing the code again.",
    "When removing well-tested code lowered coverage, I added tests for real branches instead of lowering the threshold.",
    "End-to-end tests hard-code the text a visitor sees instead of importing it from the data files, so a content mistake can't pass by testing itself.",
    "Lighthouse CI judges the best of three runs by default. I switched to the median so the budget can't pass by luck.",
  ],
};

export const projects: Project[] = [
  {
    title: "This portfolio, tested end to end",
    repo: "homepage",
    language: "TypeScript",
    category: "Testing",
    description:
      "Built in React and TypeScript and tested like a production app: Vitest unit tests, Playwright end-to-end tests and axe accessibility scans run in GitHub Actions before every deploy.",
    caseStudy: homepageCaseStudy,
  },
  {
    title: "Ferry booking E2E suite",
    repo: "df-automation-tests",
    language: "JavaScript",
    category: "Testing",
    description:
      "End-to-end test suite for a ferry booking site, written with Gherkin, Cucumber and TestCafe across the UK, German and Italian sites.",
  },
  {
    title: "Email campaign API tests",
    repo: "email-campaign-react-airtable",
    language: "JavaScript",
    category: "Testing",
    description:
      "Email campaign CRUD app on the Airtable REST API, with an Express proxy that keeps the API key out of the browser. Every endpoint is covered by Postman API tests for valid, invalid, authorised and unauthorised requests, automated with the Postman Collection Runner.",
  },
  {
    title: "Role-based sign-in app",
    repo: "react-sign-in-up",
    language: "JavaScript",
    category: "Other",
    description:
      "React login and registration with admin, editor and user roles.",
  },
];

export const repoUrl = (repo: string) =>
  `https://github.com/${githubUserName}/${repo}`;
