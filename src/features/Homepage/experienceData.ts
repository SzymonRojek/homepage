export interface Job {
  role: string;
  company: string;
  details: string;
  period: string;
  // Only what "How I test at work" doesn't already say: mapping, SQL and root
  // cause live there.
  points: string[];
}

export const jobs: Job[] = [
  {
    role: "Software Test Engineer",
    company: "Equiniti, Worthing",
    details: "Financial services and shareholder registry",
    period: "Sep 2022 – now",
    points: [
      "Validate financial and shareholder data across migration and ETL projects, including conversion and deconversion.",
      "Estimate effort and work in an Agile team with developers, architects and stakeholders.",
      "Use GitHub Copilot agents and write agentic testing procedures for the test team, with validation steps and human oversight.",
      "Pilot in-house AI agents that write tests from user stories and mapping documents: find the gaps in their output and review them with the senior engineers who build them.",
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
