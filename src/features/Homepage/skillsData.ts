export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Data migration testing",
    skills: [
      "Conversion & deconversion testing",
      "Trial migrations & cutover validation",
      "Source-to-target reconciliation",
      "Mapping & transformation rule validation",
      "Data quality checks (nulls, duplicates, integrity)",
      "Extract, output file & report validation",
      "Complex T-SQL (SQL Server)",
      "Stored Procedure analysis",
      "Test data creation",
    ],
  },
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
