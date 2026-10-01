import type { ProjectCategory } from "../homepageSlice";

export interface FeaturedRepository {
  name: string;
  category: ProjectCategory;
  // Overrides the GitHub description and homepage when they are missing or outdated.
  description?: string;
  demoUrl?: string;
}

export const featuredRepositories: FeaturedRepository[] = [
  {
    name: "df-automation-tests",
    category: "Testing",
    description:
      "End-to-end test suite for a ferry booking site, written with Gherkin, Cucumber and TestCafe across the UK, German and Italian sites.",
  },
  {
    name: "counter-testing",
    category: "Testing",
    description:
      "A React counter covered by Jest snapshot, Enzyme unit and Cypress end-to-end tests.",
    demoUrl: "https://szymonrojek.github.io/counter-testing/",
  },
  {
    name: "homepage",
    category: "Front-end",
    description:
      "This site: React, TypeScript, Redux Toolkit and Redux-Saga, tested with Vitest, Playwright and axe in GitHub Actions.",
    demoUrl: "https://szymonrojek.github.io/homepage/",
  },
  { name: "react-sign-in-up", category: "Front-end" },
  { name: "email-campaign-react-airtable", category: "Front-end" },
  { name: "my-music-website", category: "Front-end" },
];
