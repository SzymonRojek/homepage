# CLAUDE.md

Guidance for AI agents (Claude Code) working in this repository.

## Project overview

Personal portfolio homepage of **Szymon Rojek**, Software Test Engineer (data migration, SQL and API testing) who also builds front-end.
Live: https://szymonrojek.com/ (GitHub Pages with a custom domain bought at Cloudflare; `public/CNAME`, `homepage` field in `package.json`). The old https://szymonrojek.github.io/homepage/ redirects there.

A single page aimed at recruiters for test automation and QA roles (developer roles possibly too, through the `#case-study-talent-outreach-developer` link). The theme of the page is a tester who also builds software (the CODE / TEST portrait), told with as little repetition as possible: each fact lives in one place. The design is a "colour block": a deep-green brand band (top bar, hero, contact card) with cream text and a sunny yellow accent, around a light cream page with white cards. Testing is green (`theme.colors.qa`), code is terracotta (`theme.colors.dev`). Headings use Plus Jakarta Sans, body text Inter. Parts in order:

- **Skip link and sticky top bar:** on the deep-green brand band: the name and the job title as a two-line wordmark (back to top; "Software Test Engineer" in yellow, nothing else: the self-taught coding is told in the bio, the portrait and the projects), section links (How I test, Experience, Projects, Skills), a yellow Contact button and the theme switch (a yellow sun knob). Up to `tabletVerticalMax` (991px) the bar shows only the logo and a ☰ button (`aria-expanded`, `aria-controls="site-menu"`); the links, then Contact (left) and the theme switch (right) in one row, move into a green panel under the bar that closes on a link, on Escape (focus back to the button) and on a click outside. Contact and the switch live inside the `<nav>`, once, for both layouts. Focus rings on the green band are yellow.
- **Header (hero):** a full-width deep-green band (outside the page `Container`) with a soft yellow ring in the corner: the open-to-work status (yellow, with a gently pulsing dot), the tagline as the big headline, in my own words ("A number can match and still be wrong."), with a hand-drawn yellow underline under `profile.taglineHighlight`, static (no drawing animation), a two-sentence bio, three label/value pairs from `profile.location` (Based in: Hove, UK · Right to work: UK, full · Relocation: Open) split by thin lines, so HR sees them. The name is the h1, visually hidden: the top bar shows it. On the right the split portrait (square corners) stands on the band's bottom edge: the colour photo with a duotone copy on top (SVG filter `#portrait-duotone`: black to the deep brand green, white to cream), cut at a yellow rail that swells into a rounded grip with two grooves (one shape, one shared shadow), and a light green shade at the top. The irises stay blue on the duotone side: a third copy through `#portrait-irises` (keeps pixels less red than the skin, tints them blue) masked to the two eyes at 35.5%/48% and 63.5%/48.2% of the frame. No Code/Test labels. It starts with the line at the left edge, all in colour, with the "100% tester" caption and a quiet "DRAG" hint beside the grip (`aria-hidden`), which goes as soon as the line moves (and comes back if a touch turns into a page scroll). The picture is one image (`role="img"`, my name); the whole photo is the drag area (pointer events: a mouse moves the line at once, a finger once it moves sideways; `touch-action: pan-y` keeps vertical swipes scrolling, and a scroll puts the line back), and a hidden range input keeps the arrow keys and screen readers working, so it is a slider, not a link. Let go after a drag of 2% or more and the line slides on to the end in the direction of the drag (350 ms ease-out; at once with reduced motion), so it always rests at an edge after a drag. At either edge a yellow caption from `profile.portraitCaptions` shows: "100% tester" (all colour, the start) or "…who also codes" (all black and white). The hero has no buttons: contact lives in the top bar and the footer. There is deliberately no CV download.
- **What colleagues say:** the first section under the hero, with its h2 visually hidden (the big quote is the visible heading): one sentence of Jim's recommendation large as a headline (`headline`, with a yellow stroke under "work with him"), then the three LinkedIn recommendations (`recommendationsData.ts`) as plain text in columns, no cards, quoted word for word; a cut is marked with "…", nothing is reworded. Name, role, how we worked together and the month, plus a "Read them on LinkedIn" link to the originals. Only add quotes the user has pasted from LinkedIn.
- **How I test at work:** professional evidence before the side projects: an intro, then my story in my own words on a full-width deep-green band ("Beyond the obvious bugs", "obvious" in yellow, with my last sentence as a yellow punchline on the left and the story on the right: bugs in stored procedures, reading code against the requirements and mapping documents, calls with the developer), then three steps side by side under large green numbers 01–03 (rules and test design, SQL reconciliation with business logic and stored procedures, root cause; AI use lives in Experience) and "Why it matters". Clients, systems and figures stay confidential: don't add internal system names unless the user confirms it's allowed.
- **Projects:** two case-study cards side by side (name, one sentence, short facts, "Read the case study", "Live demo" and "Code"). All closed by default; one opens below the cards at a time (both are always in the page, a closed one hidden with CSS rather than the `hidden` attribute, so search engines and AI tools that read the HTML find them), the address becomes `#case-study-<repo>`, and the page scrolls to it and moves focus to it. There is no view switch: a case study always shows its numbered "How I solved it" story (Brief → Research as a "what exists vs my design" table → Solution → Value, with an honest next step), then "How I proved it works" (automation view) and "How I built it" (developer view) side by side, tester first, and problem, constraints, flow diagrams, decisions table, testing/performance/accessibility/security and lessons inside a `<details>`. Each column has an id (`#case-study-<repo>-tester` / `-developer`): a CV link opens the case study there. Testing projects without a case study would render as tiles and `category: "Other"` projects as an "Other projects" list; there are none now. Static data, no GitHub API call, so the section cannot fail or rate-limit.
- **Experience:** the job only, right after "How I test at work", so the professional work reads as one block. No card: period, company and sector on the left, the role and four points with yellow dots on the right. The points say only what "How I test" doesn't (scope incl. conversion and deconversion, estimates and the Agile team, Copilot and agentic procedures, the in-house AI agent pilot); mapping, SQL and root cause live in "How I test". Periods end in "– now".
- **Skills:** three short plain-text lists, no tags and no cards: "Testing & data" (green), "Test automation" (brand green) and "Programming" (terracotta, self-taught), five items each with thin rules, then a tools line and a languages line. Only skills shown at work or in the two case studies (Cypress, TanStack Query and Tailwind were dropped as unconfirmed; add them back only if the user confirms).
- **Still learning** (was "Education & certifications"): its own section, last in `<main>` as on a UK CV. ISTQB Foundation as "Next up" on a deep-green card (`next: true`), the other courses in a two-column grid with a green year, newest first by when they started (2026, 2025, 2023 – now for LinkedIn Learning, 2022). LinkedIn Learning is one item (too many courses to list; the certificates are deliberately not on the LinkedIn profile, so never point to them). The degree was removed on purpose. Not in the top bar, to keep it short. Interests were removed on purpose.
- **Footer:** a short letter, not a contact form: a full-width deep-green band (outside the page `Container`, content in `contentColumn`), no box: my photo in a yellow-ringed circle, "Thanks for reading this far.", my note about teamwork in my own words (`profile.teamNote`), one invite (`profile.contactInvite`) and a single "Email me" button (the address is not shown), with the soft yellow ring in the bottom-left corner of the band; the photo sits left of the text and button, the pair centred with equal space on both sides; the © line below is not centred. No roles or location (the hero has them) and no LinkedIn button: LinkedIn and GitHub are the icons in the line underneath, with "© year name".

