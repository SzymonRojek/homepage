# Szymon Rojek: personal homepage

My portfolio site: **[szymonrojek.github.io/homepage](https://szymonrojek.github.io/homepage/)**

[![CI](https://github.com/SzymonRojek/homepage/actions/workflows/ci.yml/badge.svg)](https://github.com/SzymonRojek/homepage/actions/workflows/ci.yml)

I'm a Software Test Engineer working on data migration, SQL and API testing. This site shows my experience and selected projects. It is also a small example of how I build and test front-end code.

## Tech stack

- React 19 and TypeScript (strict), built with Vite
- Redux Toolkit and Redux-Saga for state and the GitHub API call
- styled-components with a light and a dark theme (follows the OS setting until you choose one)
- Vitest and Testing Library for unit and component tests
- Playwright and axe for end-to-end and accessibility tests
- GitHub Actions for CI and deployment to GitHub Pages

## Getting started

Requires Node 20.19+ or 22.12+.

```bash
npm install
npm run dev        # http://localhost:3000/homepage/
```

| Script              | What it does                                      |
| ------------------- | ------------------------------------------------- |
| `npm run dev`       | Start the dev server                              |
| `npm run build`     | Build the site into `dist/`                       |
| `npm run preview`   | Serve the production build                        |
| `npm test`          | Vitest in watch mode (`npx vitest run` runs once) |
| `npm run test:e2e`  | Playwright tests against the production build     |
| `npm run typecheck` | TypeScript check                                  |
| `npm run lint`      | ESLint                                            |
| `npm run format`    | Prettier                                          |

## How it is tested

- **Unit and component tests** (`src/**/*.test.ts(x)`): the Redux slices, the saga, the API module, theme persistence, and every state of the projects section (loading, error and success).
- **End-to-end tests** (`e2e/`): run in desktop and mobile Chrome against the production build. They cover the header and contact links, the curated projects, the error state and the theme switch, including persistence and the OS preference. The GitHub API is always mocked, so the tests are stable.
- **Accessibility**: axe scans the page in light and dark mode. Any serious or critical violation fails the build.

On macOS 12 Playwright can't install its own Chromium, so local runs use the installed Google Chrome. CI uses Playwright's Chromium.

## Deployment

Every push to `main` runs lint, type check, unit tests, the build and the end-to-end tests in GitHub Actions. If they all pass, `dist/` is published to the `gh-pages` branch, which GitHub Pages serves. `npm run deploy` does a manual deploy.

## Content

Text lives in data files, not in components:

- `src/features/Homepage/profile.ts`: name, title, bio, LinkedIn and CV link
- `src/features/Homepage/skillsData.ts`: skill groups and current learning
- `src/features/Homepage/experienceData.ts`: experience and education
- `src/features/Homepage/Portfolio/featuredRepositories.ts`: which GitHub repos to show, with optional description and demo link overrides
- `src/features/Homepage/qualityData.ts`: the "How this site is tested" section
