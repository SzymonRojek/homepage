export interface Recommendation {
  // Word for word from LinkedIn; "…" marks a cut, nothing is reworded.
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
      "I have had the pleasure of working with Szymon Rojek for the past 3 years. He is a highly skilled professional who consistently demonstrates strong technical expertise, attention to detail, and a commitment to quality. Szymon is always willing to support teammates, share knowledge, and contribute to successful project delivery. His positive attitude and collaborative approach make him a valued member of any team. Keep up the Good work Szymon!!",
    highlight: "highly skilled professional",
    name: "Karthikeyan Palanivel",
    role: "Software Engineer at Equiniti",
    relation: "worked with me on the same team",
    date: "Oct 2026",
  },
  {
    quote:
      "I had the pleasure of working with Szymon for several years and can confidently say that he is a test engineer with good technical and interpersonal skills. From a developer's perspective, what I value most is his commitment to getting to the root cause of issues—not just reporting symptoms. Szymon consistently performs deep analyses that often uncover hidden problems, saving the team time and preventing future bugs. His bug reports are always thorough, well-structured, and contain all the key details needed to move quickly from diagnosis to resolution. He also fosters a culture of open communication and mutual respect, which makes collaboration smooth and productive. Working with Szymon guarantees quality, reliability, and a positive team atmosphere.",
    highlight: "saving the team time and preventing future bugs",
    name: "Oskar Wielanowski",
    role: "SQL Developer at EQTek",
    relation: "worked with me on the same team",
    date: "May 2025",
  },
  {
    quote:
      "Working with Szymon is a pleasure. He is thoughtful and thorough. His write-ups included everything needed to reproduce the conditions and defects he was reporting. He's got a solid understanding of SQL and the context within which we were both working. I'd gladly work with him in the future and you will be fortunate if you get to work with him.",
    highlight: "thoughtful and thorough",
    name: "Jim Grinsfelder",
    role: "Senior Software Engineer at Equiniti",
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

// One sentence from the recommendations, shown large above them. The words
// are a part of Jim's quote; the highlight is the end of the sentence.
export const headline = {
  text: "you will be fortunate if you get to work with him",
  highlight: "work with him",
  from: "Jim Grinsfelder",
};
