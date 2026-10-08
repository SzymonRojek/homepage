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
    "Mutation testing with Stryker showed that 80%+ coverage hid real gaps: a saved dark theme, the state on page load, the commas between interests and the content of each case-study section were never checked. After targeted tests, every mutant in those files was caught. The tool needed checking too: a runner bug first reported 13.6% because no tests ran for most mutants.",
  ],
};

const emailCampaignCaseStudy: CaseStudy = {
  summary:
    "A full-stack dashboard for email campaigns, rebuilt from a 2021 CRUD app into a secure, tested product: server-side login, personalized emails with signed unsubscribe links, 200+ unit tests, 63 end-to-end tests against a fake Airtable, and CI/CD through staging to production.",
  impact: [
    { value: "0", label: "secrets or personal data reaching the browser" },
    {
      value: "63",
      label: "end-to-end tests on the production build, with no real data",
    },
    { value: "200+", label: "server and client unit tests" },
    { value: "11", label: "bugs found and fixed in the first review" },
  ],
  problem: [
    "The app started in 2021 as a CRUD client that sent emails through EmailJS straight from the browser. The Airtable key sat behind an Express proxy, but the login ran only in the browser: anyone who called the API directly could read, change or delete every subscriber.",
    "The API had been tested by hand in Postman, there were no automated tests or CI, and the free Heroku hosting had ended. I wanted a product a hiring manager could open and use: a public demo that stays safe with a public password, and code that is safe to change.",
  ],
  constraints: [
    "Airtable is the database: a third-party REST API with rate limits and pages of 100 records.",
    "A public demo with a public password: no real emails, visitors change the data, and only made-up data belongs in it.",
    "Free hosting (Render) that sleeps after inactivity and blocks outgoing email (SMTP).",
    "One maintainer, so every change has to be checked automatically and on staging before production.",
  ],
  diagrams: [
    {
      title: "Runtime: the browser never talks to Airtable",
      steps: [
        "React app",
        "Express API under /api with a signed login token",
        "Server picks recipients, escapes text, signs unsubscribe links",
        "Airtable: subscribers, campaigns, outbox, feedback",
      ],
    },
    {
      title: "Delivery: feature branch to production",
      steps: [
        "Feature branch off dev",
        "Pull request: type check, lint, unit tests, build",
        "Playwright e2e against a fake Airtable",
        "Merge to dev, auto-deploy to staging",
        "Check staging",
        "Release pull request dev to main, CI again",
        "Auto-deploy to production",
      ],
    },
  ],
  decisions: [
    {
      decision:
        "Server-side login with signed tokens and a lockout after 5 wrong passwords",
      why: "A browser-only login didn't protect the API at all.",
      tradeOff:
        "One shared demo password, and the in-memory lockout resets when the free server restarts.",
    },
    {
      decision: "The server picks recipients and builds every email",
      why: "The browser can't be trusted to decide who gets a campaign or what goes into an email.",
      tradeOff:
        "The preview needs a server call, so it uses the same template as sending.",
    },
    {
      decision: "An outbox instead of real sending in the demo",
      why: "With a public password anyone could send email from my account, and the free host blocks SMTP.",
      tradeOff:
        "Nobody gets the emails; each one is saved and can be opened. Switching to a real email service is one setting.",
    },
    {
      decision: "End-to-end tests against a fake Airtable",
      why: "Tests must never touch real data, and CI shouldn't need secrets.",
      tradeOff:
        "The fake can drift from the real API, so it copies Airtable's record shape and errors.",
    },
    {
      decision: "Nightly reset of the demo data",
      why: "Visitors change the data, and the next reviewer should see a working example.",
      tradeOff:
        "New examples are created before the old ones are deleted, and the reset is skipped when nothing changed, to save API calls.",
    },
    {
      decision: "Error monitoring and visit statistics without personal data",
      why: "I need to see failures on the live demo without collecting data I don't need.",
      tradeOff:
        "Sentry gets no IPs, headers or request bodies, so some errors are harder to reproduce.",
    },
    {
      decision: "Staging before production, with a hotfix path",
      why: "Changes are checked on a live copy before real users see them.",
      tradeOff:
        "Two environments to keep in sync, and a hotfix must be merged back into dev.",
    },
  ],
  quality: [
    {
      area: "Testing",
      text: "Server tests with Jest and supertest cover login and tokens, every endpoint, sending and the outbox, templates and escaping, unsubscribe links, the CSV import, feedback limits and the demo reset, with Airtable mocked. Client tests with Vitest and React Testing Library cover CSV parsing, search, sorting, validation, the API client and choosing recipients. Playwright runs 63 user flows on the production build, from login and CSV import to sending, unsubscribing, dark mode, loading errors and phones.",
    },
    {
      area: "Performance",
      text: "The server follows Airtable's paging, so lists show every record and not only the first 100. Approved feedback is kept in memory for 30 seconds and the nightly reset is skipped when nothing changed, both to stay within Airtable's API limits. On the free plan the main cost is a cold start of up to a minute, which the README tells visitors about.",
    },
    {
      area: "Accessibility",
      text: "The UI is built on shadcn/ui and Radix primitives, which handle keyboard and screen-reader support for dialogs, menus and side panels. End-to-end tests find controls by their role and accessible name, and phone layouts have their own tests. There is no automated accessibility scan yet; adding axe is the next step.",
    },
    {
      area: "Security",
      text: "The Airtable token lives only on the server and error responses no longer leak it. Login tokens are HMAC-signed and expire after 8 hours, with constant-time comparisons and an IP lockout. Unsubscribe links have their own signature, user text is escaped in every email, the server has no open CORS, and public feedback has a bot trap, a rate limit and moderation.",
    },
  ],
  lessons: [
    "A review found the Airtable token leaking in error responses. Anything a server returns on failure needs the same care as a success response.",
    "Unchecking every subscriber sent the email to all of them: an empty selection was treated as “no filter”. Edge cases like an empty list deserve their own test.",
    "Lists silently stopped at 100 records because Airtable pages its results. Testing with more data than one page is cheap and catches this.",
    "Monitoring can leak too: unsubscribe tokens in page addresses had to be removed from error reports before they were sent.",
    "A public demo needs product decisions, not only code: an outbox instead of real email, a nightly reset and a request for made-up data.",
    "A fake API makes end-to-end tests fast and safe, but only if it behaves like the real one, including its errors.",
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
    title: "Email Campaign Dashboard, secured and tested",
    repo: "email-campaign-dashboard",
    language: "TypeScript",
    category: "Testing",
    description:
      "Full-stack React, Express and TypeScript dashboard for email campaigns on Airtable, with server-side login, personalized emails, unit and Playwright end-to-end tests against a fake Airtable, and CI/CD through staging to production.",
    demoUrl: "https://email-campaign-dashboard-app.onrender.com/?utm_source=cv",
    caseStudy: emailCampaignCaseStudy,
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
