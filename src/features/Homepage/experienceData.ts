export interface Job {
  role: string;
  company: string;
  details: string;
  period: string;
  groups: { title: string; points: string[] }[];
}

export const jobs: Job[] = [
  {
    role: "Software Test Engineer",
    company: "Equiniti, Worthing",
    details: "Financial services and shareholder registry",
    period: "Sep 2022 – present",
    groups: [
      {
        title: "Data migration and SQL testing",
        points: [
          "Turn requirements, mapping documents, transformation rules and database schemas into traceable test scenarios and scripts.",
          "Validate financial and shareholder data across migration, conversion and deconversion workstreams, comparing databases, extracts, output files and reconciliation reports.",
          "Write complex SQL queries to surface discrepancies, produce test evidence and create test data.",
          "Analyse Stored Procedures to find whether a defect sits in source data, transformation, application logic, database processing or the requirements.",
        ],
      },
      {
        title: "Test design, defects and collaboration",
        points: [
          "Estimate effort and design positive and negative test cases, peer-reviewed before execution.",
          "Log, track and retest defects in Azure DevOps with clear reproduction steps and evidence.",
          "Work with developers, architects and senior stakeholders in an Agile team to reproduce issues and verify fixes.",
        ],
      },
      {
        title: "AI-assisted and agentic testing",
        points: [
          "Use GitHub Copilot and Copilot agents for code analysis, investigation, test development and repetitive tasks.",
          "Develop structured agentic testing procedures for other Test Engineers, with clear boundaries, validation steps, human oversight and traceability.",
        ],
      },
    ],
  },
];

export const education = [
  "Artificial Intelligence course, John Paul II Catholic University of Lublin, 2025",
  "Microsoft AI courses: generative AI, Microsoft Copilot and responsible AI",
  "Master of Theology, First Class Honours, Nicolaus Copernicus University, Toruń, 2012",
];
