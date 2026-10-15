// "Colour block" design: a deep-green brand band (top bar, hero, contact)
// with cream text and a sunny yellow accent, around a light cream page.
// Testing is green, code is terracotta. Every text pair passes WCAG AA in
// both themes; the comments give the ratios.
const colorNames = {
  cream: "#FBF4E6",
  // The light page: half a tone deeper than cream, so the white bands and
  // cards stand clear of it (1.19:1 against white; cream was 1.09:1).
  sand: "#F4EAD6",
  white: "#FFFFFF",
  ink: "#16231F",
  inkBody: "#3A4843",
  inkMuted: "#5C6964",
  line: "#E6DAC3",
  deep: "#123C37",
  // Hover shades: a step darker than the button (about 1.3:1), enough to see
  // under the pointer; text on them keeps AA (cream on green 14.6:1, green on
  // amber 6.0:1).
  deepHover: "#0A2622",
  sun: "#FFC94D",
  sunHover: "#EBAA27",
  // The sun as a soft marker behind body text: 7.9:1 with the body ink on
  // white, 6.2:1 with the dark theme's body text on its cards.
  sunMarker: "rgba(255, 201, 77, 0.45)",
  sunMarkerNight: "rgba(255, 201, 77, 0.22)",
  brandMuted: "#B9CEC7",
  brandLine: "rgba(251, 244, 230, 0.25)",
  brandControl: "rgba(251, 244, 230, 0.15)",
  brandControlBorder: "rgba(251, 244, 230, 0.55)",
  testGreen: "#1C7457",
  testSoft: "#E3F2EA",
  testBorder: "#B8DCCB",
  terracotta: "#A94A22",
  terracottaSoft: "#FBEBE2",
  terracottaBorder: "#F0C7B1",
  night: "#0B1513",
  nightCard: "#12201D",
  // The dark bands (Experience, Skills): one step up from the page, 1.34:1
  // against it, so the sections read as blocks.
  nightBand: "#1F302B",
  nightLine: "#2A3F38",
  paper: "#F3EBDB",
  paperBody: "#D2CDC0",
  paperMuted: "#A3AFA9",
  mint: "#7FD1A8",
  mintSoft: "rgba(127, 209, 168, 0.1)",
  mintBorder: "rgba(127, 209, 168, 0.35)",
  // A green-leaning dark for the testing band, between the page and the
  // brand band (paper text 12.9:1, mint 8.4:1).
  nightMint: "#0F2A24",
  peach: "#F2A47A",
  peachSoft: "rgba(242, 164, 122, 0.1)",
  peachBorder: "rgba(242, 164, 122, 0.35)",
  terminal: "#0B1220",
  terminalRule: "#1E293B",
  terminalText: "#E2E8F0",
  terminalMuted: "#94A3B8",
  terminalPass: "#34D399",
};

const common = {
  breakpoints: {
    mobileMax: 767,
    tabletVerticalMax: 991,
    tabletHorizontalMax: 1199,
  },
  boxShadow:
    "0 1px 2px rgba(22, 35, 31, 0.04), 0 8px 24px rgba(22, 35, 31, 0.05)",
  // One content column for the top bar, the hero and the sections: at most
  // 1160px of content, with side gutters that grow with the screen.
  layout: {
    maxWidth: 1160,
    gutter: { mobile: 16, tablet: 32, desktop: 48 },
    // The top bar's height; the hero starts this far up, under the bar.
    topBar: { mobile: 57, desktop: 66 },
    // The space above and below a section's content: a band's padding, the
    // gap before a section on the page colour, and the footer's top.
    section: { mobile: 24, desktop: 40 },
  },
  borderRadius: "8px",
  borderRadiusSmall: "4px",
  fontDisplay: '"Plus Jakarta Sans", Inter, sans-serif',
  fontMono:
    'ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace',
};

// The brand band: the same deep green in both themes, cream text (11.1:1),
// muted cream (7.4:1), sunny yellow accent (7.9:1) and yellow buttons with
// green text (7.9:1).
const brand = {
  background: colorNames.deep,
  text: colorNames.cream,
  muted: colorNames.brandMuted,
  line: colorNames.brandLine,
  accent: colorNames.sun,
  accentHover: colorNames.sunHover,
  onAccent: colorNames.deep,
  control: colorNames.brandControl,
  controlBorder: colorNames.brandControlBorder,
  // Under the scrolled top bar: it lifts the bar off whatever passes beneath,
  // even the same green (the story band) or the dark theme's dark bands.
  barShadow: "0 6px 16px rgba(0, 0, 0, 0.22)",
};

