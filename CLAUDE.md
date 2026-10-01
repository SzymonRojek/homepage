# CLAUDE.md

Guidance for AI agents (Claude Code) working in this repository.

## Project overview

Personal portfolio homepage of **Szymon Rojek**, Software Test Engineer (data migration, SQL and API testing) who also builds front-end.
Live: https://szymonrojek.github.io/homepage/ (GitHub Pages, `homepage` field in `package.json`).

A single page aimed at recruiters for QA / test automation roles, with these parts in order:

- **Header:** round avatar, name, title, open-to-work pill with relocation note, short bio, key-skill chips, and "Get in touch", LinkedIn and an optional "Download CV" button.
- **Experience:** job and education.
- **Test projects:** curated testing repositories as tiles with readable titles, then front-end work as a compact "Also built" list.
- **How this site is tested:** CI badge and the list of checks.
- **Skills:** four skill-group cards and a tools row.
- **Footer:** "Let's talk" card with email and LinkedIn buttons (the address is not shown), GitHub and LinkedIn icons.

The theme follows the OS setting, including live changes while the page is open, until the visitor uses the light/dark switch. After that, the choice is saved in `localStorage("dark")` and the OS setting is ignored.

The site itself is a showcase: it is built in React + TypeScript and tested with Vitest, Playwright and axe in CI. Keep it that way. New behaviour gets tests.

## Tech stack

- **React 19** + **TypeScript** (strict), mounted with `createRoot` in `src/index.tsx`
- **Vite 8** (`@vitejs/plugin-react`, `vite-plugin-svgr`), `base: "/homepage/"`
- **Redux Toolkit 2** + **react-redux 9** + **redux-saga 1** for state and side effects
- **styled-components 6** with `ThemeProvider` (`themeLight` / `themeDark`) and `styled-normalize`. `DefaultTheme` is typed from `themeLight` in `src/styled.d.ts`.
- **axios 1** for HTTP and **color-alpha** for transparent colours (typed in `src/vite-env.d.ts`)
- **ESLint 9** with typescript-eslint (`eslint.config.js`) and **Prettier 3**
- **Vitest** + **Testing Library** (jsdom): setup in `src/setupTests.ts`, config in the `test` block of `vite.config.ts`
- **Playwright** + **@axe-core/playwright**: `playwright.config.ts`, tests in `e2e/`
- **GitHub Actions** (`.github/workflows/ci.yml`):
  - Every push to `main` or `dev` and every PR to `main` runs lint, typecheck, unit tests with a coverage gate, build and e2e.
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
npm run typecheck  # tsc --noEmit
npm run lint       # ESLint
npm run format     # Prettier --write
npm run deploy     # manual deploy: build, then gh-pages publishes dist/ (CI does this on push to main)
```

> Playwright note: on macOS 12 Playwright cannot install its own Chromium. Local runs therefore use the installed Google Chrome (`channel: "chrome"`), and CI uses the bundled Chromium.

## Architecture

```
src/
  index.tsx                   # createRoot, Redux <Provider> + <App/>
  styled.d.ts                 # DefaultTheme = typeof themeLight
  core/
    store.ts                  # configureStore + saga; RootState, AppDispatch; saves the theme only when the visitor chose it
    hooks.ts                  # useAppDispatch, useAppSelector (use these, not the plain hooks)
    saga.ts                   # root saga -> homepageSaga
    App/                      # ThemeProvider, Normalize, GlobalStyle, theme.ts (palette + themes)
  common/
    themeSlice.ts             # getInitialDarkTheme (saved choice, else OS), hasUserChoice, toggleTheme, systemThemeChanged
    useSystemTheme.ts         # listens to prefers-color-scheme changes (used in App)
    ThemeSwitch/              # toggle button (aria-pressed)
  features/Homepage/
    index.tsx                 # page composition
    profile.ts                # name, title, availability, relocation, bio, highlights, contactText, LinkedIn, cvFile (CONTENT)
    skillsData.ts             # skillGroups, tools (CONTENT)
    experienceData.ts         # jobs, education (CONTENT)
    qualityData.ts            # "How this site is tested" text and links (CONTENT)
    email.ts                  # contact email (CONTENT)
    homepageSlice.ts          # Repository, Project, status: initial | loading | success | error
    homepageSaga.ts           # takeLatest(fetchRepositories) -> getRepositories
    homepageAPI.ts            # GET /users/:user/repos, skip forks, pickFeatured() by the featured list
    repositoryFixture.ts      # createRepository / createProject for tests
    MainHeader/, Skills/, Experience/, Quality/, Footer/
    Portfolio/
      githubUserName.ts       # GitHub user (CONTENT)
      featuredRepositories.ts # which repos to show, category, optional title/description/demoUrl (CONTENT)
      Content/                # switch on status -> Loading | ErrorBox | Repositories (test tiles + Also built)
    Footer/SocialIcons/social.ts  # GitHub + LinkedIn links (CONTENT)
    Section/, ButtonLink/, SubHeader/   # shared styled primitives
e2e/
  fixtures.ts                 # `test` with the GitHub API auto-mocked; mockRepositoriesError
  *.spec.ts                   # header, projects, theme, accessibility
```

**Projects data flow:**

1. `Portfolio` mounts and dispatches `fetchRepositories(githubUserName)`.
2. `homepageSaga` (`takeLatest`) calls `getRepositories`. It fetches the repos, drops forks, then `pickFeatured` keeps and orders the repos in `featuredRepositories` and applies their overrides.
3. The saga dispatches `fetchRepositoriesSuccess(projects)` or `fetchRepositoriesError()`.
4. `Content` renders according to `selectRepositoriesStatus`.

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
- **Privacy:** never put a phone number on the site. The CV download must be a version without it.
- **Unit tests** live next to the code as `*.test.ts(x)`. Components that use styled-components must be rendered inside `<ThemeProvider theme={themeLight}>`. Mock the API module or axios with `vi.mock` / `vi.mocked`. Use the fixtures in `repositoryFixture.ts`.
- **E2E tests** import `test`/`expect` from `e2e/fixtures.ts`, so GitHub is always mocked. Use role-based locators, and add new page behaviour to the e2e suite.
- Formatting: 2 spaces, double quotes, semicolons (Prettier defaults). Run `npm run lint`, `npm run typecheck` and `npm run format` before committing.
- Commits: short, lowercase, imperative English messages, matching the history (e.g. `fix tile background in dark theme`).

## Open items

1. The "Download CV" button stays hidden until a CV **without the phone number** is added to `public/` and `profile.cvFile` is set to its file name.
2. The LinkedIn URL in `profile.ts` comes from the CV (`/in/szymonrojek/`). The old site used `/in/szymon--rojek/`. Confirm which one is live.

## Roadmap

- **Phase 1, quick fixes:** done.
- **Phase 2, modernise tooling:** done (Vite 8, React 19, Redux Toolkit 2, react-redux 9, styled-components 6, axios 1, ESLint 9, Prettier 3).
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
- Projects: the loading spinner shows, then the grouped tiles. The e2e suite covers the error state with a mocked 500.
- The theme follows the OS on a first visit and when the OS theme changes, and a chosen theme survives a page reload and wins over the OS.
