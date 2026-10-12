export type MindsetSide = "developer" | "tester";

export interface Mindset {
  side: MindsetSide;
  // Short label shown in the card's corner, e.g. "Build".
  label: string;
  title: string;
  // Where this side comes from, e.g. "My profession: 4 years at Equiniti".
  context: string;
  summary: string;
  points: string[];
  stack: string[];
  // Optional link to where the claim is shown in practice.
  proof?: { text: string; href: string };
}

// Every point must be backed by the experience section or a project's repo.
export const mindsetIntro =
  "Testing is my profession. I also taught myself to code, so I understand what I test and can automate it, and I build my own projects to practise.";

export const mindsets: Mindset[] = [
  {
    side: "tester",
    label: "Protect",
    title: "Tester mindset",
    context: "My profession: 4 years at Equiniti",
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
  {
    side: "developer",
    label: "Build",
    title: "Developer mindset",
    context: "Self-taught: my own projects",
    summary:
      "I learned to code to understand what I test, and I build my own projects to practise.",
    points: [
      "Full-stack TypeScript in my projects: React 19 in the browser, Node.js and Express on the server.",
      "Secure by design: secrets stay on the server, logins use signed tokens and user text is escaped.",
      "A team-style workflow even when working alone: feature branches, pull requests, staging before production.",
      "Accessible UI with light and dark themes on phones and desktops, checked in CI.",
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
];
