import { githubUserName } from "./githubUserName";
import { siteGates, sitePipeline } from "./pipelineData";

export type ProjectCategory = "Testing" | "Other";

export interface Decision {
  decision: string;
  why: string;
  tradeOff: string;
}

export type QualityArea =
  "Testing" | "Performance" | "Accessibility" | "Security";

// A CI pipeline drawn as a terminal in a tester view.
export interface Pipeline {
  name: string;
  checks: string[];
  result: string;
  badgeURL: string;
  workflowURL: string;
  testsURL: string;
}

// How the problem was solved, in the order an employer asks about it:
// the brief, what the market already offers, the solution and its value.
export interface Story {
  brief: string;
  // Column heading for what already exists, e.g. "Spreadsheet and Gmail".
  researchAgainst: string;
  research: { market: string; mine: string }[];
  solution: string[];
  value: string[];
  // An honest limit or next step, shown under the value.
  nextStep?: string;
}

// One side of a project: how it was built, or how it was tested.
export interface Lens {
  headline: string;
  points: string[];
  stack: string[];
  // Shown instead of (or after) the points, as live evidence.
  pipeline?: Pipeline;
}

// An in-depth write-up. Projects without one show as a short tile, so a case
// study appears on the page as soon as this is filled in.
export interface CaseStudy {
  // The problem in one or two sentences, visible without expanding.
  summary: string;
  // Shown first, right under the title.
  story?: Story;
  // The same project seen by a developer and by a tester, shown side by side.
  developer: Lens;
  tester: Lens;
  problem: string[];
  constraints: string[];
  diagrams: { title: string; steps: string[] }[];
  decisions: Decision[];
  quality: { area: QualityArea; text: string }[];
}