// The CI terminal is dark in both themes.
const terminal = {
  background: colorNames.terminal,
  border: colorNames.terminalRule,
  text: colorNames.terminalText,
  muted: colorNames.terminalMuted,
  pass: colorNames.terminalPass,
};

export const themeLight = {
  ...common,
  colors: {
    // Links and buttons on the cream page: deep green (11.1:1).
    primary: colorNames.deep,
    primaryHover: colorNames.deepHover,
    onPrimary: colorNames.cream,
    // Headings 13.6:1, body 8.0:1, secondary 4.8:1 on sand.
    textPrimary: colorNames.ink,
    muted: colorNames.inkMuted,
    site: {
      background: colorNames.sand,
      text: colorNames.inkBody,
    },
    // Code: terracotta (4.8:1 on sand). Test: green (4.8:1 on sand).
    dev: {
      accent: colorNames.terracotta,
      soft: colorNames.terracottaSoft,
      border: colorNames.terracottaBorder,
    },
    qa: {
      accent: colorNames.testGreen,
      soft: colorNames.testSoft,
      border: colorNames.testBorder,
    },
    boxBackground: colorNames.white,
    // The white bands between the sand sections.
    cardBand: colorNames.white,
    // A secondary button under the pointer: the page's sand behind its text.
    secondaryHover: colorNames.sand,
    // The band under the hero, with colleagues' words: white on the cream page.
    quoteBand: colorNames.white,
    // "How I test at work": testing is green, so its band is the soft test
    // green, set apart from the white bands above and below it (ink body
    // 8.3:1, test green 4.9:1, muted 5.0:1).
    testBand: colorNames.testSoft,
    // "work with him" in the big quote: dark words on a yellow marker, since
    // yellow text on white is only 1.5:1 (ink on sun: 10.6:1).
    quoteMark: { text: colorNames.ink, background: colorNames.sun },
    // The recommendation cards: white on the white band, with a thin border,
    // so the whole band reads as one white block above the cream section.
    quoteCard: colorNames.white,
    // The key phrase in each recommendation.
    quoteHighlight: colorNames.sunMarker,
    headerLine: colorNames.line,
    tile: {
      border: colorNames.line,
      borderHover: colorNames.testBorder,
      header: colorNames.ink,
    },
    brand,
    terminal,
  },
};

export const themeDark: typeof themeLight = {
  ...common,
  boxShadow: "none",
  colors: {
    // Links and buttons: sunny yellow (11.0:1 on cards), green text on it.
    primary: colorNames.sun,
    primaryHover: colorNames.sunHover,
    onPrimary: colorNames.deep,
    textPrimary: colorNames.paper,
    muted: colorNames.paperMuted,
    site: {
      background: colorNames.night,
      text: colorNames.paperBody,
    },
    dev: {
      accent: colorNames.peach,
      soft: colorNames.peachSoft,
      border: colorNames.peachBorder,
    },
    qa: {
      accent: colorNames.mint,
      soft: colorNames.mintSoft,
      border: colorNames.mintBorder,
    },
    boxBackground: colorNames.nightCard,
    cardBand: colorNames.nightBand,
    secondaryHover: colorNames.nightBand,
    // The page itself: a card-coloured band right under the green hero would
    // read as green on green.
    quoteBand: colorNames.night,
    testBand: colorNames.nightMint,
    // Yellow words on the dark page (12.1:1), no marker.
    quoteMark: { text: colorNames.sun, background: "transparent" },
    // The recommendation cards on the dark page: the card colour.
    quoteCard: colorNames.nightCard,
    quoteHighlight: colorNames.sunMarkerNight,
    headerLine: colorNames.nightLine,
    tile: {
      border: colorNames.nightLine,
      borderHover: colorNames.mintBorder,
      header: colorNames.paper,
    },
    brand,
    terminal,
  },
};
