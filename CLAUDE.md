# CLAUDE.md

Guidance for AI agents (Claude Code) working in this repository.

## Project overview

Personal portfolio homepage of **Szymon Rojek**, Software Test Engineer (data migration, SQL and API testing) who also builds front-end.
Live: https://szymonrojek.github.io/homepage/ (GitHub Pages, `homepage` field in `package.json`).

A single page aimed at recruiters for test automation and QA roles (developer roles possibly too, through the `?view=developer` link). The theme of the page is "two mindsets": a tester who also builds software. Developer content is green (`theme.colors.dev`, "build"), tester content is cyan (`theme.colors.qa`, "protect"). Parts in order:

- **Skip link and sticky top bar:** "SR" logo with a gradient border, name and title (back to top), section links (Mindset, How I test, Projects, Experience, Skills), a Contact button and the theme switch.
- **Header (hero):** dotted grid with green/cyan glow, a split portrait (one photo drawn twice: left half black and white with a "Code" badge, right half in colour with "Test"; each half is a link to #projects that switches the project view to developer or tester), open-to-work pill with target roles, name, title with "· self-taught developer", a plain tester-first tagline, a two-sentence bio (no skill chips: they repeated it), one button, "Email me" (LinkedIn is in the footer, "How I test" in the top bar), then the location line (Hove, UK right to work, open to relocation) in small text. The dotted grid and glow sit only behind the portrait. There is deliberately no CV download.
- **Two mindsets, one goal:** a Developer card and a Tester card side by side, each with points backed by real work and a tool list.
- **How I test at work:** professional evidence before the side projects: an intro, one highlight (a large client data migration, no system names), six numbered steps of migration testing (mapping, test design, SQL reconciliation, business logic and stored procedures, root cause, AI with a human in charge) and "Why it matters". Clients, systems and figures stay confidential: don't add internal system names unless the user confirms it's allowed.
- **Projects:** a "View as Tester / Developer / Both" switch (sticky on desktop; Tester by default, or the view named in `?view=developer|tester|both`, so each CV can link to its own view), then projects with a `caseStudy` as full-width case-study cards (no stat boxes: numbers live in the tester view and the story): a numbered "How I solved it" story (Brief → Research as a "what exists vs my design" table → Solution → Value, with an honest next step; it replaces the summary), and a "How I built it" (developer view) and "How I proved it works" (automation view) column that the switch filters; problem, constraints, flow diagrams, decisions table, testing/performance/accessibility/security and lessons sit inside a `<details>`. Other testing projects would render as tiles and `category: "Other"` projects as an "Other projects" list; there are none now (the sign-in app was removed on purpose). Static data, no GitHub API call, so the section cannot fail or rate-limit.
- **Experience:** job, education and languages. Interests were removed on purpose.
- **Skills:** three cards: "Testing & data" (data and SQL first), "Test automation" and "Programming" (self-taught), then a tools row.
- **Footer:** "Let's talk" card with Email and LinkedIn buttons (the address is not shown), GitHub and LinkedIn icons.

The theme follows the OS setting, including live changes while the page is open, until the visitor uses the light/dark switch. After that, the choice is saved in `localStorage("dark")` and the OS setting is ignored.

The site itself is a showcase: it is built in React + TypeScript and tested with Vitest, Playwright and axe in CI. Keep it that way. New behaviour gets tests.

## Tech stack

- **React 19** + **TypeScript** (strict), mounted with `createRoot` in `src/index.tsx`
- **Vite 8** (`@vitejs/plugin-react`, `vite-plugin-svgr`), `base: "/homepage/"`
- **Redux Toolkit 2** + **react-redux 9** for the theme state
- **styled-components 6** with `ThemeProvider` (`themeLight` / `themeDark`) and `styled-normalize`. `DefaultTheme` is typed from `themeLight` in `src/styled.d.ts`.
- **color-alpha** for transparent colours (typed in `src/vite-env.d.ts`)
- **ESLint 9** with typescript-eslint (`eslint.config.js`) and **Prettier 3**
- **Vitest** + **Testing Library** (jsdom): setup in `src/setupTests.ts`, config in the `test` block of `vite.config.ts`
- **Playwright** + **@axe-core/playwright**: `playwright.config.ts`, tests in `e2e/`
- **GitHub Actions** (`.github/workflows/ci.yml`):
  - Every push to `main` or `dev` and every PR to `main` or `dev` runs `npm audit` (shipped deps, high+), lint, typecheck, unit tests with a coverage gate, build, e2e and Lighthouse budgets (`lighthouserc.json`, median of 3 runs).
  - `.github/workflows/mutation.yml`: manual "Run workflow" (optional `mutate` glob) runs Stryker with 4 workers, writes the score per file to the run summary and uploads `reports/mutation` as the `mutation-report` artifact. Not part of the deploy gate.
  - `.github/dependabot.yml` opens weekly npm and GitHub Actions updates against `dev`. Major updates of `eslint`, `@eslint/js` and `typescript` are ignored: `eslint-plugin-react` supports ESLint 9 only and `typescript-eslint` supports TypeScript below 6.1. Merge a Dependabot PR only when its CI is green, and run `npm ci` locally after pulling dependency changes.
  - Only pushes to `main` (merged PRs) deploy `dist/` to the `gh-pages` branch.

## Git workflow (mandatory)

`main` is production: every push to it deploys the live site. These rules are fixed; do not change or skip them, and do not treat an earlier approval as permission for a later step.

1. Work and commit on the **`dev`** branch only. Never commit on `main`.
2. **Always ask the user before any `git push`**, including to `dev`. Wait for an explicit yes.
3. Changes reach `main` only through a **Pull Request `dev → main`** that **the user merges** on GitHub. Open the PR only when the user asks; never merge it yourself.
4. `main` always comes last: local checks → push to `dev` (CI runs lint, typecheck and tests, no deploy) → user reviews → PR → user merges → deploy.

This is enforced in three places:

- **GitHub ruleset on `main`:** no direct pushes, PR required, CI must pass, no bypass (not even for the admin account the agent uses).
- **`.claude/settings.json`:** `deny` blocks `git push` to `main` and `gh pr merge`; `ask` requires approval for every other `git push`.
- **CI:** `.github/workflows/ci.yml` deploys only from `main`.

## Commands

```bash
npm run dev        # dev server on http://localhost:3000/homepage/ (npm start is an alias)
npm run build      # production build into dist/
npm run preview    # serve dist/ locally
npm test           # Vitest in watch mode (npx vitest run for a single run)
npm run test:coverage  # single Vitest run with v8 coverage and thresholds (CI runs this)
npm run test:e2e   # Playwright: builds, serves on :4173, runs desktop + mobile projects
npm run test:lighthouse  # Lighthouse CI budgets against dist/ (run npm run build first)
npm run test:mutation    # Stryker mutation testing; manual, about an hour locally (use --mutate <file> for one file)
npm run typecheck  # tsc --noEmit
npm run lint       # ESLint
npm run format     # Prettier --write
npm run deploy     # manual deploy: build, then gh-pages publishes dist/ (CI does this on push to main)
```

> Stryker note: `@stryker-mutator/vitest-runner` does not activate mutants with Vitest 5 (0 tests ran per mutant, giving a false 13.6% score), so `stryker.config.json` uses the command runner with `coverageAnalysis: "off"` and long timeouts. Check `testsCompleted` in `reports/mutation/mutation.json` before trusting a low score.

> Playwright note: on macOS 12 Playwright cannot install its own Chromium. Local runs therefore use the installed Google Chrome (`channel: "chrome"`), and CI uses the bundled Chromium.

## Architecture

```
src/
  index.tsx                   # createRoot, Redux <Provider> + <App/>
  styled.d.ts                 # DefaultTheme = typeof themeLight
  core/
    store.ts                  # configureStore (theme, projectView); RootState, AppDispatch; saves the theme only when the visitor chose it
    hooks.ts                  # useAppDispatch, useAppSelector (use these, not the plain hooks)
    App/                      # ThemeProvider, Normalize, GlobalStyle, theme.ts (palette + themes)
  common/
    themeSlice.ts             # getInitialDarkTheme (saved choice, else OS), hasUserChoice, toggleTheme, systemThemeChanged
    useSystemTheme.ts         # listens to prefers-color-scheme changes (used in App)
    ThemeSwitch/              # toggle button (aria-pressed)
  features/Homepage/
    index.tsx                 # page composition
    profile.ts                # name, title, secondaryTitle, tagline, availability, location, bio, contactText, LinkedIn (CONTENT)
    mindsetData.ts            # developer and tester mindset cards (CONTENT)
    howITestData.ts           # "How I test at work": intro, highlight, steps, why it matters (CONTENT)
    skillsData.ts             # testingSkills, automationSkills, programmingSkills, tools (CONTENT)
    experienceData.ts         # jobs, education, languages (CONTENT)
    email.ts                  # contact email (CONTENT)
    TopBar/                   # sticky bar: logo, section links, Contact, ThemeSwitch
    MainHeader/SplitPortrait/ # the two-sided photo in the hero
    HowITest/                 # the "How I test at work" section (reuses the Story timeline styles)
    MainHeader/, Mindset/, Skills/, Experience/, Footer/
    Portfolio/
      githubUserName.ts       # GitHub user (CONTENT)
      projectsData.ts         # projects: title, repo, language, description, category, optional demoUrl and caseStudy with developer/tester lenses (CONTENT)
      pipelineData.ts         # this site's CI checks and links, shown in the homepage tester view (CONTENT)
      Story/                  # Brief / Research / Solution / Value timeline of a case study
      Pipeline/               # CI terminal: checks, result line, CI badge, link to the e2e tests
      projectViewSlice.ts     # shared project view ("tester" | "developer" | "both"); starts from ?view= or "tester"; set by LensSwitch and the split portrait
      LensSwitch/             # Tester / Developer / Both view switch (aria-pressed buttons)
      Projects/               # case-study cards, test project tiles + "Other projects" list
      CaseStudy/              # one case study: story (or summary), developer/tester columns, full write-up in <details>
      FlowDiagram/            # data-driven step diagram (ordered list, decorative CSS arrows)
    Footer/SocialIcons/social.ts  # GitHub + LinkedIn links (CONTENT)
    Section/, ButtonLink/, SubHeader/   # shared styled primitives (Section also has Card, Chip, Chips, SectionIntro)
e2e/
  fixtures.ts                 # `test` that fails if the page calls api.github.com (projects must stay static)
  *.spec.ts                   # header, navigation, how-i-test, experience, projects (incl. case study, view switch and CI pipeline), skills, theme, accessibility (details expanded)
```

**Case studies:** the README case studies mirror `homepageCaseStudy` and `talentOutreachCaseStudy` in `projectsData.ts`; update both together. The `story`, `developer` and `tester` fields exist only on the site. Stories follow the advice employers gave: show HOW a problem was solved, not which tools were used. The Talent Outreach brief (a small recruitment agency) is self-set, not a paid client: never invent a client, savings or market research that didn't happen, and date competitor facts (prices change). The homepage's tester lens shows `sitePipeline` (`Portfolio/pipelineData.ts`) as a dark CI terminal with the live badge instead of bullet points; there is no separate "How this site is tested" section any more. Talent Outreach (formerly "Email Campaign Dashboard", GitHub repo `talent-outreach`, demo https://talent-outreach.onrender.com/) is checked out at `~/email-campaign-react-airtable`; verify its facts on `origin/main` there, since the local branch can lag. Only write facts checked in the project's repo (code, tests, commits), never guessed outcomes. Numbers on the site should be thresholds CI enforces (for example "80%+ coverage"), so they stay true.

**Projects:** `Portfolio` renders `Projects` straight from `projectsData.ts`. Repo links are built with `repoUrl()` from `githubUserName`. The site used to fetch repos from the GitHub API, which is rate-limited to 60 unauthenticated calls per hour per IP and showed an error box to recruiters on shared office networks. Do not reintroduce a runtime API call; the e2e fixture fails if one appears.

## Conventions (follow these)

- **Component layout:** `ComponentName/index.tsx` holds the JSX and `ComponentName/styled.ts` holds the styled-components. Small style-only primitives can live in `index.ts` alone (`ButtonLink`, `SubHeader`, `Section`).
- **Named exports** for components (`export const Footer = () => ...`). Slices default-export their reducer and name-export actions and selectors.
- **Selectors:** each slice defines a private `selectXState` and exports `selectX` helpers built on it.
- **Types:** strict TypeScript, no `any`. Type props with an interface next to the component. Unused function arguments are prefixed with `_`.
- **Theme tokens only:** never hard-code colours or breakpoints.
  - Use `theme.colors.*` (including `dev`, `qa`, `primary` / `onPrimary`, `gradient` / `onGradient`, `terminal`), `theme.breakpoints.mobileMax | tabletVerticalMax | tabletHorizontalMax`, `theme.boxShadow`, `theme.borderRadius` (cards), `theme.borderRadiusSmall` and `theme.fontMono`.
  - Colour roles: cyan (`qa`, also `primary` for links, focus rings, section bars and step numbers) is testing, green (`dev`) is self-taught coding. The `gradient` means "both sides together" and is used sparingly: main buttons, logo border, portrait line, the "+" between the mindset cards, the Test automation card and the contact card edge. No gradient text.
  - Depth comes from surfaces, not glows: light page slate-100 with white cards and slate-300 borders; dark page `#0A0F18`, cards `#151E2E`, borders `#2A3A52`. Text levels: headings, body, secondary (`muted`), all AA on both the page and cards. The theme switch border must keep 3:1 (WCAG 1.4.11).
  - To add a colour, put it in `colorNames` in `theme.ts` and add the key to **both** themes. `themeDark` is typed as `typeof themeLight`, so a missing key is a type error.
  - Text colours must pass WCAG AA (4.5:1). The axe e2e test enforces this.
- Media queries follow this pattern: `@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { ... }`. The site is desktop-first.
- **SVGs** that need colouring are imported as components with `import XIcon from "./x.svg?react"` and styled through `currentColor`. Decorative images use a plain URL import with `<img src>`.
- **styled-components props** that only drive styling must be transient (`$moveToRight`).
- **Content changes** (profile, skills, experience, projects, quality, email, socials) go into the data files marked CONTENT above, not into JSX.
- **Headings:** h1 is the name, h2 is a page section (`SectionHeader`), h3 is a card or group, h4 is a project tile. Sections use `aria-labelledby` pointing to their heading `id`.
- External links: `target="_blank" rel="noreferrer"`. Decorative images: `alt=""`.
- **Privacy:** never put a phone number on the site.
- **Unit tests** live next to the code as `*.test.ts(x)`. Components that use styled-components must be rendered inside `<ThemeProvider theme={themeLight}>`. Mock data modules with `vi.mock` when a test needs specific content.
- **E2E tests** import `test`/`expect` from `e2e/fixtures.ts`, so GitHub is always mocked. Use role-based locators, and add new page behaviour to the e2e suite.
- Formatting: 2 spaces, double quotes, semicolons (Prettier defaults). Run `npm run lint`, `npm run typecheck` and `npm run format` before committing.
- Commits: short, lowercase, imperative English messages, matching the history (e.g. `fix tile background in dark theme`).

## Open items

1. The LinkedIn URL in `profile.ts` comes from the CV (`/in/szymonrojek/`). The old site used `/in/szymon--rojek/`. Confirm which one is live.
2. Waiting on the user (from the recruiter review): the 2012–2022 career years ("Earlier career"), the ISTQB exam date and the exact Microsoft AI course names in `experienceData.ts`.

## Roadmap

- **Phase 1, quick fixes:** done.
- **Phase 2, modernise tooling:** done (Vite 8, React 19, Redux Toolkit 2, react-redux 9, styled-components 6, ESLint 9, Prettier 3).
- **Phase 3, quality:** done (Vitest tests, GitHub Actions CI with deploy to Pages).
- **Phase 4, product:** done:
  - TypeScript migration.
  - OS theme by default.
  - Rewrite for the Software Test Engineer profile.
  - Curated projects.
  - Playwright + axe tests and the CI pipeline shown in the homepage case study.
  - SEO/Open Graph tags, icons and README.
  - Optional, not done: PL/EN i18n.

Do these phases one at a time, in separate commits or PRs. Do not mix tooling changes with feature work.

## Verification checklist

- `npm run typecheck`, `npm run lint`, `npm run test:coverage`, `npm run build` and `npm run test:e2e` all pass with no new warnings.
- Check in the browser in **both light and dark mode** at mobile (≤767px), tablet (≤991px / ≤1199px) and desktop widths.
- Projects: the case study, tiles and "Other projects" render at once, with no request to `api.github.com`. The case study opens from the keyboard and its decisions table stacks into cards on mobile.
- `npm run build && npm run test:lighthouse` passes the budgets, and `npm audit --omit=dev --audit-level=high` is clean.
- The theme follows the OS on a first visit and when the OS theme changes, and a chosen theme survives a page reload and wins over the OS.
