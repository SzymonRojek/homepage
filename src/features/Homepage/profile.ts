// Where I live: in the page's structured data only, not on screen.
const basedIn = "Hove, UK";
const title = "Test Engineer";

export const profile = {
  name: "Szymon Rojek",
  title,
  // The small line over the headline, shown in capitals: the title alone.
  eyebrow: title,
  // My own words: passing checks are where I start, not where I stop.
  tagline: "I don’t stop at green.",
  // The words in the tagline on the tilted mint block.
  taglineHighlight: "green.",
  // Under the bio: the roles I want lead, so HR sees them first.
  lookingFor: {
    label: "Looking for",
    // Two parts of phrases: one line where it fits, else each part on a line
    // of its own, and only where a part can't fit does it break between its
    // phrases. A non-breaking space and hyphen keep "AI Testing" and
    // "Front-End" whole.
    lines: [
      ["QA,", "Test Automation,"],
      ["AI\u00a0Testing,", "Front\u2011End roles"],
    ],
  },
  basedIn,
  // "full\u2011stack" has a non-breaking hyphen, so a phone never splits it.
  bio: "Four years testing financial data migrations with SQL at Equiniti. I taught myself to code, so I automate tests with Playwright and build full\u2011stack apps of my own.",
  // The footer's heading: the question a team asks, in the page's theme.
  contactHeading: "Let’s ship something that doesn’t break.",
  // What matters to me in a team, in my own words, and the one invite to get
  // in touch, as one paragraph in the footer.
  teamNote:
    "Communication matters most to me in a team, with mutual respect and time to get to know one another. If that sounds like your team, I’d like to hear from you.",
  // The live profile (two dashes), confirmed on 15 October 2026; an old CV
  // had /in/szymonrojek/.
  linkedinUrl: "https://www.linkedin.com/in/szymon--rojek/",
};
