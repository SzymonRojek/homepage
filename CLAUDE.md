# CLAUDE.md

Guidance for AI agents (Claude Code) working in this repository.

## Project overview

Personal portfolio homepage of **Szymon Rojek**, Software Test Engineer (data migration, SQL and API testing) who also builds front-end.
Live: https://szymonrojek.github.io/homepage/ (GitHub Pages, `homepage` field in `package.json`).

A single page aimed at recruiters for QA / test automation roles, with these parts in order:

- **Header:** round avatar, name, title, open-to-work pill with target roles, a location line (Hove, UK right to work, open to relocation), short bio, key-skill chips, and buttons: "Email me" (primary) and an icon-only LinkedIn link. There is deliberately no CV download.
- **Experience:** job, education, and languages & interests (the guitar site is linked there).
- **Test projects:** projects with a `caseStudy` render first as full-width case-study cards (summary and impact numbers visible; problem, constraints, flow diagrams, decisions table, testing/performance/accessibility/security and lessons inside a `<details>`). Other testing projects render as tiles, then front-end work as a compact "Other projects" list. Static data, no GitHub API call, so the section cannot fail or rate-limit.
- **How this site is tested:** CI badge, the list of checks and a link to the homepage case study.
- **Skills:** one card with eight core-skill chips (data and SQL first) and a tools row.
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
    store.ts                  # configureStore (theme); RootState, AppDispatch; saves the theme only when the visitor chose it
    hooks.ts                  # useAppDispatch, useAppSelector (use these, not the plain hooks)
    App/                      # ThemeProvider, Normalize, GlobalStyle, theme.ts (palette + themes)
  common/
    themeSlice.ts             # getInitialDarkTheme (saved choice, else OS), hasUserChoice, toggleTheme, systemThemeChanged
    useSystemTheme.ts         # listens to prefers-color-scheme changes (used in App)
    ThemeSwitch/              # toggle button (aria-pressed)
  features/Homepage/
    index.tsx                 # page composition
    profile.ts                # name, title, availability, location, bio, highlights, contactText, LinkedIn (CONTENT)
    skillsData.ts             # keySkills (8), tools (CONTENT)
    experienceData.ts         # jobs, education, languages, interests (CONTENT)
    qualityData.ts            # "How this site is tested" text and links (CONTENT)
    email.ts                  # contact email (CONTENT)
    MainHeader/, Skills/, Experience/, Quality/, Footer/
    Portfolio/
      githubUserName.ts       # GitHub user (CONTENT)
      projectsData.ts         # projects: title, repo, language, description, category, optional demoUrl and caseStudy (CONTENT)
      Projects/               # case-study cards, test project tiles + "Other projects" list
      CaseStudy/              # one case study: visible summary + impact, full write-up in <details>
      FlowDiagram/            # data-driven step diagram (ordered list, decorative CSS arrows)
    Footer/SocialIcons/social.ts  # GitHub + LinkedIn links (CONTENT)
    Section/, ButtonLink/, SubHeader/   # shared styled primitives
e2e/
  fixtures.ts                 # `test` that fails if the page calls api.github.com (projects must stay static)
  *.spec.ts                   # header, experience, projects (incl. case study), quality, skills, theme, accessibility (details expanded)
```

**Case studies:** the README case studies mirror `homepageCaseStudy` and `emailCampaignCaseStudy` in `projectsData.ts`; update both together. Only write facts checked in the project's repo (code, tests, commits), never guessed outcomes. Impact numbers should be thresholds CI enforces (for example "80%+ coverage"), so they stay true.

**Projects:** `Portfolio` renders `Projects` straight from `projectsData.ts`. Repo links are built with `repoUrl()` from `githubUserName`. The site used to fetch repos from the GitHub API, which is rate-limited to 60 unauthenticated calls per hour per IP and showed an error box to recruiters on shared office networks. Do not reintroduce a runtime API call; the e2e fixture fails if one appears.

## Conventions (follow these)

- **Component layout:** `ComponentName/index.tsx` holds the JSX and `ComponentName/styled.ts` holds the styled-components. Small style-only primitives can live in `index.ts` alone (`ButtonLink`, `SubHeader`, `Section`).
- **Named exports** for components (`export const Footer = () => ...`). Slices default-export their reducer and name-export actions and selectors.
- **Selectors:** each slice defines a private `selectXState` and exports `selectX` helpers built on it.
- **Types:** strict TypeScript, no `any`. Type props with an interface next to the component. Unused function arguments are prefixed with `_`.
- **Theme tokens only:** never hard-code colours or breakpoints.
  - Use `theme.colors.*`, `theme.breakpoints.mobileMax | tabletVerticalMax | tabletHorizontalMax`, `theme.boxShadow` and `theme.borderRadiusSmall`.
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
  - Playwright + axe tests and the "How this site is tested" section.
  - SEO/Open Graph tags, icons and README.
  - Optional, not done: PL/EN i18n.

Do these phases one at a time, in separate commits or PRs. Do not mix tooling changes with feature work.

## Verification checklist

- `npm run typecheck`, `npm run lint`, `npm run test:coverage`, `npm run build` and `npm run test:e2e` all pass with no new warnings.
- Check in the browser in **both light and dark mode** at mobile (≤767px), tablet (≤991px / ≤1199px) and desktop widths.
- Projects: the case study, tiles and "Other projects" render at once, with no request to `api.github.com`. The case study opens from the keyboard and its decisions table stacks into cards on mobile.
- `npm run build && npm run test:lighthouse` passes the budgets, and `npm audit --omit=dev --audit-level=high` is clean.
- The theme follows the OS on a first visit and when the OS theme changes, and a chosen theme survives a page reload and wins over the OS.
