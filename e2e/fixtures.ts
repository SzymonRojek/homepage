import { test as base } from "@playwright/test";

// The projects section is static. Any call to the GitHub API is a regression,
// because unauthenticated calls are rate-limited and would break the page.
export const test = base.extend<{ noGithubApi: void }>({
  noGithubApi: [
    async ({ page }, use) => {
      const githubCalls: string[] = [];
      await page.route("https://api.github.com/**", (route) => {
        githubCalls.push(route.request().url());
        return route.abort();
      });

      await use();

      if (githubCalls.length > 0) {
        throw new Error(
          `Unexpected GitHub API calls: ${githubCalls.join(", ")}`,
        );
      }
    },
    { auto: true },
  ],
});

export { expect } from "@playwright/test";
