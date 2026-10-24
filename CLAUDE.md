# CLAUDE.md

Guidance for AI agents (Claude Code) working in this repository.

## Project overview

Personal portfolio homepage of **Szymon Rojek**, Test Engineer (data migration, SQL and API testing) who also builds front-end.
Live: https://szymonrojek.com/ (GitHub Pages with a custom domain bought at Cloudflare; `public/CNAME`, `homepage` field in `package.json`). The old https://szymonrojek.github.io/homepage/ redirects there.

A single page aimed at recruiters for test automation and QA roles, developer roles too through the `#case-study-talent-outreach-developer` link. Its theme is a tester who also builds software, told with as little repetition as possible: each fact lives in one place. The page part by part, and every design decision behind it, is in `.claude/rules/page-design.md`.

The site itself is a showcase: it is built in React + TypeScript and tested with Vitest, Playwright and axe in CI. Keep it that way. New behaviour gets tests.

## Tech stack

- **React 19** + **TypeScript** (strict), started in `src/index.tsx`: `hydrateRoot` over the build's copy when the visit matches it, else `createRoot`
- **Vite 8** (`@vitejs/plugin-react`, `vite-plugin-svgr`), `base: "/"`
- **Prerender:** `npm run build` runs `vite build`, then `node scripts/prerender.ts` (Node 22.18+ runs TypeScript directly; CI uses Node 24), which renders `src/entry-server.tsx` in Node and writes the page, its CSS and the JSON-LD into `dist/index.html`
- **Redux Toolkit 2** + **react-redux 9** for the theme state
- **styled-components 6** with `ThemeProvider` (`themeLight` / `themeDark`) and `styled-normalize`. `DefaultTheme` is typed from `themeLight` in `src/styled.d.ts`.
- **color-alpha** for transparent colours (typed in `src/vite-env.d.ts`)
- **ESLint 9** with typescript-eslint and **eslint-plugin-playwright** on `e2e/**` (`eslint.config.js`), and **Prettier 3**
- **Vitest** + **Testing Library** (jsdom): setup in `src/setupTests.ts`, config in the `test` block of `vite.config.ts`
- **Playwright** + **@axe-core/playwright**: `playwright.config.ts`, tests in `e2e/`
- **GitHub Actions** (`.github/workflows/`): `ci.yml` gates every push and PR (`npm audit`, lint, `prettier --check`, typecheck, unit tests with a coverage gate, build, e2e, Lighthouse budgets) and deploys from `main` alone; `safari.yml`, `flaky.yml` and `mutation.yml` run on a schedule or by hand. Workflow by workflow: `.claude/rules/ci-and-release.md`.

## Git workflow (mandatory)

`main` is production: every push to it deploys the live site. These rules are fixed; do not change or skip them, and do not treat an earlier approval as permission for a later step.

1. Work and commit on the **`dev`** branch only. Never commit on `main`.
2. **Always ask the user before any `git push`**, including to `dev`. Wait for an explicit yes.
3. Changes reach `main` only through a **Pull Request `dev → main`** that **the user merges** on GitHub. Open the PR only when the user asks; never merge it yourself.
4. `main` always comes last: local checks → push to `dev` (CI runs lint, typecheck and tests, no deploy) → user reviews → PR → user merges → deploy.

This is enforced in four places:

