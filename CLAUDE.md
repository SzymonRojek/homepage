# CLAUDE.md

Guidance for AI agents (Claude Code) working in this repository.

## Project overview

Personal portfolio homepage of **Szymon Rojek** (front-end developer).
Live: https://szymonrojek.github.io/homepage/ (GitHub Pages, `homepage` field in `package.json`).

A single page with these parts: a header (avatar, name, bio, "Hire Me" mailto button), three skill lists (Technical skills, Next to learn, Soft skills), a portfolio section that loads the owner's public GitHub repositories, a footer with email and social links, and a light/dark theme switch that is saved in `localStorage`.

## Tech stack

- **React 17**, mounted with `ReactDOM.render` in `src/index.js`
- **Create React App 4** (`react-scripts` 4.0.3). Plain JavaScript, no TypeScript.
- **Redux Toolkit 1.6** + **react-redux 7** + **redux-saga 1.1** for state and side effects
- **styled-components 5** with `ThemeProvider` (`themeLight` / `themeDark`) and `styled-normalize`
- **axios** for HTTP and **color-alpha** for transparent colours
- **gh-pages** for deployment
- Testing Library + jest-dom are installed, but **no tests exist yet**

> Node note: CRA 4 (webpack 4) fails on Node ≥17 with an OpenSSL error. The `start`/`build` scripts therefore set `NODE_OPTIONS=--openssl-legacy-provider`. Do not remove it until the project has been migrated off CRA (see Roadmap).

## Commands

```bash
npm start        # dev server on http://localhost:3000
npm run build    # production build into build/
npm test         # jest watch mode (no tests yet)
npm run deploy   # predeploy runs build, then gh-pages publishes build/
```

## Architecture

```
src/
  index.js                    # Redux <Provider> + <App/>
  core/
    store.js                  # configureStore + saga middleware; persists theme to localStorage("dark")
    saga.js                   # root saga -> homepageSaga
    App/
      index.js                # ThemeProvider (light/dark from Redux), Normalize, GlobalStyle, <Homepage/>
      GlobalStyle.js
      theme.js                # colorNames palette, common tokens, themeLight, themeDark
  common/
    themeSlice.js             # isDarkTheme, toggleTheme, selectDarkTheme
    ThemeSwitch/              # toggle button
  features/Homepage/
    index.js                  # page composition
    skillsData.js             # skills, nextSkills, softSkills (CONTENT)
    email.js                  # contact email (CONTENT)
    homepageSlice.js          # repositories + status: initial | loading | success | error
    homepageSaga.js           # takeLatest(fetchRepositories) -> delay -> getRepositories
    homepageAPI.js            # axios GET api.github.com/users/:user/repos
    MainHeader/               # avatar, name, bio, Hire Me button
    Skills/                   # reusable <Skills title skills/>
    Portfolio/
      githubUserName.js       # GitHub user (CONTENT)
      Content/                # switch on status -> Loading | ErrorBox | Repositories
    Footer/
      SocialIcons/social.js   # social links (CONTENT)
    ButtonLink/, SubHeader/, Icon/   # shared styled primitives
```

**Portfolio data flow:** `Portfolio` mounts and dispatches `fetchRepositories(githubUserName)` → `homepageSaga` (`takeLatest`) waits 2 s, then calls `getRepositories` → `fetchRepositoriesSuccess(repos)` or `fetchRepositoriesError()` → `Content` renders according to `selectRepositoriesStatus`.

## Conventions (follow these)

- **Component layout:** `ComponentName/index.js` holds the JSX and `ComponentName/styled.js` holds the styled-components. Small style-only primitives can live in `index.js` alone (`ButtonLink`, `SubHeader`, `Icon`).
- **Named exports** for components (`export const Footer = () => ...`). Slices default-export their reducer and name-export actions and selectors.
- **Selectors:** each slice defines a private `selectXState` and exports `selectX` helpers built on it.
- **Theme tokens only:** never hard-code colours or breakpoints. Use `theme.colors.*`, `theme.breakpoints.mobileMax | tabletVerticalMax | tabletHorizontalMax`, `theme.boxShadow` and `theme.borderRadiusSmall`. To add a colour, put it in `colorNames` in `theme.js` and add the key to **both** `themeLight` and `themeDark`.
- Media queries follow this pattern: `@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { ... }`. The site is desktop-first.
- **SVGs** that need colouring are imported with `import { ReactComponent as XIcon } from "./x.svg"` and styled through `currentColor`. Decorative images use `<img src>`.
- **Content changes** (skills, email, socials, GitHub user) go into the data files marked CONTENT above, not into JSX.
- External links: `target="_blank" rel="noreferrer"`. Decorative images: `alt=""`.
- Formatting: 2 spaces, double quotes, semicolons (Prettier defaults).
- Commits: short, lowercase, imperative English messages, matching the history (e.g. `fix tile background in dark theme`).

## Known issues (to fix)

1. The theme ignores the OS `prefers-color-scheme`. `store.subscribe` writes to `localStorage` on every action, not only on theme changes.
2. `README.md` is CRA boilerplate. The bio in `MainHeader` and `skillsData.js` are outdated.

## Roadmap

- **Phase 1, quick fixes:** done (tile background, dark theme switch border, typos, repo list, accessibility, dead code).
- **Phase 2, modernise tooling:** migrate CRA → **Vite** (`@vitejs/plugin-react`, `vite-plugin-svgr` for `ReactComponent` imports, `base: "/homepage/"`, move `index.html` to the root, `build/` → `dist/` in the deploy script). Upgrade React 19 (`createRoot`), Redux Toolkit 2, react-redux 9, styled-components 6 (use transient props such as `$moveToRight`) and axios 1. Add ESLint and Prettier. Remove the `--openssl-legacy-provider` workaround.
- **Phase 3, quality:** Vitest + Testing Library tests for the slices, the saga and the `Content` states. Add a GitHub Actions workflow that builds, tests and deploys to Pages. Optionally adopt TypeScript gradually.
- **Phase 4, product:** refresh the bio and skills, curate the portfolio (pinned repos, language, stars, live demo link from the repo `homepage` field), add SEO/Open Graph meta tags and a real README, use the OS theme by default, and optionally add PL/EN i18n and a CV download.

Do these phases one at a time, in separate commits or PRs. Do not mix the tooling migration with feature work.

## Verification checklist

- `npm run build` succeeds with no new warnings, and `npm test` passes (once tests exist).
- Check in the browser in **both light and dark mode** at mobile (≤767px), tablet (≤991px / ≤1199px) and desktop widths.
- Portfolio: the loading spinner shows, then the repo tiles. To check the error state, temporarily break `githubUserName` and confirm the ErrorBox appears.
- The theme choice survives a page reload.
