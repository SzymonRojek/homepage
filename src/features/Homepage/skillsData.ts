export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Data migration testing",
    skills: [
      "Mapping & transformation rule validation",
      "Conversion & deconversion testing",
      "Trial migrations & cutover validation",
      "Source-to-target reconciliation",
      "Data quality checks (nulls, duplicates, referential integrity)",
      "Extract, output file & report validation",
      "Complex T-SQL & stored procedure analysis (SQL Server)",
    ],
  },
  {
    title: "Software testing",
    skills: [
      "Requirements analysis & traceability",
      "Test case design, prep & execution (positive & negative)",
      "Test data preparation",
      "Functional, integration & regression testing",
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
      "Cypress, TestCafe",
      "Gherkin, Cucumber",
      "Playwright & TypeScript",
      "Jest, Vitest & React Testing Library",
      "Accessibility testing (axe)",
      "HTML & CSS, JavaScript, React",
      "Git, GitHub Actions (CI/CD)",
    ],
  },
  {
    title: "AI-assisted testing",
    skills: [
      "GitHub Copilot for test code & SQL",
      "Prompt engineering for test cases & test data",
      "Human review & CI test gates for AI-generated code",
      "Pilot user of in-house AI agents that write tests from user stories",
    ],
  },
];

export const tools = [
  "Azure DevOps",
  "SQL Server Management Studio",
  "Postman",
  "VS Code",
  "GitHub Copilot",
  "Claude",
];