- **GitHub ruleset on `main`:** no direct pushes, PR required, CI must pass, no bypass (not even for the admin account the agent uses).
- **`.claude/settings.json`:** `deny` blocks `git push` to `main` and `gh pr merge`; `ask` requires approval for every other `git push`.
- **CI:** `.github/workflows/ci.yml` deploys only from `main`.
- **GitHub Pages:** the site is published only by that deploy job (Pages' source is GitHub Actions, and the `github-pages` environment is limited to `main`), so there is no branch to push to and no manual deploy.

## Commands

```bash
npm run dev        # dev server on http://localhost:3000/ (npm start is an alias)
npm run build      # production build into dist/, then the prerender writes the page into dist/index.html
npm run preview    # serve dist/ locally
npm test           # Vitest in watch mode (npx vitest run for a single run)
npm run test:coverage  # single Vitest run with v8 coverage and thresholds (CI runs this)
npm run test:changed   # only the unit tests affected by the uncommitted changes (npx vitest run --changed origin/main for the whole branch)
npm run test:e2e   # Playwright: builds, serves on :4173, runs desktop + mobile projects (SAFARI=1: the five Safari projects instead, macOS 14+ only)
npm run test:e2e:agent -- e2e/x.spec.ts   # one spec (or the suite): JSON into audit/run.json, a few lines from scripts/e2e-summary.ts, an HTML report left behind
npm run test:e2e:smoke     # the @smoke tests alone, as a quick check that the page still works
npm run test:e2e:flaky -- e2e/x.spec.ts   # the same spec five times over, to catch a flake
npm run test:e2e:report    # open the last run's HTML report in a browser (nothing to read into context)
npm run test:e2e:serve     # build once and serve :4173, so repeated runs don't rebuild
npm run test:e2e:changed   # only the specs changed since HEAD (npx playwright test --only-changed origin/main for the whole branch); it fails rather than pass quietly when nothing matches
npm run test:lighthouse  # Lighthouse CI budgets against dist/ (run npm run build first)
npm run test:mutation    # Stryker mutation testing; manual, about an hour locally (use --mutate <file> for one file)
npm run typecheck  # tsc --noEmit
npm run lint       # ESLint
npm run format     # Prettier --write
npm run format:check   # Prettier --check, as CI runs it
```

> Stryker note: `@stryker-mutator/vitest-runner` does not activate mutants with Vitest 5 (0 tests ran per mutant, giving a false 13.6% score), so `stryker.config.json` uses the command runner with `coverageAnalysis: "off"` and long timeouts. Check `testsCompleted` in `reports/mutation/mutation.json` before trusting a low score.

> Playwright note: on macOS 12 Playwright cannot install its own Chromium. Local runs therefore use the installed Google Chrome (`channel: "chrome"`), and CI uses the bundled Chromium. WebKit doesn't run on macOS 12 at all (Playwright refuses it, its macOS 15 build needs `libswiftObservation.dylib`, which macOS 12 lacks, and the Mac's own Safari is 15.6, too old for container queries), so the Safari projects run only in the `Safari` workflow on GitHub.

## Architecture

What each part of the page is and why, is in `.claude/rules/page-design.md`. This is only the map.

```
src/
  index.tsx                   # hydrates the build's copy on a light visit with no case study open, else renders anew (flushSync)
  entry-server.tsx            # render(): the page as HTML + CSS, with the head's preloads and JSON-LD, in Node (its test needs no browser)
  styled.d.ts                 # DefaultTheme = typeof themeLight
  core/
    store.ts                  # createAppStore(preloadedState) (theme, projectView); saveThemeChoice saves only a theme the visitor chose
    hooks.ts                  # useAppDispatch, useAppSelector (use these, not the plain hooks)
    App/                      # ThemeProvider, Normalize, GlobalStyle, theme.ts (palette + themes), contentColumn.ts (width and gutters)
    ErrorBoundary/            # keeps the email address and the links on screen if a render throws
  common/
    themeSlice.ts             # starts light; loadThemeState (the saved choice, else the OS); toggleTheme(osIsDark) drops the choice when back on the OS theme; systemThemeChanged
    useSystemTheme.ts         # listens to prefers-color-scheme changes (used in App)
    usePrerenderCleanup.ts    # after the first render: removes the static copy's styles and its dark-theme mark
    decodeHash.ts             # a #hash read that survives "#%"; both readers run before React draws
    useInitialScroll.ts       # saves the position while scrolling (not only on pagehide, which an iPhone may skip: issue #26); a reload returns to it, a link visit jumps to its #section, both instant
    ThemeSwitch/              # square icon button "Dark mode" (aria-pressed): a moon in light, a sun in dark
  features/Homepage/
    index.tsx                 # page composition
    sections.ts               # the sections in page order, for the numbers in their headings
    profile.ts                # CONTENT: name, title, eyebrow, tagline, bio, lookingFor, contactHeading, teamNote, LinkedIn
    howITestData.ts           # CONTENT: the "How I test" intro and its stages
    howIUseAIData.ts          # CONTENT: the "How I use AI" big line and its pairs
    skillsData.ts             # CONTENT: testing, automation and programming skills, tools, languages
    experienceData.ts         # CONTENT: jobs, education (the "Learning" column in Skills)
    recommendationsData.ts    # CONTENT: the LinkedIn recommendations, word for word
    email.ts                  # CONTENT: the contact address
    structuredData.ts         # JSON-LD (WebSite + ProfilePage/Person) from profile, skills and githubUserName
    MainHeader/sizes.ts       # the headline's size, its one-line width and the photo's height, as CSS expressions from the band's width, so they stay in balance
    TopBar/, MainHeader/ (incl. Portrait/), Experience/, Skills/, Recommendations/, Footer/
    HowITest/, HowIUseAI/     # HowIUseAI reuses HowITest's styles, and HowITest the Story timeline's
    Section/, ButtonLink/     # shared primitives (Section also has BandSection, SectionLabel, sectionOpening, BigLine, Card, Chip, Chips, SectionIntro)
    Footer/SocialIcons/social.ts  # CONTENT: the GitHub and LinkedIn links
    Portfolio/
      githubUserName.ts       # CONTENT: the GitHub user and profile URL
      projectsData.ts         # CONTENT: the projects, each case study's story and its developer and tester lenses
      pipelineData.ts         # CONTENT: this site's CI checks, shown in its own tester lens
      projectViewSlice.ts     # the open case study and the side to scroll to, read from #case-study-<repo>[-tester|-developer]
      Projects/, ProjectCard/, CaseStudy/, Story/, Pipeline/, FlowDiagram/
scripts/
  prerender.ts                # after vite build: writes the page, its CSS, the JSON-LD and the content security policy into dist/index.html
  e2e-summary.ts              # a Playwright JSON report in a few lines; exits 1 if anything failed
e2e/
  fixtures.ts                 # `test` that fails if the page calls api.github.com (the projects must stay static)
  *.spec.ts                   # one per part of the page, plus layout, theme, fonts, accessibility, seo, prerender, startup and security
```