- **Search and sharing:** the build prerenders the whole page into `dist/index.html` (light theme, case studies closed), so search engines and AI tools that don't run JavaScript read it; on a light visit without a case-study address React takes that copy over as it is (`hydrateRoot`), so the photo is drawn once; a dark theme or a case-study address draws the page anew (`createRoot`), and a dark theme keeps the copy hidden until then (`body[data-prerendered]` in `index.html`). The head has `lang="en-GB"`, a description of at most 160 characters, canonical, Open Graph and X tags, and JSON-LD (`WebSite` + `ProfilePage` with a `Person`, built from the content files by `structuredData.ts` and written into the head by the prerender, so it is in the build only). `public/og-image.jpg` is a 1200×630 share card (name, title, tagline and photo on the green band): redraw it when those change, then refresh LinkedIn's cached preview with the [Post Inspector](https://www.linkedin.com/post-inspector/). `public/szymon-rojek.jpg` is the photo in the structured data. `public/sitemap.xml` lists the page and `robots.txt` points to it.

The theme follows the OS setting, including live changes while the page is open, until the visitor uses the light/dark switch. After that, the choice is saved in `localStorage("dark")` and the OS setting is ignored.

The site itself is a showcase: it is built in React + TypeScript and tested with Vitest, Playwright and axe in CI. Keep it that way. New behaviour gets tests.

## Tech stack

- **React 19** + **TypeScript** (strict), mounted with `createRoot` in `src/index.tsx`
- **Vite 8** (`@vitejs/plugin-react`, `vite-plugin-svgr`), `base: "/"`
- **Prerender:** `npm run build` runs `vite build`, then `node scripts/prerender.ts` (Node 22.18+ runs TypeScript directly; CI uses Node 24), which renders `src/entry-server.tsx` in Node and writes the page, its CSS and the JSON-LD into `dist/index.html`
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
npm run dev        # dev server on http://localhost:3000/ (npm start is an alias)
npm run build      # production build into dist/, then the prerender writes the page into dist/index.html
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
  index.tsx                   # reads the theme and the #case-study address into createAppStore; hydrates the static copy when the visit looks like it (light, no case study open), else renders <App/> anew at once (flushSync)
  entry-server.tsx            # render(): the page as HTML + CSS, plus the image preloads and JSON-LD for the head, in Node, light with case studies closed, for scripts/prerender.ts (its test runs without a browser)
  styled.d.ts                 # DefaultTheme = typeof themeLight
  core/
    store.ts                  # createAppStore(preloadedState) (theme, projectView); RootState, AppStore, AppDispatch; saveThemeChoice saves the theme only when the visitor chose it
    hooks.ts                  # useAppDispatch, useAppSelector (use these, not the plain hooks)
    App/                      # ThemeProvider, Normalize, GlobalStyle, theme.ts (palette + themes), contentColumn.ts (shared page width and gutters)
  common/
    themeSlice.ts             # starts light; loadThemeState (read on load: getInitialDarkTheme = saved choice, else OS; hasUserChoice), toggleTheme, systemThemeChanged
    useSystemTheme.ts         # listens to prefers-color-scheme changes (used in App)
    usePrerenderCleanup.ts    # after the first render: removes the static copy's styles and its dark-theme mark
    useInitialScroll.ts       # after render: a reload returns to the saved position, a link visit jumps to its #section; both instant, never smooth
    ThemeSwitch/              # toggle button (aria-pressed)
  features/Homepage/
    index.tsx                 # page composition
    profile.ts                # name, title, tagline, teamNote, contactInvite, taglineHighlight, availability, basedIn, location, bio, LinkedIn (CONTENT)
    structuredData.ts         # JSON-LD for search engines (WebSite + ProfilePage/Person), built from profile, skills and githubUserName
    howITestData.ts           # "How I test at work": intro, highlight, steps, why it matters (CONTENT)
    skillsData.ts             # testingSkills, automationSkills, programmingSkills, tools, languages (CONTENT)
    experienceData.ts         # jobs, education ("Still learning", newest first) (CONTENT)
    email.ts                  # contact email (CONTENT)
    TopBar/                   # sticky bar: logo, section links (a menu on phones and tablets), Contact, ThemeSwitch
    recommendationsData.ts    # LinkedIn recommendations, word for word (CONTENT)
    Recommendations/          # "What colleagues say": a big quote, the full recommendations in columns, a link to LinkedIn
    MainHeader/SplitPortrait/ # the two-sided photo in the hero, with a slider that moves the line
    HowITest/                 # the "How I test at work" section (reuses the Story timeline styles)
    MainHeader/, Skills/, Experience/, Education/, Footer/
    Portfolio/
      githubUserName.ts       # GitHub user and profile URL (CONTENT)
      projectsData.ts         # projects: title, repo, language, description, category, optional demoUrl and caseStudy with developer/tester lenses (CONTENT)
      pipelineData.ts         # this site's CI checks and links, shown in the homepage tester view (CONTENT)
      Story/                  # Brief / Research / Solution / Value timeline of a case study
      Pipeline/               # CI terminal: checks, result line, CI badge, link to the e2e tests
      projectViewSlice.ts     # the open case study and the side to scroll to, both read from #case-study-<repo>[-tester|-developer] (on load by index.tsx); set by the cards and by address changes
      Projects/               # case-study cards, the one open case study with its view switch, test project tiles + "Other projects" list
      ProjectCard/            # one card: name, sentence, facts, open/close button (aria-expanded), demo and code links
      CaseStudy/              # one case study: story (or summary), developer/tester columns, full write-up in <details>; takes focus when opened (tabIndex -1)
      FlowDiagram/            # data-driven step diagram (ordered list, decorative CSS arrows)
    Footer/SocialIcons/social.ts  # GitHub + LinkedIn links (CONTENT)
    Section/, ButtonLink/, SubHeader/   # shared styled primitives (Section also has Card, Chip, Chips, SectionIntro)
scripts/
  prerender.ts                # after vite build: renders entry-server in Node, writes the page, its CSS and the JSON-LD into dist/index.html
e2e/
  fixtures.ts                 # `test` that fails if the page calls api.github.com (projects must stay static)
  *.spec.ts                   # header (incl. the portrait slider), navigation, layout (one content edge at several widths), recommendations, how-i-test, experience, education, projects (incl. case study and CI pipeline), skills, theme, accessibility (details expanded), seo (head, share card, structured data, sitemap), prerender (the page without JavaScript)
```

**Case studies:** the README case studies mirror `homepageCaseStudy` and `talentOutreachCaseStudy` in `projectsData.ts`; update both together. The `story`, `developer` and `tester` fields exist only on the site. Stories follow the advice employers gave: show HOW a problem was solved, not which tools were used. The Talent Outreach brief (a small recruitment agency) is self-set, not a paid client: never invent a client, savings or market research that didn't happen, and date competitor facts (prices change). The homepage's tester lens shows `sitePipeline` (`Portfolio/pipelineData.ts`) as a dark CI terminal with the live badge instead of bullet points; there is no separate "How this site is tested" section any more. Talent Outreach (formerly "Email Campaign Dashboard", GitHub repo `talent-outreach`, demo https://talent-outreach.onrender.com/) is checked out at `~/email-campaign-react-airtable`; verify its facts on `origin/main` there, since the local branch can lag. Only write facts checked in the project's repo (code, tests, commits), never guessed outcomes. Numbers on the site should be thresholds CI enforces (for example "80%+ coverage"), so they stay true.

**Projects:** `Portfolio` renders `Projects` straight from `projectsData.ts`. Repo links are built with `repoUrl()` from `githubUserName`. The site used to fetch repos from the GitHub API, which is rate-limited to 60 unauthenticated calls per hour per IP and showed an error box to recruiters on shared office networks. Do not reintroduce a runtime API call; the e2e fixture fails if one appears.

## Conventions (follow these)

- **Component layout:** `ComponentName/index.tsx` holds the JSX and `ComponentName/styled.ts` holds the styled-components. Small style-only primitives can live in `index.ts` alone (`ButtonLink`, `SubHeader`, `Section`).
- **Named exports** for components (`export const Footer = () => ...`). Slices default-export their reducer and name-export actions and selectors.
- **Selectors:** each slice defines a private `selectXState` and exports `selectX` helpers built on it.
- **Types:** strict TypeScript, no `any`. Type props with an interface next to the component. Unused function arguments are prefixed with `_`.
- **Theme tokens only:** never hard-code colours or breakpoints.
  - Use `theme.colors.*` (including `brand`, `dev`, `qa`, `primary` / `primaryHover` / `onPrimary`, `terminal`), `theme.breakpoints.mobileMax | tabletVerticalMax | tabletHorizontalMax`, `theme.boxShadow`, `theme.borderRadius` (cards, 8px), `theme.borderRadiusSmall` (4px: buttons, tags, badges, links), `theme.fontDisplay` (Plus Jakarta Sans, applied to h1–h4 globally) and `theme.fontMono`.
  - Colour roles: the brand band (`theme.colors.brand`: deep green, cream text, yellow accent) is used for the top bar, the hero and the contact card only. On the cream page, `primary` (deep green in light, yellow in dark) is for buttons and links; green (`qa`) is testing, terracotta (`dev`) is code; the Test automation card edge is half and half because it is both. No glows or gradient text.
  - Sections open with a short yellow bar above the heading (`SectionHeader`). Cards are white on cream with a thin `#E6DAC3` border and small corners (8px); buttons and tags have 4px corners, not pills. No thick coloured card edges: the side colour lives in badges, ticks and titles. Circles stay circles (logo, status dot, story numbers), and the theme switch keeps its rounded track. Dark theme: page `#0B1513`, cards `#12201D`, the brand band stays deep green. Every text pair passes AA (ratios in `theme.ts`), and the theme switch border keeps 3:1 (WCAG 1.4.11). Monospace only for tiny labels.
  - To add a colour, put it in `colorNames` in `theme.ts` and add the key to **both** themes. `themeDark` is typed as `typeof themeLight`, so a missing key is a type error.
  - Text colours must pass WCAG AA (4.5:1). The axe e2e test enforces this.
- Media queries follow this pattern: `@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { ... }`. The site is desktop-first.
- **Page width and gutters:** one content column for everything, from `theme.layout`: at most 1160px of content, centred, with side gutters of 48px on desktop, 32px up to `tabletHorizontalMax` and 16px on phones. Use the `contentColumn` css helper (`core/App/contentColumn.ts`) for anything that must line up with the page edge (the page `Container`, the top bar row and its menu panel, the hero content). Full-width bands (top bar, hero) keep their background edge to edge and put `contentColumn` on an inner element; never add their own side padding. The hero photo ends on the right edge of the column (centred on phones).
- **SVGs** that need colouring are imported as components with `import XIcon from "./x.svg?react"` and styled through `currentColor`. Decorative images use a plain URL import with `<img src>`.
- **styled-components props** that only drive styling must be transient (`$moveToRight`).
- **Content changes** (profile, skills, experience, projects, quality, email, socials) go into the data files marked CONTENT above, not into JSX.
- **British English** for every word a visitor or README reader sees: "personalised", "colour", "behaviour", "practise" (verb) / "practice" (noun), "organisation". Code identifiers and CSS stay as they are (`color`, `behavior: "instant"`).
- **Fonts:** self-hosted woff2 files in `public/fonts/` (Inter 400/600/700/900 and Plus Jakarta Sans 700/800, latin and latin-ext, from @fontsource, OFL). The `@font-face` rules live in `index.html` and the five first-screen files are preloaded there, so the page paints once in its real fonts: no text reflow and no jumping photo on load. Preload `href`s start with `/fonts/` (Vite adds the base); `url()`s in the inline style use `%BASE_URL%`. Don't import fonts from JavaScript again.
- **Icons** in `public/`: `favicon.svg` (the green "SR" initials in a yellow circle, as in the top bar), `favicon.png` (32px fallback), `apple-touch-icon.png` (180px) and `icon-192.png` / `icon-512.png` for `manifest.json` (`icon-192.png` is also a `rel="icon"`, since Google Search doesn't use SVG favicons), all generated from the same design; keep them in step with the logo.
- **Headings:** h1 is the name, h2 is a page section (`SectionHeader`), h3 is a card or group, h4 is a project tile. Sections use `aria-labelledby` pointing to their heading `id`.
- External links: `target="_blank" rel="noreferrer"`. Decorative images: `alt=""`.
- **Privacy:** never put a phone number on the site.
- **Render without a browser:** the build renders the page in Node, so no module may touch `window`, `document` or `localStorage` on import or while rendering. Read them in effects, event handlers or `src/index.tsx`, and pass what the browser knows in through `createAppStore(preloadedState)`. `src/entry-server.test.tsx` runs in Node and fails otherwise. The browser hydrates the copy, so its first render must match the build's: the same tree and no output that depends on time or the browser (the footer year carries `suppressHydrationWarning`). The e2e `prerender` spec fails if React has to redraw the copy.
- **Unit tests** live next to the code as `*.test.ts(x)`. Components that use styled-components must be rendered inside `<ThemeProvider theme={themeLight}>`. Mock data modules with `vi.mock` when a test needs specific content.
- **E2E tests** import `test`/`expect` from `e2e/fixtures.ts`, so GitHub is always mocked. Use role-based locators, and add new page behaviour to the e2e suite.
- Formatting: 2 spaces, double quotes, semicolons (Prettier defaults). Run `npm run lint`, `npm run typecheck` and `npm run format` before committing.
- Commits: short, lowercase, imperative English messages, matching the history (e.g. `fix tile background in dark theme`).

## Open items

1. Waiting on the user (from the recruiter review): the 2012–2022 career years ("Earlier career"), the ISTQB exam date and the exact Microsoft AI course names in `experienceData.ts`.
2. Search engines, after the SEO release (PR #15, live on 2026-10-13):
   - **Bing Webmaster Tools:** URL Inspection failed with "We were not able to connect to the DNS" because the domain is new (registered 2026-10-13). The DNS was checked and resolves correctly on public resolvers, so nothing needs fixing. Try URL Inspection again from 2026-10-15; if it still fails after 2026-10-16, contact Bing Webmaster support with those two facts. The site is imported, and the sitemap stays submitted.
   - **Google Search Console:** around 2026-10-20, check that the home page is indexed and that Enhancements → Profile page shows no errors.
   - **LinkedIn:** refresh the preview of `https://szymonrojek.com/` with the [Post Inspector](https://www.linkedin.com/post-inspector/), and add the site to the profile's Website field and Featured section, if not done yet.
   - **GitHub:** set the profile's Website field to `https://szymonrojek.com`, set the `homepage` repo's website and replace its outdated description ("…Redux & Saga…"), and link the site from the profile README and the talent-outreach README footer. Waiting on the user's yes.

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
- Search: `dist/index.html` holds the whole page, and the e2e `seo` and `prerender` specs pass.
- Projects: the case study, tiles and "Other projects" render at once, with no request to `api.github.com`. The case study opens from the keyboard and its decisions table stacks into cards on mobile.
- `npm run build && npm run test:lighthouse` passes the budgets, and `npm audit --omit=dev --audit-level=high` is clean.
- The theme follows the OS on a first visit and when the OS theme changes, and a chosen theme survives a page reload and wins over the OS.
