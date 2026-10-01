# Szymon Rojek: personal homepage

**Live site: [szymonrojek.github.io/homepage](https://szymonrojek.github.io/homepage/)**

[![CI](https://github.com/SzymonRojek/homepage/actions/workflows/ci.yml/badge.svg)](https://github.com/SzymonRojek/homepage/actions/workflows/ci.yml)

I'm a Software Test Engineer with four years' experience in data migration, SQL and API testing. This site presents my skills, experience and selected testing and front-end projects. It's also a working example of how I build and test front-end code: every change is type-checked, unit-tested, end-to-end tested and scanned for accessibility before it goes live.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/screenshot-dark.png" />
  <img src="docs/screenshot-light.png" alt="Screenshot of the homepage header and core skills" />
</picture>

## Features

- **Recruiter-first header**: open-to-work status, a short bio and key skills visible without scrolling
- **Experience and test projects up front**, with front-end work as a short "Also built" list
- **Projects loaded live from the GitHub API**, with readable titles, language, stars and demo links
- **Light and dark theme** that follows the operating system, including live changes, until the visitor picks one. That choice is then remembered.
- **Accessible and responsive**: semantic headings and landmarks, WCAG AA colour contrast, tested on desktop and mobile
- **"How this site is tested"** section with the live CI status

## Tech stack

| Area      | Tools                                            |
| --------- | ------------------------------------------------ |
| Front-end | React 19, TypeScript (strict), Vite              |
| State     | Redux Toolkit, Redux-Saga                        |
| Styling   | styled-components with light and dark themes     |
| Testing   | Vitest, Testing Library, Playwright, axe-core    |
| Quality   | ESLint, Prettier, GitHub Actions                 |
| Hosting   | GitHub Pages, deployed automatically from `main` |

## How it is tested

| Layer         | What is covered                                                                                                                                                               |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unit          | Redux slices, the saga, the GitHub API module and project selection, theme persistence and the OS theme listener (`src/**/*.test.ts`)                                         |
| Component     | Every state of the projects section, the theme switch and the header's optional CV button (`*.test.tsx`)                                                                      |
| End-to-end    | Playwright in desktop and mobile Chrome against the production build: header and contact links, experience, projects, error state, skills, theme switch and OS theme (`e2e/`) |
| Accessibility | axe scans in light and dark mode. Any serious or critical violation fails the build.                                                                                          |
| Coverage      | v8 coverage with minimum thresholds. CI fails if coverage drops below them.                                                                                                   |

The GitHub API is mocked in all tests, so they are fast and stable. End-to-end tests are grouped by page section, use named steps for longer scenarios, and are tagged `@desktop` or `@mobile` when they apply to one viewport only.

## Getting started

Requires Node 20.19+ or 22.12+.

```bash
npm install
npm run dev          # http://localhost:3000/homepage/
```

| Script                  | What it does                           |
| ----------------------- | -------------------------------------- |
| `npm run dev`           | Start the dev server                   |
| `npm run build`         | Build the site into `dist/`            |
| `npm run preview`       | Serve the production build locally     |
| `npm test`              | Unit and component tests in watch mode |
| `npm run test:coverage` | Single test run with a coverage report |
| `npm run test:e2e`      | Playwright end-to-end tests            |
| `npm run typecheck`     | TypeScript check                       |
| `npm run lint`          | ESLint                                 |

## CI and deployment

Work happens on the `dev` branch. Every push to `dev` or `main` and every pull request runs lint, type check, unit tests with a coverage threshold, the build and the end-to-end tests in [GitHub Actions](.github/workflows/ci.yml). `main` is production and is protected: changes reach it only through a pull request from `dev` with passing checks, and only `main` deploys to GitHub Pages.

## Editing content

All text lives in data files, not in components:

| File                                                      | Content                                                                       |
| --------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `src/features/Homepage/profile.ts`                        | Name, title, open-to-work status, bio, key skills, contact text, LinkedIn, CV |
| `src/features/Homepage/skillsData.ts`                     | Skill groups and tools                                                        |
| `src/features/Homepage/experienceData.ts`                 | Experience and education                                                      |
| `src/features/Homepage/Portfolio/featuredRepositories.ts` | Which repositories to show, readable titles and overrides                     |
| `src/features/Homepage/qualityData.ts`                    | The "How this site is tested" section                                         |