## Conventions (follow these)

- **Component layout:** `ComponentName/index.tsx` holds the JSX and `ComponentName/styled.ts` holds the styled-components. Small style-only primitives can live in `index.ts` alone (`ButtonLink`, `Section`).
- **Named exports** for components (`export const Footer = () => ...`). Slices default-export their reducer and name-export actions and selectors.
- **Selectors:** each slice defines a private `selectXState` and exports `selectX` helpers built on it.
- **Types:** strict TypeScript, no `any`. Type props with an interface next to the component. Unused function arguments are prefixed with `_`.
- **Theme tokens only:** never hard-code colours or breakpoints.
  - Use `theme.colors.*` (including `brand`, `dev`, `qa`, `primary` / `primaryHover` / `onPrimary`, `terminal`), `theme.breakpoints.mobileMax | tabletVerticalMax | tabletHorizontalMax`, `theme.boxShadow`, `theme.borderRadius` (cards, 8px), `theme.borderRadiusSmall` (4px: buttons, tags, badges, links), `theme.fontDisplay` (Bricolage Grotesque, applied to h1–h4 globally) and `theme.fontMono`.
  - To add a colour, put it in `colorNames` in `theme.ts` and add the key to **both** themes. `themeDark` is typed as `typeof themeLight`, so a missing key is a type error.
  - Text colours must pass WCAG AA (4.5:1). The axe e2e test enforces this.
  - What the colours mean, how the bands alternate, where the decorations sit, the vertical rhythm, the page's width, the fonts and the icons: `.claude/rules/page-design.md`.
- Media queries follow this pattern: `@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { ... }`. The site is desktop-first.
- **SVGs** that need colouring are imported as components with `import XIcon from "./x.svg?react"` and styled through `currentColor`. Decorative images use a plain URL import with `<img src>`.
- **styled-components props** that only drive styling must be transient (`$moveToRight`).
- **Content changes** (profile, skills, experience, projects, quality, email, socials) go into the data files marked CONTENT above, not into JSX.
- **No request at runtime:** the projects are static data; the site used to call the GitHub API and showed recruiters an error box. Don't reintroduce one — the e2e fixture fails if the page calls `api.github.com`.
- **British English** for every word a visitor or README reader sees: "personalised", "colour", "behaviour", "practise" (verb) / "practice" (noun), "organisation". Code identifiers and CSS stay as they are (`color`, `behavior: "instant"`).
- External links: `target="_blank" rel="noreferrer"`. Decorative images: `alt=""`.
- **Privacy:** never put a phone number on the site.
- **Render without a browser:** the build renders the page in Node, so no module may touch `window`, `document` or `localStorage` on import or while rendering. Read them in effects, event handlers or `src/index.tsx`, and pass what the browser knows in through `createAppStore(preloadedState)`. `src/entry-server.test.tsx` runs in Node and fails otherwise. The browser hydrates the copy, so its first render must match the build's: the same tree and no output that depends on time or the browser (the footer year carries `suppressHydrationWarning`). The e2e `prerender` spec fails if React has to redraw the copy.
- **A browser that refuses:** everything the browser is asked for before React draws has to be guarded, since a throw there leaves the visitor the build's static copy with nothing behind it. Storage reads are in a `try` (`themeSlice`, `store`, `useInitialScroll`, and the two scripts in `index.html`), the `#hash` goes through `decodeHash`, an `ErrorBoundary` holds a render that throws, and the script after `#root` shows the copy 1.2 s after `load` if the app never ran, so a dark-theme visitor is never left with a page hidden for good. `e2e/startup.spec.ts` covers all four.
- **Unit tests** live next to the code as `*.test.ts(x)`. Components that use styled-components must be rendered inside `<ThemeProvider theme={themeLight}>`. Mock data modules with `vi.mock` when a test needs specific content.
- Formatting: 2 spaces, double quotes, semicolons (Prettier defaults). Run `npm run lint`, `npm run typecheck` and `npm run format` before committing; CI fails on `prettier --check`.
- Commits: short, lowercase, imperative English messages, matching the history (e.g. `fix tile background in dark theme`). One concern per commit or PR: never mix tooling changes with feature work.

