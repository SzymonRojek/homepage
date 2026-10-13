// Where I live: in the row under the bio and in the page's structured data.
const basedIn = "Hove, UK";

export const profile = {
  name: "Szymon Rojek",
  title: "Software Test Engineer",
  // My own words about data testing: totals can agree while a value is wrong.
  tagline: "A number can match and still be wrong.",
  // The word in the tagline that gets the hand-drawn underline.
  taglineHighlight: "wrong",
  availability: "Open to Test Automation & QA Engineer roles",
  // A row of three facts under the bio, so HR sees them at once.
  basedIn,
  location: [
    { label: "Based in", value: basedIn },
    { label: "Right to work", value: "UK, full" },
    { label: "Relocation", value: "Open" },
  ],
  bio: "Four years testing financial data migrations at Equiniti: SQL reconciliation, business logic and root-cause analysis. I taught myself to code, so I automate tests with Playwright and build full-stack apps to practise.",
  // Shown on the photo when its line is dragged all the way to one side:
  // all colour (test) or all black and white (code). Read together they are
  // one sentence.
  portraitCaptions: {
    test: "100% tester",
    code: "…who also codes",
  },
  // What matters to me in a team, in my own words, in the contact card.
  teamNote:
    "For me, communication matters most in a team. People will always be different, but mutual respect and giving each other time to get to know one another come first. I care about supporting each other, because that's what shows in the results.",
  // The one sentence that asks for contact, after the team note.
  contactInvite: "If that sounds like your team, I'd like to hear from you.",
  linkedinUrl: "https://www.linkedin.com/in/szymonrojek/",
};
