export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Testing",
    skills: [
      "Functional & regression testing",
      "Integration testing",
      "Database testing",
      "REST API testing",
      "Positive & negative test design",
    ],
  },
  {
    title: "Data & SQL",
    skills: [
      "T-SQL",
      "Complex multi-table joins",
      "Data validation & reconciliation",
      "Test data creation",
      "Stored Procedure analysis",
    ],
  },
  {
    title: "Data migration",
    skills: [
      "Migration testing",
      "Conversion & deconversion testing",
      "Mapping validation",
      "Transformation rule validation",
    ],
  },
  {
    title: "Quality engineering",
    skills: [
      "Requirements analysis",
      "Effort estimation",
      "Defect lifecycle",
      "Root-cause analysis",
      "Traceability",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Azure DevOps",
      "SQL Server Management Studio",
      "Postman",
      "Git & GitHub",
      "VS Code",
      "GitHub Copilot",
    ],
  },
  {
    title: "Automation & code",
    skills: [
      "Playwright & TypeScript (in progress)",
      "Cypress",
      "Jest",
      "JavaScript",
      "React",
      "HTML & CSS",
    ],
  },
];

export const learningSkills = [
  "End-to-end UI automation with Playwright",
  "TypeScript",
  "Maintainable, scalable test frameworks",
  "Agentic, AI-assisted testing",
];
