import { githubUserName } from "./githubUserName";

export type ProjectCategory = "Testing" | "Other";

export interface Project {
  title: string;
  // GitHub repository name under githubUserName.
  repo: string;
  language: string;
  description: string;
  category: ProjectCategory;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "This portfolio, tested end to end",
    repo: "homepage",
    language: "TypeScript",
    category: "Testing",
    description:
      "Built in React and TypeScript and tested like a production app: Vitest unit tests, Playwright end-to-end tests and axe accessibility scans run in GitHub Actions before every deploy.",
  },
  {
    title: "Ferry booking E2E suite",
    repo: "df-automation-tests",
    language: "JavaScript",
    category: "Testing",
    description:
      "End-to-end test suite for a ferry booking site, written with Gherkin, Cucumber and TestCafe across the UK, German and Italian sites.",
  },
  {
    title: "Email campaign API tests",
    repo: "email-campaign-react-airtable",
    language: "JavaScript",
    category: "Testing",
    description:
      "Email campaign CRUD app on the Airtable REST API, with an Express proxy that keeps the API key out of the browser. Every endpoint is covered by Postman API tests for valid, invalid, authorised and unauthorised requests, automated with the Postman Collection Runner.",
  },
  {
    title: "Role-based sign-in app",
    repo: "react-sign-in-up",
    language: "JavaScript",
    category: "Other",
    description:
      "React login and registration with admin, editor and user roles.",
  },
];

export const repoUrl = (repo: string) =>
  `https://github.com/${githubUserName}/${repo}`;
