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
          "Turn requirements, mapping documents and transformation rules into test plans and traceable test scenarios.",
          "Validate financial and shareholder data across data migration and ETL projects, including conversion and deconversion, comparing databases, extracts and reconciliation reports.",
          "Write complex SQL to surface discrepancies, produce evidence and build test data.",
          "Trace defects to their source: data, transformation logic, stored procedures or the requirements themselves.",
        ],
      },
      {
        title: "Quality process",
        points: [
          "Estimate effort and design positive and negative manual test cases, peer-reviewed before execution.",
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
  detail: string;
  // When it started or happened; "Now" for what I'm working on.
  year: string;
  // The one thing I'm working on now, shown large as "Next up".
  next?: boolean;
}

// Newest first, by the date each one started.
export const education: EducationItem[] = [
  {
    title: "ISTQB Certified Tester, Foundation Level",
    detail: "Preparing for the exam now.",
    year: "Now",
    next: true,
  },
  {
    title: "Microsoft AI courses",
    detail: "Generative AI, Copilot, responsible AI",
    year: "2026",
  },
  {
    title: "Artificial Intelligence course",
    detail: "John Paul II Catholic University of Lublin",
    year: "2025",
  },
  {
    title: "LinkedIn Learning",
    detail: "Programming, testing and AI, alongside my job",
    year: "2023 – now",
  },
  {
    title: "React School",
    detail: "React workshops, final exam passed",
    year: "2022",
  },
];
