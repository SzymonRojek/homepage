// Where I live: over the headline and in the page's structured data.
const basedIn = "Hove, UK";
const title = "Software Test Engineer";

export const profile = {
  name: "Szymon Rojek",
  title,
  // The small line over the headline, shown in capitals.
  eyebrow: `${title} · ${basedIn}`,
  // My own words: passing checks are where I start, not where I stop.
  tagline: "I don’t stop at green.",
  // The word in the tagline that gets the hand-drawn underline.
  taglineHighlight: "green",
  // Under the bio: the roles I want lead, so HR sees them first.
  lookingFor: {
    label: "Looking for",
    value: "Test Automation, QA and AI Testing roles",
  },
  basedIn,
  // Then how I can work, as short phrases, quieter than the roles. Where I
  // live is over the headline, so it isn't repeated here.
  facts: ["Full right to work in the UK", "Open to relocation"],
  // "full\u2011stack" has a non-breaking hyphen, so a phone never splits it.
  bio: "Four years testing financial data migrations with SQL at Equiniti. I taught myself to code, so I automate tests with Playwright and build full\u2011stack apps of my own.",
  // Shown on the photo when its line is dragged all the way to one side:
  // all colour (test) or all black and white (code). Read together they are
  // one sentence.
  portraitCaptions: {
    test: "100% tester",
    code: "…who also codes",
  },
  // What matters to me in a team, in my own words, in the footer.
  teamNote:
    "For me, communication matters most in a team, with mutual respect and time to get to know one another. I care about supporting each other, because that's what shows in the results.",
  // The one sentence that asks for contact, after the team note.
  contactInvite: "If that sounds like your team, I'd like to hear from you.",
  // The live profile (two dashes), confirmed on 15 October 2026; an old CV
  // had /in/szymonrojek/.
  linkedinUrl: "https://www.linkedin.com/in/szymon--rojek/",
};
