import { test as base, type Page } from "@playwright/test";

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

// The theme switch sits in the footer's last line, and more than one spec
// reaches for it.
export const themeSwitch = (page: Page) =>
  page.getByRole("contentinfo").getByRole("button", { name: "Dark mode" });

// Whatever the page throws while it runs, in the order it threw. A spec that
// also wants console errors or DOM changes pushes those into the same array.
export const pageErrors = (page: Page) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  return errors;
};
