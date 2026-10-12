export type MindsetSide = "developer" | "tester";

export interface Mindset {
  side: MindsetSide;
  // Short label shown in the card's corner, e.g. "Build".
  label: string;
  title: string;
  summary: string;
  points: string[];
  stack: string[];
  // Optional link to where the claim is shown in practice.
  proof?: { text: string; href: string };
}

// Every point must be backed by the experience section or a project's repo.
export const mindsetIntro =
  "Most testers read code; I also write it. Code I build is designed to be tested, and the tests are written by someone who knows how the code works.";

export const mindsets: Mindset[] = [
  {
    side: "developer",
    label: "Build",
    title: "Developer mindset",
    summary: "I build full-stack products and ship them through CI/CD.",
    points: [
      "Full-stack TypeScript: React 19 in the browser, Node.js and Express on the server.",
      "Secure by design: secrets stay on the server, logins use signed tokens and user text is escaped.",
      "Team-style delivery: feature branches, pull requests, staging before production.",
      "Fast, accessible UI with light and dark themes on phones and desktops.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Redux Toolkit",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    side: "tester",
    label: "Protect",
    title: "Tester mindset",
    summary: "I find what breaks before users do, and prove that it's fixed.",
    points: [
      "4 years testing financial data migrations and ETL at Equiniti.",
      "SQL reconciliation of source and target data, with defects traced to their root cause.",
      "Automation in CI: Playwright, Vitest, Jest, Postman with Newman, and axe.",
      "Edge cases first: empty selections, more than one page of records, failure responses.",
    ],
    stack: [
      "SQL Server",
      "Playwright",
      "Postman",
      "Vitest",
      "Jest",
      "axe",
      "Azure DevOps",
    ],
    proof: {
      text: "See it in practice: this site's CI pipeline",
      href: "#case-study-homepage",
    },
  },
];
