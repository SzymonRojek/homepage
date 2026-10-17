// Short lines a group, plain text. Testing first: the profession, data
// and SQL lead. Only skills shown in my work or in the two case studies.
export const testingSkills = [
  "Data migration & ETL",
  "SQL reconciliation (T-SQL, SQL Server)",
  "Defect root-cause analysis",
  "AI-assisted testing",
];

export const automationSkills = [
  "Playwright & TypeScript",
  "API tests: Postman, Newman, supertest",
  "Vitest, Jest, Testing Library",
  "Axe & Lighthouse",
  "Quality gates in GitHub Actions",
];

// Self-taught, as used in the two case studies.
export const programmingSkills = [
  "JavaScript, React, Redux, TypeScript",
  "Node.js & Express",
  "REST APIs",
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