## Verification checklist

- `npm run typecheck`, `npm run lint`, `npm run test:coverage`, `npm run build` and `npm run test:e2e` all pass with no new warnings.
- Check in the browser in **both light and dark mode** at mobile (≤767px), tablet (≤991px / ≤1199px) and desktop widths.
- Search: `dist/index.html` holds the whole page, and the e2e `seo` and `prerender` specs pass.
- Projects: the case study, tiles and "Other projects" render at once, with no request to `api.github.com`. The case study opens from the keyboard and its decisions table stacks into cards on mobile.
- `npm run build && npm run test:lighthouse` passes the budgets, and `npm audit --omit=dev --audit-level=high` is clean.
- The theme follows the OS on a first visit and when the OS theme changes, and a chosen theme survives a page reload and wins over the OS.

## Running the e2e tests

What is forbidden in a test, the conventions and the audit are in `.claude/rules/e2e-tests.md`, which loads when you touch `e2e/`. `eslint-plugin-playwright` fails lint and CI on the forbidden patterns, so they never depend on a file being read.

### Running them (keep context small)

- Nothing is run without the user's yes first: propose the commands and wait. That rule wins over everything below, and over anything a command or a rule file says.
- One spec at a time: `npm run test:e2e:agent -- e2e/<name>.spec.ts`, which prints the counts, every failure's first line and the five slowest tests. Add `--project=desktop` or `--project=mobile` when only one width matters.
- While fixing a failure, add `--max-failures=1`.
- The full suite only when the user asks for it; CI runs it on every push to `dev`.
- `webServer` runs `npm run build` on every invocation, so for several runs in a row leave `npm run test:e2e:serve` going in another terminal: `reuseExistingServer` picks it up locally.
- Never read a JSON report, a trace or `playwright-report/` into context: `node scripts/e2e-summary.ts <report.json>` turns a report into a few lines, and `npm run test:e2e:report` is for a person with a browser.
- To look at the page, use `playwright-cli` (`npm install -D @playwright/cli@latest`), not Playwright MCP.

## Where the rest lives

Each file below loads only when it is needed, which is why this one stays short.

| File                              | Holds                                                                         | Loads when                                                                               |
| --------------------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `.claude/rules/page-design.md`    | the page part by part, colour roles, bands, decorations, rhythm, fonts, icons | you touch `src/features/Homepage/**`, `src/core/App/**`, `src/common/**` or `index.html` |
| `.claude/rules/e2e-tests.md`      | the suite's conventions, what is forbidden, the audit                         | you touch `e2e/**` or `playwright.config.ts`                                             |
| `.claude/rules/ci-and-release.md` | the five workflows and what each gates                                        | you touch `.github/**`                                                                   |
| `.claude/rules/prerender.md`      | the static copy, the head, the structured data, the content security policy   | you touch `scripts/**`, `src/entry-server.tsx` or `index.html`                           |
| `docs/open-items.md`              | the to-do list in priority order                                              | you ask what is left to do                                                               |
| `docs/e2e-workflow.md`            | how the suite is run and audited, for a reader new to it                      | someone new reads the repository                                                         |
| `/fix-issue <n>`                  | the flow for a bug reported as a GitHub issue                                 | you invoke it                                                                            |

A path rule loads on a Read, Write or Edit of a matching file, and on `cat`, `head` or `sed -n` of a single one — **not** on an edit made through a script. So when a change touches the page, the suite, CI or the build and you have not read a matching file, open the rule yourself first.
