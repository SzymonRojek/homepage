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
        title: "Data migration & SQL",
        points: [
          "Turn requirements, mapping documents and transformation rules into traceable test scenarios.",
          "Validate financial and shareholder data across migration, conversion and deconversion projects, comparing databases, extracts and reconciliation reports.",
          "Write complex SQL to surface discrepancies, produce evidence and build test data.",
          "Trace defects to their source: data, transformation logic, Stored Procedures or the requirements themselves.",
        ],
      },
      {
        title: "Quality process",
        points: [
          "Estimate effort and design positive and negative cases, peer-reviewed before execution.",
          "Log and retest defects in Azure DevOps with clear reproduction steps.",
          "Work with developers, architects and stakeholders in an Agile team to verify fixes.",
        ],
      },
      {
        title: "AI-assisted testing",
        points: [
          "Use GitHub Copilot agents for code analysis, investigation and repetitive tasks.",
          "Write agentic testing procedures for the test team, with validation steps and human oversight.",
          "Pilot in-house AI agents that work together to write tests from user stories (PBIs) and mapping documents: find gaps in their output and review them with the senior engineers who build them.",
        ],
      },
    ],
  },
];

export interface EducationItem {
  title: string;
  school: string;
  year?: string;
}

export const education: EducationItem[] = [
  {
    title: "ISTQB Certified Tester Foundation Level (CTFL)",
    school: "International Software Testing Qualifications Board",
    year: "In progress",
  },
  {
    title: "Microsoft AI courses",
    school: "Generative AI, Microsoft Copilot and responsible AI",
    year: "2026",
  },
  {
    title: "Artificial Intelligence course",
    school: "John Paul II Catholic University of Lublin",
    year: "2025",
  },
  {
    title: "Master of Theology, First Class Honours",
    school: "Nicolaus Copernicus University, Toruń",
    year: "2012",
  },
];
