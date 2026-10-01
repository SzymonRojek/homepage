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
    name: "counter-testing",
    category: "Testing",
    title: "React counter: unit to E2E",
    description:
      "A React counter covered by Jest snapshot, Enzyme unit and Cypress end-to-end tests.",
    demoUrl: "https://szymonrojek.github.io/counter-testing/",
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
