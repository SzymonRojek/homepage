import { test as base, type Page } from "@playwright/test";

const repository = (id: number, name: string, extra = {}) => ({
  id,
  name,
  description: `${name} description`,
  html_url: `https://github.com/SzymonRojek/${name}`,
  homepage: null,
  language: "TypeScript",
  stargazers_count: 0,
  fork: false,
  ...extra,
});

export const repositories = [
  repository(1, "my-music-website", { language: "SCSS", stargazers_count: 1 }),
  repository(2, "react-sign-in-up", { stargazers_count: 3 }),
  repository(3, "counter-testing"),
  repository(4, "homepage"),
  repository(5, "df-automation-tests"),
  repository(6, "not-featured"),
  repository(7, "forked-repo", { fork: true }),
];

const reposURL = "https://api.github.com/users/*/repos*";

export const mockRepositories = (page: Page) =>
  page.route(reposURL, (route) => route.fulfill({ json: repositories }));

export const mockRepositoriesError = (page: Page) =>
  page.route(reposURL, (route) => route.fulfill({ status: 500 }));

// Every test gets the GitHub API mocked unless it sets up its own route first.
export const test = base.extend<{ githubMock: void }>({
  githubMock: [
    async ({ page }, use) => {
      await mockRepositories(page);
      await use();
    },
    { auto: true },
  ],
});

export { expect } from "@playwright/test";
