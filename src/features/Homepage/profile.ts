// Where I live: in the page's structured data only, not on screen.
const basedIn = "Hove, UK";
const title = "Test Engineer";
// The first day I can start a new role, as the user gave it on 2026-11-21
// ("02.01.2027"). A hard filter for a recruiter, so it closes the hero's
// location line. Once the day has passed the line still reads true; change
// it to "Available now" when the user says so.
const availableFrom = "2 January 2027";
// What the title alone never says: the work itself. It goes into the page's
// <title> and into the structured data, the two places a search engine and an
// AI tool weigh hardest, and deliberately not into the hero: the eyebrow is
// 13px uppercase and a line this long would wrap on a phone, while the bio
// right under it already names the work. Keep it in step with the bio.
// "Data QA, ETL & Data Migration Testing" since 2026-11-27, when the search
// turned to data testing roles: these are the words recruiters type, and the
// title is where a search engine weighs them hardest. Data QA is the
// umbrella; ETL and migration are named for the search, not for the reader.
const specialism = "Data QA, ETL & Data Migration Testing";

export const profile = {
  name: "Szymon Rojek",
  title,
  specialism,
  // The small line over the headline, shown in capitals: the title alone.
  eyebrow: title,
  // My own words: passing checks are where I start, not where I stop.
  tagline: "I don’t stop at green",
  // The words in the tagline on the tilted mint block.
  taglineHighlight: "green",
  // Under the bio: the roles I want lead, so HR sees them first.
  lookingFor: {
    label: "Open to",
    // Two parts of phrases: one line where it fits, else each part on a line
    // of its own, and only where a part can't fit does it break between its
    // phrases.
    // "AI Testing" was removed on 2026-10-20: ISTQB certifies that term for
    // testing AI-based systems (CT-AI), which is not this work; using AI to
    // support testing is CT-GenAI. These are the roles, and "01 / How I use
    // AI at work", right below the hero, shows the AI side far better than a
    // label in a list would.
    // "Front-End" was removed on 2026-11-21: the CV is a tester's CV
    // throughout, and a recruiter arriving from it read three directions as
    // a mixed signal. The bio still says I build apps, and a developer
    // application opens the page at #case-study-talent-outreach-developer.
    // "Data QA" leads since 2026-11-27: the paid experience is data testing,
    // and that is the role the search is for. One umbrella term for a
    // reader; ETL, migration and database testing are named in Skills and
    // in the search description, where a filter looks for them.
    lines: [["Data QA and"], ["Test Automation roles"]],
  },
  // Under the location: the number of recommendations, as a link down to
  // them. They are the page's strongest proof and its last section, so the
  // first screen says they exist. The number is counted from the data in
  // MainHeader, never written here.
  referencesLink: {
    href: "#recommendations",
    // After the count: "9 references from people I\u2019ve worked with".
    label: "references from people I\u2019ve worked with",
  },
  // Under the roles: where I am, and that I would move for the right one.
  // This was taken off the hero once, as "Full right to work in the UK ·
  // Open to relocation", and came back on 2026-11-10 at the user's word,
  // trimmed to these two facts: the right-to-work claim stays in the README
  // and is not on the page. The place comes from basedIn, so the hero and
  // the structured data cannot drift apart. A third fact joined them on
  // 2026-11-21, again at the user's word: the day I can start.
  locationLine: `Based in ${basedIn} \u00b7 Open to relocation \u00b7 Available from ${availableFrom}`,
  availableFrom,
  basedIn,
  // "4 years" as a digit since 2026-11-21: a scanning eye stops on numerals,
  // and the hero had none. True from the job's start in November 2022.
  // Reworded on 2026-11-27 for data testing roles, in the user's words: ETL
  // is named beside migration (a migration is a one-off move, ETL a load
  // that runs again and again), and the second sentence says only that I
  // can automate tests. Playwright and the apps I built are named in Skills
  // and Projects, not here: he asked for the tool to stay out of the hero.
  bio: "4 years testing financial data migrations and ETL processes with SQL at Equiniti. I taught myself to code, so I can automate tests too.",
  // The footer's heading: the question a team asks, in the page's theme.
  contactHeading: "Let’s ship something that doesn’t break",
  // What matters to me in a team, in my own words, and the one invite to get
  // in touch, as one paragraph in the footer.
  teamNote:
    "Communication matters most to me in a team, with mutual respect and time to get to know one another. If that sounds like your team, I’d like to hear from you.",
  // The live profile (two dashes), confirmed on 15 October 2026; an old CV
  // had /in/szymonrojek/.
  linkedinUrl: "https://www.linkedin.com/in/szymon--rojek/",
};
