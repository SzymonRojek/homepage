# CLAUDE.md

Guidance for AI agents (Claude Code) working in this repository.

## Project overview

Personal portfolio homepage of **Szymon Rojek** (front-end developer).
Live: https://szymonrojek.github.io/homepage/ (GitHub Pages, `homepage` field in `package.json`).

A single page with these parts: a header (avatar, name, bio, "Hire Me" mailto button), three skill lists (Technical skills, Next to learn, Soft skills), a portfolio section that loads the owner's public GitHub repositories, a footer with email and social links, and a light/dark theme switch that is saved in `localStorage`.

## Tech stack

- **React 19**, mounted with `createRoot` in `src/index.jsx`
- **Vite 8** (`@vitejs/plugin-react`, `vite-plugin-svgr`), `base: "/homepage/"`. Plain JavaScript, no TypeScript.
- **Redux Toolkit 2** + **react-redux 9** + **redux-saga 1** for state and side effects
- **styled-components 6** with `ThemeProvider` (`themeLight` / `themeDark`) and `styled-normalize`
- **axios 1** for HTTP and **color-alpha** for transparent colours
- **ESLint 9** (flat config in `eslint.config.js`) and **Prettier 3**
- **gh-pages** for deployment
- **Vitest** + **Testing Library** (jsdom) for tests; setup in `src/setupTests.js`, config in the `test` block of `vite.config.js`
- **GitHub Actions** (`.github/workflows/ci.yml`): lint, test and build on every push and PR to `main`; pushes to `main` deploy `dist/` to the `gh-pages` branch

## Commands

```bash
npm run dev      # dev server on http://localhost:3000/homepage/ (npm start is an alias)
npm run build    # production build into dist/
npm run preview  # serve dist/ locally
npm test         # Vitest in watch mode (npx vitest run for a single run)
npm run lint     # ESLint
npm run format   # Prettier --write
npm run deploy   # manual deploy: build, then gh-pages publishes dist/ (CI does this on push to main)
```

## Architecture

```
src/
  index.jsx                   # createRoot, Redux <Provider> + <App/>
  core/
    store.js                  # configureStore + saga middleware; persists theme to localStorage("dark")
    saga.js                   # root saga -> homepageSaga
    App/
      index.jsx               # ThemeProvider (light/dark from Redux), Normalize, GlobalStyle, <Homepage/>
      GlobalStyle.js
      theme.js                # colorNames palette, common tokens, themeLight, themeDark
  common/
    themeSlice.js             # isDarkTheme, toggleTheme, selectDarkTheme
    ThemeSwitch/              # toggle button
  features/Homepage/
    index.jsx                 # page composition
    skillsData.js             # skills, nextSkills, softSkills (CONTENT)
    email.js                  # contact email (CONTENT)
    homepageSlice.js          # repositories + status: initial | loading | success | error
    homepageSaga.js           # takeLatest(fetchRepositories) -> getRepositories
    homepageAPI.js            # axios GET api.github.com/users/:user/repos (sorted by update, forks filtered out)
    MainHeader/               # avatar, name, bio, Hire Me button
    Skills/                   # reusable <Skills title skills/>
    Portfolio/
      githubUserName.js       # GitHub user (CONTENT)
      Content/                # switch on status -> Loading | ErrorBox | Repositories
    Footer/
      SocialIcons/social.js   # social links (CONTENT)
    ButtonLink/, SubHeader/, Icon/   # shared styled primitives
```

**Portfolio data flow:** `Portfolio` mounts and dispatches `fetchRepositories(githubUserName)` → `homepageSaga` (`takeLatest`) calls `getRepositories` → `fetchRepositoriesSuccess(repos)` or `fetchRepositoriesError()` → `Content` renders according to `selectRepositoriesStatus`.

## Conventions (follow these)

- **Component layout:** `ComponentName/index.jsx` holds the JSX (any file containing JSX must be `.jsx`) and `ComponentName/styled.js` holds the styled-components. Small style-only primitives can live in `index.js` alone (`ButtonLink`, `SubHeader`, `Icon`).
- **Named exports** for components (`export const Footer = () => ...`). Slices default-export their reducer and name-export actions and selectors.
- **Selectors:** each slice defines a private `selectXState` and exports `selectX` helpers built on it.
- **Theme tokens only:** never hard-code colours or breakpoints. Use `theme.colors.*`, `theme.breakpoints.mobileMax | tabletVerticalMax | tabletHorizontalMax`, `theme.boxShadow` and `theme.borderRadiusSmall`. To add a colour, put it in `colorNames` in `theme.js` and add the key to **both** `themeLight` and `themeDark`.
- Media queries follow this pattern: `@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { ... }`. The site is desktop-first.
- **SVGs** that need colouring are imported as components with `import XIcon from "./x.svg?react"` (vite-plugin-svgr) and styled through `currentColor`. Decorative images use a plain URL import (`import url from "./x.svg"`) with `<img src>`.
- **styled-components props** that only drive styling must be transient (`$moveToRight`) so they are not passed to the DOM.
- **Content changes** (skills, email, socials, GitHub user) go into the data files marked CONTENT above, not into JSX.
- External links: `target="_blank" rel="noreferrer"`. Decorative images: `alt=""`.
- Formatting: 2 spaces, double quotes, semicolons (Prettier defaults). Run `npm run lint` and `npm run format` before committing.
- **Tests** live next to the code as `*.test.js` / `*.test.jsx`. Components that use styled-components must be rendered inside `<ThemeProvider theme={themeLight}>`. Mock the API module with `vi.mock` instead of calling GitHub.
- Commits: short, lowercase, imperative English messages, matching the history (e.g. `fix tile background in dark theme`).

## Known issues (to fix)

1. The theme ignores the OS `prefers-color-scheme`. `store.subscribe` writes to `localStorage` on every action, not only on theme changes.
2. `README.md` is CRA boilerplate. The bio in `MainHeader` and `skillsData.js` are outdated.

## Roadmap

- **Phase 1, quick fixes:** done (tile background, dark theme switch border, typos, repo list, accessibility, dead code).
- **Phase 2, modernise tooling:** done (Vite 8, React 19, Redux Toolkit 2, react-redux 9, styled-components 6, axios 1, ESLint 9, Prettier 3).
- **Phase 3, quality:** done (Vitest tests for the slices, saga, API and `Content` states; GitHub Actions CI with deploy to Pages). TypeScript was not adopted (optional).
- **Phase 4, product:** refresh the bio and skills, curate the portfolio (pinned repos, language, stars, live demo link from the repo `homepage` field), add SEO/Open Graph meta tags and a real README, use the OS theme by default, and optionally add PL/EN i18n and a CV download.

Do these phases one at a time, in separate commits or PRs. Do not mix the tooling migration with feature work.

## Verification checklist

- `npm run build` and `npm run lint` succeed with no new warnings, and `npx vitest run` passes.
- Check in the browser in **both light and dark mode** at mobile (≤767px), tablet (≤991px / ≤1199px) and desktop widths.
- Portfolio: the loading spinner shows, then the repo tiles. To check the error state, temporarily break `githubUserName` and confirm the ErrorBox appears.
- The theme choice survives a page reload.
