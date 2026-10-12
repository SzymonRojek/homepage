// "Colour block" design: a deep-green brand band (top bar, hero, contact)
// with cream text and a sunny yellow accent, around a light cream page.
// Testing is green, code is terracotta. Every text pair passes WCAG AA in
// both themes; the comments give the ratios.
const colorNames = {
  cream: "#FBF4E6",
  white: "#FFFFFF",
  ink: "#16231F",
  inkBody: "#3A4843",
  inkMuted: "#5C6964",
  line: "#E6DAC3",
  deep: "#123C37",
  deepHover: "#0C2D29",
  sun: "#FFC94D",
  sunHover: "#FFD66E",
  brandMuted: "#B9CEC7",
  brandLine: "rgba(251, 244, 230, 0.25)",
  brandControl: "rgba(251, 244, 230, 0.15)",
  brandControlBorder: "rgba(251, 244, 230, 0.55)",
  testGreen: "#1F7A5C",
  testSoft: "#E3F2EA",
  testBorder: "#B8DCCB",
  terracotta: "#A94A22",
  terracottaSoft: "#FBEBE2",
  terracottaBorder: "#F0C7B1",
  night: "#0B1513",
  nightCard: "#12201D",
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
    // Headings 14.8:1, body 8.8:1, secondary 5.2:1 on cream.
    textPrimary: colorNames.ink,
    muted: colorNames.inkMuted,
    site: {
      background: colorNames.cream,
      text: colorNames.inkBody,
    },
    // Code: terracotta (5.2:1 on cream). Test: green (4.8:1 on cream).
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
