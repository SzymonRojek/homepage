import type { Project, Repository } from "./homepageSlice";

export const createRepository = (
  overrides: Partial<Repository> = {},
): Repository => ({
  id: 1,
  name: "homepage",
  description: "My homepage",
  html_url: "https://github.com/user/homepage",
  homepage: null,
  language: "TypeScript",
  stargazers_count: 0,
  fork: false,
  ...overrides,
});

export const createProject = (overrides: Partial<Project> = {}): Project => ({
  ...createRepository(),
  category: "Front-end",
  title: "Homepage",
  ...overrides,
});
