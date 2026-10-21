export interface Job {
  role: string;
  company: string;
  details: string;
  period: string;
  // Only what "How I test" and "How I use AI" don't already
  // say: mapping, SQL and root cause live in the first, every AI claim in the
  // second.
  points: string[];
}

export const jobs: Job[] = [
  {
    role: "Test Engineer",
    company: "Equiniti, Worthing",
    details: "Financial services and shareholder registry",
    period: "Sep 2022 – now",
    points: [
      "Validate financial and shareholder data across migration and ETL projects, including conversion and deconversion.",
      "Work across share dealing, dividends, corporate actions, tax, payments and reconciliation in the registry's data.",
      "Estimate effort and work in an Agile team with developers, architects and stakeholders.",
      "Review colleagues' test cases, SQL and mapping logic, and help new joiners with migration setup and mapping rules.",
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
