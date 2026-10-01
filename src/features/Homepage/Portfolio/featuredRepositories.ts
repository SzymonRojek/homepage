import type { ProjectCategory } from "../homepageSlice";

export interface FeaturedRepository {
  name: string;
  category: ProjectCategory;
  // Readable name shown instead of the repository name.
  title?: string;
  // Overrides the GitHub description and homepage when they are missing or outdated.
  description?: string;
  demoUrl?: string;
}

export const featuredRepositories: FeaturedRepository[] = [
  {
    name: "homepage",
    category: "Testing",
    title: "This portfolio, tested end to end",
    description:
      "Built in React and TypeScript and tested like a production app: Vitest unit tests, Playwright end-to-end tests and axe accessibility scans run in GitHub Actions before every deploy.",
  },
  {
    name: "df-automation-tests",
    category: "Testing",
    title: "Ferry booking E2E suite",
    description:
      "End-to-end test suite for a ferry booking site, written with Gherkin, Cucumber and TestCafe across the UK, German and Italian sites.",
  },
  {
    name: "email-campaign-react-airtable",
    category: "Testing",
    title: "Email campaign API tests",
    description:
      "Email campaign CRUD app on the Airtable REST API, with an Express proxy that keeps the API key out of the browser. Every endpoint is covered by Postman API tests for valid, invalid, authorised and unauthorised requests, automated with the Postman Collection Runner.",
  },
  {
    name: "react-sign-in-up",
    category: "Front-end",
    title: "Role-based sign-in app",
    description:
      "React login and registration with admin, editor and user roles.",
  },
  {
    name: "my-music-website",
    category: "Front-end",
    title: "Guitar music website",
    description:
      "My classical guitar site, built with HTML, SASS and JavaScript.",
    demoUrl: "https://szymonrojek.github.io/my-music-website/",
  },
];