// CI gates in the order the workflow runs them, and what follows when all
// pass. Each one must be a check CI really enforces.
export interface Gates {
  checks: string[];
  result: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Project {
  title: string;
  // GitHub repository name under githubUserName.
  repo: string;
  language: string;
  description: string;
  category: ProjectCategory;
  demoUrl?: string;
  // Card: one sentence and three short facts in the same pattern on every
  // card: what it is, how it's tested, how quality is guarded. The full story
  // opens on click.
  teaser?: string;
  // The card's heading, when it says more than the project's name (the case
  // study keeps the name). The card then shows no sentence under it.
  cardTitle?: string;
  facts?: string[];
  // In place of the facts: the CI gates the project passes, ticked one by
  // one as the card comes into view, then the deploy.
  gates?: Gates;
  // In place of the facts: a few numbers, large, each counted in the
  // project's repo. A count can fall when tests change, so recheck them
  // whenever the project changes.
  stats?: Stat[];
  // A short line over the name: what kind of project it is.
  tag?: string;
  // The one project shown large, on the deep green; the others sit beside it
  // as white cards.
  featured?: boolean;
  caseStudy?: CaseStudy;
}

const homepageCaseStudy: CaseStudy = {
  summary:
    "My portfolio is also a test project: a React and TypeScript site that ships only when unit, end-to-end, accessibility, performance and security checks all pass.",
  story: {
    brief:
      "My first website, from 2021, was a learning project: it had no tests, and its project list could fail for a visitor. I rebuilt it to show my testing skills in practice, on a site that never breaks.",
    researchAgainst: "Before the rebuild",
    research: [
      {
        market:
          "Projects loaded from the GitHub API, which allows 60 requests an hour per address, so a visitor on a shared office network could see an error.",
        mine: "All content is static, so there is nothing to time out or rate-limit.",
      },
      {
        market: "No automated tests and no CI.",
        mine: "Every change passes unit, end-to-end, accessibility and Lighthouse checks before it can deploy.",
      },
      {
        market: "Reloading in dark mode flashed a white page.",
        mine: "The theme is painted before JavaScript loads.",
      },
      {
        market:
          "The HTML was empty until JavaScript ran, so search engines and AI tools that don't run it saw a blank page.",
        mine: "The build writes the whole page into the HTML, case studies included.",
      },
      {
        market:
          "Google Fonts blocked rendering, and the photo was three times larger than displayed.",
        mine: "A self-hosted font and a right-sized photo took mobile performance from 0.84 to 0.96.",
      },
    ],
    solution: [
      "Content in typed data files, built into static HTML at release time.",
      "A test pyramid: unit tests for logic, Playwright for what visitors see, axe for accessibility.",
      "A protected main branch: changes reach the live site only through a pull request I review, so an AI coding assistant can't ship on its own.",
    ],
    value: [
      "Free hosting on GitHub Pages.",
      "Nothing can fail for a visitor: no API calls, no loading or error states.",
      "Anyone can check the work themselves, through the public tests and the CI badge.",
    ],
  },
  developer: {
    headline: "A static React app with nothing that can fail for a visitor",
    points: [
      "React 19 with strict TypeScript, Redux Toolkit for the theme and styled-components with typed light and dark themes.",
      "Content lives in typed data files, so there are no runtime API calls and no loading or error states.",
      "The theme follows the OS live, a saved choice wins, and it's painted before JavaScript loads, so a dark reload never flashes light.",
      "Fallback fonts are size-matched to the real ones, so the swap when they arrive moves nothing on the page.",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Redux Toolkit",
      "styled-components",
      "Vite",
      "GitHub Pages",
    ],
  },
  tester: {
    headline:
      "Nothing ships unless every gate passes. Every push runs this pipeline:",
    points: [],
    pipeline: sitePipeline,
    stack: [
      "Vitest",
      "Testing Library",
      "Playwright",
      "axe",
      "Lighthouse CI",
      "Stryker",
      "GitHub Actions",
    ],
  },
  problem: [
    "The earlier version loaded my projects from the GitHub API in the visitor's browser. That API allows 60 unauthenticated requests per hour per IP address, so a recruiter on a shared office network could see an error box in the middle of a tester's portfolio.",
  ],
  constraints: [
    "Free static hosting on GitHub Pages at my own domain, with no server.",
    "One maintainer with limited time, so automation has to catch regressions.",
    "WCAG AA colour contrast in both the light and the dark theme.",
  ],
  diagrams: [
    {
      title: "Runtime: what a visitor's browser loads",
      steps: [
        "Content in TypeScript data files",
        "React components with light and dark themes",
        "Vite production build",
        "Whole page prerendered into the HTML",
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
        "Unit tests with 90% coverage gate",
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
      decision: "A 90% coverage gate that leaves out styles",
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
      decision: "Prerender the page into the HTML at build time",
      why: "Search engines and AI tools that don't run JavaScript saw an empty page.",
      tradeOff:
        "Components must render without a browser. A unit test renders the page in Node and fails if one reaches for it.",
    },
    {
      decision: "Self-hosted font and a right-sized photo",
      why: "Google Fonts blocked rendering, and the photo was three times larger than displayed.",
      tradeOff:
        "Font updates are manual: the files live in the site and are preloaded in the HTML.",
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
      text: "Vitest and Testing Library cover logic and components. Playwright runs against the production build in desktop and mobile Chrome, and again in Safari on a desktop, an iPad and iPhones, with tests grouped by page section and named steps. Role-based locators also check that every control has an accessible name.",
    },
    {
      area: "Performance",
      text: "Lighthouse runs three times on every push and fails CI if the median performance score drops below 0.85 or layout shift goes above 0.1. Self-hosting the font and resizing the photo raised the mobile score from 0.84 to about 0.9 and brought the first paint forward from 3.0 s to 2.2 s. The build also writes the whole page into the HTML, so it can be read without JavaScript, and in the light theme React takes it over as it is, so the photo isn't drawn twice.",
    },
    {
      area: "Accessibility",
      text: "axe scans the page in the light and dark themes with every case study expanded, and any serious or critical violation fails the build. Lighthouse accessibility must stay at 95 or above. The page uses semantic headings, landmarks and labelled lists.",
    },
    {
      area: "Security",
      text: "No secrets and no runtime API calls. The built page carries its own content security policy, with a hash for every inline script, since GitHub Pages cannot send headers, and an end-to-end test fails on any refusal the browser reports. npm audit fails CI on high-severity advisories in the code shipped to visitors, and Dependabot proposes updates every week. External links use rel=“noreferrer”. Development-only tools still carry some advisories, but they never reach the browser.",
    },
  ],
};

// Facts checked on main of github.com/SzymonRojek/talent-outreach (October 2026).
const talentOutreachCaseStudy: CaseStudy = {
  summary:
    "A recruitment tool rebuilt from a 2021 email app: job offers go to the right candidates by role and budget, personalised, only with consent and not to anyone contacted in the last 14 days, with tests at every level and CI/CD through staging to production.",
  story: {
    brief:
      "A small recruitment agency keeps its candidates in a spreadsheet. Every new job offer means filtering by hand, pasting addresses into Gmail and writing “Dear candidate”, with the risk of leaking addresses or contacting the same people too often.",
    researchAgainst: "Spreadsheet and Gmail",
    research: [
      {
        market: "Filter the sheet by hand and copy the addresses.",
        mine: "Pick a role and a budget, and the matching candidates are found.",
      },
      {
        market: "“Dear candidate” for everyone.",
        mine: "Every email uses the candidate's name and the role, and a mistyped placeholder is caught before sending.",
      },
      {
        market: "Nobody remembers who got which offer.",
        mine: "Candidates contacted in the last 14 days are skipped by default, and the list shows when each one was last contacted.",
      },
      {
        market: "Consent is a column nobody updates.",
        mine: "Only candidates open to offers get emails, and the opt-out link in every email updates the status by itself.",
      },
      {
        market: "One address in CC instead of BCC leaks everyone's email.",
        mine: "One email per candidate, so nobody sees the others.",
      },
      {
        market: "What was sent is buried in the Sent folder.",
        mine: "An outbox for each job offer shows who got it and every email exactly as it was sent.",
      },
    ],
    solution: [
      "A server-only path to the data: the Airtable token never reaches the browser.",
      "A one-click “Try the demo” login that exists only where the demo is switched on; API clients use a password, with a 15-minute lockout after 5 wrong attempts.",
      "The browser suggests the recipients, and the server has the last word: it sends only to candidates open to offers.",
      "Every email is built on the server from one template: personalised, escaped and with a signed opt-out link. The preview uses the same template.",
      "An outbox instead of real sending, so the public demo can't email anyone.",
      "Staging before production, a nightly demo reset followed by a read-only check of the live app, and error monitoring without personal data.",
    ],
    value: [
      "Fewer costly mistakes: no CC leaks, no offer twice within two weeks and no email to anyone without consent.",
      "From a role and a budget to personalised offers in one flow, with a preview before every send.",
      "Safe to hand over and change: tests at every level, CI on every pull request and staging before production.",
    ],
    nextStep:
      "Not built yet: real delivery. Every email is built, checked and saved to the outbox; sending it through an email service is one more transport in one file. Airtable's free plan also caps a base at 1,000 records and 1,000 API calls a month, so a bigger talent pool needs a paid tier.",
  },
  developer: {
    headline: "A 2021 email app rebuilt into a focused recruitment product",
    points: [
      "React 19 client with shadcn/ui, TanStack Query and React Hook Form; an Express API in TypeScript on Node.js 24.",
      "Signed login tokens valid for 8 hours. The one-click demo login exists only where it is switched on, and the lockout uses the visitor's real address behind Cloudflare, so one person can't block others.",
      "Recipients by role, budget and last contact; the server re-checks consent and builds every email with a signed opt-out link.",
      "Follows Airtable's paging and rate limits, resets the demo every night, reports errors to Sentry without personal data, and deploys dev to staging and main to production.",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Express",
      "Airtable API",
      "Tailwind CSS",
      "shadcn/ui",
      "Sentry",
      "Render",
    ],
  },
  tester: {
    headline: "Tested from a single function to the live app",
    points: [
      "200+ unit tests: Jest and supertest on the server, Vitest and React Testing Library on the client.",
      "63 Playwright user flows on the production build against a fake Airtable, from a job offer draft to the outbox, opting out and phones. CI needs no secrets and never touches real data.",
      "A Postman collection run by Newman in CI tests every endpoint from the outside, including refused logins, a duplicate email and a second send of the same offer; its read-only part checks the live app after every nightly reset.",
      "Lighthouse audits 7 screens on every pull request and fails it if accessibility, best practices or SEO drop below 100.",
    ],
    stack: [
      "Jest",
      "supertest",
      "Vitest",
      "React Testing Library",
      "Playwright",
      "Postman",
      "Newman",
      "Lighthouse",
      "GitHub Actions",
    ],
  },
  problem: [
    "The app started in 2021 as an email CRUD client that sent emails through EmailJS straight from the browser. The Airtable key sat behind an Express proxy, but the login ran only in the browser: anyone who called the API directly could read, change or delete every record. My first review found 11 bugs.",
    "In 2026 I rebuilt it to production standard and then narrowed it from a generic newsletter tool to one recruiter's problem: the right job offer to the right candidates, and not to anyone contacted in the last 14 days.",
  ],
  constraints: [
    "Airtable is the database: a third-party REST API with rate limits and pages of 100 records.",
    "Candidate data is personal data: consent, an opt-out in every email and no personal data in monitoring.",
    "A public demo anyone can enter with one click: no real emails, visitors change the data, and only made-up data belongs in it.",
    "Free hosting (Render) that sleeps after inactivity and blocks outgoing email (SMTP).",
    "One maintainer, so every change has to be checked automatically and on staging before production.",
  ],
  diagrams: [
    {
      title: "Runtime: the browser never talks to Airtable",
      steps: [
        "React app",
        "Express API under /api with a signed login token",
        "Server checks consent, escapes text, signs opt-out links",
        "Airtable: candidates, job offers, outbox, feedback",
      ],
    },
    {
      title: "Delivery: feature branch to production",
      steps: [
        "Feature branch off dev",
        "Pull request: type check, lint, unit tests, build",
        "Playwright e2e, Postman API tests and Lighthouse against a fake Airtable",
        "Merge to dev, auto-deploy to staging",
        "Check staging",
        "Release pull request dev to main, CI again on all changes together",
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
        "The lockout lives in memory and resets when the free server restarts. It counts the real address behind Cloudflare, so one visitor can't block others.",
    },
    {
      decision: "A one-click demo login, only where the demo is switched on",
      why: "A reviewer should try the app in one click, without a password.",
      tradeOff:
        "Any server without the setting has no passwordless door; API clients still log in with the password.",
    },
    {
      decision:
        "The browser suggests the recipients, the server has the last word",
      why: "Filtering by role, budget and last contact needs a fast, interactive list.",
      tradeOff:
        "The server re-checks consent on every send, so an outdated or edited list can't reach someone who opted out.",
    },
    {
      decision: "An outbox instead of real sending in the demo",
      why: "Anyone can enter the public demo, and the free host blocks SMTP.",
      tradeOff:
        "Nobody gets the emails; each one is saved and can be opened. Real delivery is one more transport in one file, not built yet.",
    },
    {
      decision: "End-to-end, API and Lighthouse runs against a fake Airtable",
      why: "Tests must never touch real data, and CI shouldn't need secrets.",
      tradeOff:
        "The fake can drift from the real API, so it copies Airtable's record shape and errors.",
    },
    {
      decision:
        "Nightly reset of the demo data, then a read-only check of the live app",
      why: "Visitors change the data, and the next reviewer should see a working example.",
      tradeOff:
        "New examples are created before the old ones are deleted, and the reset is skipped when nothing changed, to save API calls. A broken demo fails the run.",
    },
    {
      decision: "One recruiter problem instead of a generic newsletter tool",
      why: "A problem that is solved end to end is easier to explain, to use and to test.",
      tradeOff: "Fewer features: the app only sends job offers to candidates.",
    },
    {
      decision: "Error monitoring without personal data",
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
      text: "Server tests with Jest and supertest cover every endpoint, login and limits, sending and templates, opt-out links, the CSV import, feedback, the demo reset and privacy in monitoring, with Airtable mocked. Client tests with Vitest and React Testing Library cover validation, CSV, search, sorting and filtering, the API client and choosing recipients by role, budget and last contact. Playwright runs 63 user flows on the production build, from a job offer draft to the outbox, opting out, unsaved changes, dark mode and phones. A Postman collection of 30 requests, run by Newman in CI, tests every endpoint from the outside, and its read-only smoke folder checks the live app after every nightly reset.",
    },
    {
      area: "Performance",
      text: "The server follows Airtable's paging, so lists show every record and not only the first 100. Approved feedback is kept in memory for 30 seconds and the nightly reset is skipped when nothing changed, both to stay within Airtable's API limits. Lighthouse reports performance on 7 screens; its limit only catches a real slowdown, because scores vary on shared CI machines. On the free plan the main cost is a cold start of up to a minute, which the README tells visitors about.",
    },
    {
      area: "Accessibility",
      text: "The UI is built on shadcn/ui and Radix primitives, which handle keyboard and screen-reader support for dialogs, menus and side panels. Lighthouse audits 7 screens, logged out and in, on every pull request and fails it below 100 for accessibility; it already caught a low-contrast avatar and a button without a name. End-to-end tests find controls by their role and accessible name, and phone layouts have their own tests.",
    },
    {
      area: "Security",
      text: "The Airtable token lives only on the server and error responses no longer leak it. Login tokens are HMAC-signed and expire after 8 hours, with constant-time comparisons and a lockout on the visitor's real address. The demo login exists only where it is switched on. Opt-out links have their own signature, user text is escaped in every email, the server has no CORS, and public feedback has a bot trap, a rate limit and moderation.",
    },
  ],
};

// The section's title on screen, two sentences on two lines in the colours
// of the CODE / TEST portrait: building in the code colour, testing in the
// testing colour. Then the intro.
export const projectsHeadline: { text: string; side: "code" | "test" }[] = [
  { text: "Built in my own time.", side: "code" },
  { text: "Tested like production.", side: "test" },
];

export const projectsIntro =
  "Two apps I built to practise development, then tested the way I test at work. Each has two sides: how I built it, and how I proved it works.";

export const projects: Project[] = [
  {
    title: "Talent Outreach: job offers to the right candidates",
    repo: "talent-outreach",
    language: "TypeScript",
    category: "Testing",
    description:
      "Full-stack recruitment tool: job offers to candidates by role and budget, personalised, only with consent and not to anyone contacted in the last 14 days, with unit, API, end-to-end and Lighthouse tests and CI/CD through staging to production.",
    demoUrl: "https://talent-outreach.onrender.com/?utm_source=portfolio",
    tag: "Full-stack app",
    featured: true,
    teaser:
      "Job offers to the right candidates: matched by role and budget, personalised, and skipping anyone contacted in the last 14 days.",
    // Counted on origin/main of talent-outreach on 16 October 2026: 144
    // server and 102 client unit tests, 63 Playwright tests and 56
    // assertions in the Postman collection.
    stats: [
      { value: "200+", label: "unit tests" },
      { value: "63", label: "Playwright flows" },
      { value: "56", label: "API checks" },
    ],
    caseStudy: talentOutreachCaseStudy,
  },
  {
    title: "This website: built and tested like a real product",
    repo: "homepage",
    language: "TypeScript",
    category: "Testing",
    tag: "The site you're on",
    cardTitle: "Nothing ships unless every gate passes.",
    gates: siteGates,
    description:
      "Built in React and TypeScript and tested like a production app: Vitest unit tests, Playwright end-to-end tests and axe accessibility scans run in GitHub Actions before every deploy.",
    caseStudy: homepageCaseStudy,
  },
];

export const repoUrl = (repo: string) =>
  `https://github.com/${githubUserName}/${repo}`;
