// "Test report" design: black and white, crisp rules, one action colour
// (cobalt) and one status colour (pass green). Every text pair below passes
// WCAG AA in both themes; the comments give the ratios.
const colorNames = {
  white: "#FFFFFF",
  ink: "#0B0B0C",
  inkBody: "#33363B",
  inkMuted: "#5B5F66",
  rule: "#D9DCE1",
  ruleSoft: "#E3E5E8",
  control: "#6B7079",
  cobalt: "#1F4BFF",
  cobaltHover: "#1A3FD9",
  cobaltSoft: "#F3F5FF",
  cobaltBorder: "#C9D3FF",
  pass: "#0F7B3F",
  passSoft: "#F0F8F3",
  passBorder: "#BFE3CC",
  night: "#0E0F11",
  nightCard: "#16181B",
  nightRule: "#343840",
  nightControl: "#22252A",
  paper: "#F2F3F5",
  paperBody: "#CDD1D6",
  paperMuted: "#A0A6AE",
  periwinkle: "#8FA6FF",
  periwinkleHover: "#A9BAFF",
  mint: "#5FD68A",
  terminal: "#0B1220",
  terminalRule: "#1E293B",
  terminalText: "#E2E8F0",
  terminalMuted: "#94A3B8",
  terminalPass: "#34D399",
  periwinkleSoft: "rgba(143, 166, 255, 0.08)",
  periwinkleBorder: "rgba(143, 166, 255, 0.35)",
  mintSoft: "rgba(95, 214, 138, 0.08)",
  mintBorder: "rgba(95, 214, 138, 0.35)",
  navLight: "rgba(255, 255, 255, 0.9)",
  navDark: "rgba(14, 15, 17, 0.85)",
};

const common = {
  breakpoints: {
    mobileMax: 767,
    tabletVerticalMax: 991,
    tabletHorizontalMax: 1199,
  },
  boxShadow: "0 1px 2px rgba(11, 11, 12, 0.04)",
  borderRadius: "8px",
  borderRadiusSmall: "6px",
  fontMono:
    'ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace',
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
    // Actions and links: buttons, links, focus rings (5.99:1 on white).
    primary: colorNames.cobalt,
    primaryHover: colorNames.cobaltHover,
    onPrimary: colorNames.white,
    // Headings 19.7:1, body 12.1:1, secondary 6.4:1 on white.
    textPrimary: colorNames.ink,
    muted: colorNames.inkMuted,
    site: {
      background: colorNames.white,
      text: colorNames.inkBody,
    },
    nav: colorNames.navLight,
    // Code / developer: cobalt. Test / tester: pass green (5.35:1 on white).
    dev: {
      accent: colorNames.cobalt,
      soft: colorNames.cobaltSoft,
      border: colorNames.cobaltBorder,
    },
    qa: {
      accent: colorNames.pass,
      soft: colorNames.passSoft,
      border: colorNames.passBorder,
    },
    boxBackground: colorNames.white,
    headerLine: colorNames.rule,
    tile: {
      border: colorNames.rule,
      borderHover: colorNames.cobaltBorder,
      header: colorNames.ink,
    },
    // The border is a control boundary: 3.94:1, above the 3:1 WCAG 1.4.11 needs.
    themeSwitch: {
      background: colorNames.ruleSoft,
      border: colorNames.control,
      icon: colorNames.cobalt,
    },
    terminal,
    contact: {
      background: colorNames.ink,
      text: colorNames.white,
    },
  },
};

export const themeDark: typeof themeLight = {
  ...common,
  boxShadow: "none",
  colors: {
    primary: colorNames.periwinkle,
    primaryHover: colorNames.periwinkleHover,
    onPrimary: colorNames.night,
    textPrimary: colorNames.paper,
    muted: colorNames.paperMuted,
    site: {
      background: colorNames.night,
      text: colorNames.paperBody,
    },
    nav: colorNames.navDark,
    dev: {
      accent: colorNames.periwinkle,
      soft: colorNames.periwinkleSoft,
      border: colorNames.periwinkleBorder,
    },
    qa: {
      accent: colorNames.mint,
      soft: colorNames.mintSoft,
      border: colorNames.mintBorder,
    },
    boxBackground: colorNames.nightCard,
    headerLine: colorNames.nightRule,
    tile: {
      border: colorNames.nightRule,
      borderHover: colorNames.periwinkleBorder,
      header: colorNames.paper,
    },
    themeSwitch: {
      background: colorNames.nightControl,
      border: colorNames.control,
      icon: colorNames.periwinkle,
    },
    terminal,
    contact: {
      background: colorNames.nightCard,
      text: colorNames.paper,
    },
  },
};
