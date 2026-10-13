// Five short lines a group, plain text. Testing first: the profession, data
// and SQL lead. Only skills shown in my work or in the two case studies.
export const testingSkills = [
  "Data migration & ETL testing",
  "SQL reconciliation (T-SQL, SQL Server)",
  "Test design & traceability",
  "Defect root-cause analysis",
  "AI-assisted testing",
];

export const automationSkills = [
  "Playwright & TypeScript",
  "API tests: Postman, Newman, supertest",
  "Vitest, Jest, Testing Library",
  "axe & Lighthouse",
  "Quality gates in GitHub Actions",
];

// Self-taught, as used in the two case studies.
export const programmingSkills = [
  "TypeScript & React",
  "Node.js & Express",
  "REST APIs",
  "Redux Toolkit",
  "Signed-token auth, Git flow",
];

export const tools = [
  "Azure DevOps",
  "SQL Server Management Studio",
  "Postman",
  "Git",
  "GitHub Actions",
  "VS Code",
  "GitHub Copilot",
  "Claude",
];

export interface Language {
  name: string;
  level: string;
}

export const languages: Language[] = [
  { name: "Polish", level: "Native" },
  { name: "English", level: "Professional working proficiency" },
];
