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
  // The raised top bar in the dark theme: a step lighter than the deep
  // green (1.27:1), so it stands out over the How I test band, which is the
  // deep green there. Cream 8.7:1, muted cream 5.8:1, yellow 6.2:1.
  deepRaised: "#1C4D46",
  // Its thin edge in the dark theme, where it parts the bar from the dark
  // page; the light theme needs none, as the green stands clear of it.
  creamEdge: "rgba(251, 244, 230, 0.14)",
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
  // The footer's small squares: a faint fill and edge on the near-black, so
  // the icons (muted cream, 11.4:1) carry them and they don't catch the eye.
  brandQuiet: "rgba(251, 244, 230, 0.05)",
  brandQuietBorder: "rgba(251, 244, 230, 0.18)",
  testGreen: "#1C7457",
  // The bug behind How I test: the deep green faint on white, the yellow
  // faint on the green.
  deepFaint: "rgba(18, 60, 55, 0.07)",
  sunFaint: "rgba(255, 201, 77, 0.12)",
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
  fontDisplay: '"Bricolage Grotesque", Geist, sans-serif',
  fontMono: '"Geist Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
};

// The brand band: the same deep green in both themes, cream text (11.1:1),
// muted cream (7.4:1), sunny yellow accent (7.9:1) and yellow buttons with
// green text (7.9:1).
const brand = {
  background: colorNames.deep,
  // The hero and the footer: near-black with a green undertone, so the page
  // opens and closes on the same dark and the deep green stands out in it
  // (the tilted "green." in the headline, the top bar, the How I test band).
  // Cream text on it 17.1:1, muted cream 11.4:1, yellow 12.1:1.
  dark: colorNames.night,
  // "green." in the hero's headline: the green of a passing test, a block
  // that stands out on the dark (10.3:1) with near-black letters (10.2:1),
  // leaving the yellow to the buttons.
  highlight: colorNames.mint,
  onHighlight: colorNames.night,
  // The soft light behind the hero photo's head, so the dark hair keeps its
  // outline on the dark band.
  glow: colorNames.deepRaised,
  text: colorNames.cream,
  muted: colorNames.brandMuted,
  line: colorNames.brandLine,
  accent: colorNames.sun,
  accentHover: colorNames.sunHover,
  onAccent: colorNames.deep,
  control: colorNames.brandControl,
  controlBorder: colorNames.brandControlBorder,
  quiet: colorNames.brandQuiet,
  quietBorder: colorNames.brandQuietBorder,
  // Under the scrolled top bar: it lifts the bar off whatever passes beneath,
  // even the same green (the story band) or the dark theme's dark bands.
  barShadow: "0 6px 16px rgba(0, 0, 0, 0.22)",
  // Under the raised top bar and its menu panel: two shadows, one close and
  // one far, so it reads as a layer floating over the page. No light inner
  // edge along the top: on top of the border it made the top line look
  // twice as thick (dropped on 2026-10-17).
  pillShadow: "0 2px 6px rgba(0, 0, 0, 0.16), 0 16px 36px rgba(0, 0, 0, 0.3)",
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
    // References, the last section: white, after Skills on the sand, so the
    // bands alternate down to the near-black footer.
    quoteBand: colorNames.white,
    // "How I test at work", right under the hero: white in the light theme,
    // so the bands alternate (dark, white, sand, white, sand, white, dark),
    // with the page's ink (headings 16.1:1, body 9.8:1), its line, green
    // ticks (5.6:1) and a faint green bug. "obvious" takes quoteMark.
    storyBand: colorNames.white,
    story: {
      text: colorNames.ink,
      body: colorNames.inkBody,
      line: colorNames.line,
      tick: colorNames.testGreen,
      bug: colorNames.deepFaint,
    },
    // "work with him" in the big quote: dark words on a yellow marker, since
    // yellow text on white is only 1.5:1 (ink on sun: 10.6:1).
    quoteMark: { text: colorNames.ink, background: colorNames.sun },
    // The recommendation cards: white on the white band, with a thin border,
    // so the whole band reads as one white block above the cream section.
    // On the white References band: the page's sand, so each card reads as a
    // block (1.19:1, the step between sections), as the white cards do on
    // the sand.
    quoteCard: colorNames.sand,
    // The key phrase in each recommendation.
    quoteHighlight: colorNames.sunMarker,
    // The raised top bar and its menu panel: the deep green, with no edge (a
    // cream line round the green read as a faded rim on the light page).
    topBar: colorNames.deep,
    topBarEdge: "transparent",
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
    // One step up from the page, after Skills on it, so the bands alternate
    // down to the near-black footer.
    quoteBand: colorNames.nightBand,
    // The deep brand green in the dark theme, the page's one strong colour
    // block: cream text (11.1:1), muted cream (7.4:1), yellow ticks (7.9:1).
    storyBand: colorNames.deep,
    story: {
      text: colorNames.cream,
      body: colorNames.brandMuted,
      line: colorNames.brandLine,
      tick: colorNames.sun,
      bug: colorNames.sunFaint,
    },
    // Yellow words on the dark page (12.1:1), no marker.
    quoteMark: { text: colorNames.sun, background: "transparent" },
    // The recommendation cards on the dark References band: the card colour.
    quoteCard: colorNames.nightCard,
    quoteHighlight: colorNames.sunMarkerNight,
    // A step lighter than the How I test band, the deep green here, with a
    // thin even edge that parts it from the dark page.
    topBar: colorNames.deepRaised,
    topBarEdge: colorNames.creamEdge,
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
