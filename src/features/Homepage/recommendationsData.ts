export interface Recommendation {
  // Word for word from LinkedIn; "…" marks a cut, nothing is reworded. A
  // blank line ("\n\n") starts a new paragraph, as on LinkedIn.
  quote: string;
  // The key words, marked in the card: a part of the quote, word for word.
  // Picked for a recruiter's two-second skim: is he good at it, what does
  // the team gain, how does he work, is he easy to work with.
  highlight: string;
  name: string;
  role: string;
  // Not shown; kept so the source stays checkable against LinkedIn.
  relation: string;
  // Short month and year, shown after the role; the list is newest first.
  date: string;
}

// From my LinkedIn recommendations (public to all LinkedIn members), the
// newest first.
export const recommendations: Recommendation[] = [
  {
    quote:
      "I had the pleasure of working with Szymon on Data Migration projects, and he was a real asset to the team. He is strong in both deconversion and conversion work and has valuable experience on AST projects. He has solid hands-on skills in SQL and a clear understanding of the data migration flow, and he was always ready to help colleagues whenever they needed guidance.\n\n" +
      "Szymon is very proactive. He takes ownership across projects and doesn’t wait to be asked, which made a real difference to the team.\n\n" +
      "What made working with him even better was his personality. He is kind, friendly and genuinely caring. He always took the time to ask how you were doing, both at work and outside it, and that made him a pleasure to work with every day.\n\n" +
      "Szymon would be a great addition to any team, and I would happily work with him again. I highly recommend him.",
    highlight: "takes ownership across projects",
    name: "Venkat Nagadasari",
    role: "Senior Test Engineer at Equiniti",
    relation: "worked with me on the same team",
    date: "Oct 2026",
  },
  {
    quote:
      "I have had the pleasure of working with Szymon Rojek for the past 3 years. He is a highly skilled professional who consistently demonstrates strong technical expertise, attention to detail, and a commitment to quality.\n\n" +
      "Szymon is always willing to support teammates, share knowledge, and contribute to successful project delivery. His positive attitude and collaborative approach make him a valued member of any team. Keep up the Good work Szymon!!",
    highlight: "highly skilled professional",
    name: "Karthikeyan Palanivel",
    role: "Senior Test Engineer at Equiniti",
    relation: "worked with me on the same team",
    date: "Oct 2026",
  },
  {
    quote:
      "I had the pleasure of working with Szymon for several years and can confidently say that he is a test engineer with good technical and interpersonal skills. From a developer's perspective, what I value most is his commitment to getting to the root cause of issues—not just reporting symptoms.\n\n" +
      "Szymon consistently performs deep analyses that often uncover hidden problems, saving the team time and preventing future bugs. His bug reports are always thorough, well-structured, and contain all the key details needed to move quickly from diagnosis to resolution.\n\n" +
      "He also fosters a culture of open communication and mutual respect, which makes collaboration smooth and productive. Working with Szymon guarantees quality, reliability, and a positive team atmosphere.",
    highlight: "saving the team time and preventing future bugs",
    name: "Oskar Wielanowski",
    role: "SQL Developer at EQTek",
    relation: "worked with me on the same team",
    date: "May 2025",
  },
  {
    quote:
      "Working with Szymon is a pleasure. He is thoughtful and thorough. His write-ups included everything needed to reproduce the conditions and defects he was reporting. He's got a solid understanding of SQL and the context within which we were both working.\n\n" +
      "I'd gladly work with him in the future and you will be fortunate if you get to work with him.",
    // His closing line, marked in his card since it no longer stands large
    // above the cards (2026-10-17).
    highlight: "you will be fortunate if you get to work with him",
    name: "Jim Grinsfelder",
    role: "Senior Database Engineer at Equiniti",
    relation: "worked with me on a different team",
    date: "Jan 2025",
  },
  {
    quote:
      "Szymon is committed to his tasks and always tries to get to the bottom of the issues. He is persistent in striving to expand his knowledge. His positive disposition makes him easy to work with and constitutes his high value in the team.",
    highlight: "easy to work with",
    name: "Dawid Kwaśnik",
    role: "Database Consultant (data migration) at Endava",
    relation: "worked with me on a different team",
    date: "Feb 2024",
  },
];

// The section's heading, "05 / References" on screen, as in the top bar.
export const recommendationsHeading = "References";

// The section's big line, above the cards, with its key words marked. It
// avoids "recommended" (the heading already says References) and job titles
// (not everyone who wrote one is an engineer). It replaced Jim's sentence
// shown large on 2026-10-17; that sentence is now marked in his card.
// Two lines on purpose, as the Projects headline: a short lead-in, then the
// line that carries the meaning and ends on the marked words.
export const recommendationsTitle = {
  lines: ["In the words of", "the people I’ve worked with"],
  highlight: "worked with",
};
