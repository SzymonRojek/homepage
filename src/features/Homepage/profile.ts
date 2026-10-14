// Where I live: under the bio and in the page's structured data.
const basedIn = "Hove, UK";

export const profile = {
  name: "Szymon Rojek",
  title: "Software Test Engineer",
  // My own words about data testing: totals can agree while a value is wrong.
  tagline: "A number can match and still be wrong.",
  // The word in the tagline that gets the hand-drawn underline.
  taglineHighlight: "wrong",
  // Under the bio: the roles I want lead, so HR sees them first.
  lookingFor: {
    label: "Looking for",
    value: "Test Automation, QA and AI Testing roles",
  },
  // Then where and how I can work, as short phrases, quieter than the roles.
  basedIn,
  facts: [
    `Based in ${basedIn}`,
    "Full right to work in the UK",
    "Open to relocation",
  ],
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
  linkedinUrl: "https://www.linkedin.com/in/szymonrojek/",
};
