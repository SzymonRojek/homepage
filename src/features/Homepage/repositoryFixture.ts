import type { Repository } from "./homepageSlice";

export const createRepository = (
  overrides: Partial<Repository> = {},
): Repository => ({
  id: 1,
  name: "homepage",
  description: "My homepage",
  html_url: "https://github.com/user/homepage",
  fork: false,
  ...overrides,
});
