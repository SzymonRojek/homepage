export interface Recommendation {
  // Word for word from LinkedIn; "…" marks a cut, nothing is reworded.
  quote: string;
  name: string;
  role: string;
  relation: string;
  date: string;
}

// From my LinkedIn recommendations (public to all LinkedIn members).
export const recommendations: Recommendation[] = [
  {
    quote:
      "From a developer's perspective, what I value most is his commitment to getting to the root cause of issues—not just reporting symptoms. … His bug reports are always thorough, well-structured, and contain all the key details needed to move quickly from diagnosis to resolution.",
    name: "Oskar Wielanowski",
    role: "SQL Developer at EQTek",
    relation: "worked with me on the same team",
    date: "May 2025",
  },
  {
    quote:
      "His write-ups included everything needed to reproduce the conditions and defects he was reporting. He's got a solid understanding of SQL and the context within which we were both working. I'd gladly work with him in the future and you will be fortunate if you get to work with him.",
    name: "Jim Grinsfelder",
    role: "Senior Software Engineer at Equiniti",
    relation: "worked with me on a different team",
    date: "January 2025",
  },
  {
    quote:
      "Szymon is committed to his tasks and always tries to get to the bottom of the issues. He is persistent in striving to expand his knowledge.",
    name: "Dawid Kwaśnik",
    role: "Database Consultant (data migration) at Endava",
    relation: "worked with me on a different team",
    date: "February 2024",
  },
];

// One sentence from the recommendations, shown large above them. The words
// are a part of Jim's quote; the highlight is the end of the sentence.
export const headline = {
  text: "you will be fortunate if you get to work with him",
  highlight: "work with him",
  from: "Jim Grinsfelder",
};
