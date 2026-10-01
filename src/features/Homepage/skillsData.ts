export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Testing & QA",
    skills: [
      "Functional & regression",
      "Integration & database",
      "Positive & negative test design",
      "Requirements analysis & traceability",
      "Defect lifecycle & root-cause analysis",
      "Agile delivery",
    ],
  },
  {
    title: "SQL & data",
    skills: [
      "T-SQL & multi-table joins",
      "Data validation & reconciliation",
      "Migration & conversion",
      "Mapping & transformation rules",
      "Stored Procedure analysis",
      "Test data creation",
    ],
  },
  {
    title: "API testing",
    skills: [
      "REST APIs",
      "Postman collections & Collection Runner",
      "Authorised & unauthorised requests",
      "Response and status validation",
    ],
  },
  {
    title: "Automation & code",
    skills: [
      "JavaScript",
      "Cypress",
      "Jest",
      "TestCafe & Cucumber",
      "Playwright & TypeScript (learning)",
      "Git & GitHub Actions",
      "React, HTML & CSS",
    ],
  },
];

export const tools = [
  "Azure DevOps",
  "SQL Server Management Studio",
  "Postman",
  "VS Code",
  "GitHub Copilot",
];
