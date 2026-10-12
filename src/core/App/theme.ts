const colorNames = {
  // Dark surfaces, checked for depth: card vs page 1.15:1, border vs card 1.45:1.
  ink: "#0A0F18",
  inkPanel: "#151E2E",
  inkBorder: "#2A3A52",
  inkTerminal: "#0B1220",
  slate100: "#F1F5F9",
  slate200: "#E2E8F0",
  slate300: "#CBD5E1",
  slate400: "#94A3B8",
  slate500: "#64748B",
  slate600: "#475569",
  slate700: "#334155",
  slate800: "#1E293B",
  slate900: "#0F172A",
  slate950: "#020617",
  white: "#FFFFFF",
  emerald50: "#ECFDF5",
  emerald200: "#A7F3D0",
  emerald400: "#34D399",
  emerald500: "#10B981",
  emerald700: "#047857",
  cyan50: "#ECFEFF",
  cyan200: "#A5F3FC",
  cyan400: "#22D3EE",
  cyan500: "#06B6D4",
  cyan700: "#0E7490",
  emeraldGlow: "rgba(16, 185, 129, 0.10)",
  cyanGlow: "rgba(6, 182, 212, 0.10)",
  emeraldSoftDark: "rgba(16, 185, 129, 0.08)",
  emeraldBorderDark: "rgba(52, 211, 153, 0.30)",
  cyanSoftDark: "rgba(6, 182, 212, 0.08)",
  cyanBorderDark: "rgba(34, 211, 238, 0.30)",
  gridDotLight: "rgba(15, 23, 42, 0.07)",
  gridDotDark: "rgba(255, 255, 255, 0.06)",
  navLight: "rgba(241, 245, 249, 0.85)",
  navDark: "rgba(10, 15, 24, 0.80)",
  whiteTransparent: "rgba(255, 255, 255, 0.35)",
};

const common = {
  breakpoints: {
    mobileMax: 767,
    tabletVerticalMax: 991,
    tabletHorizontalMax: 1199,
  },
  boxShadow:
    "0 1px 2px rgba(15, 23, 42, 0.04), 0 12px 32px rgba(15, 23, 42, 0.06)",
  borderRadius: "16px",
  borderRadiusSmall: "8px",
  fontMono:
    'ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace',
};

// Both themes use the same bright gradient behind dark text (contrast 8:1+).
const gradient = `linear-gradient(135deg, ${colorNames.emerald500}, ${colorNames.cyan500})`;

// The CI terminal and the contact card are dark in both themes.
const terminal = {
  background: colorNames.inkTerminal,
  border: colorNames.slate800,
  text: colorNames.slate200,
  muted: colorNames.slate400,
  pass: colorNames.emerald400,
};

const contact = {
  background: colorNames.slate900,
  text: colorNames.white,
  glow: `radial-gradient(circle at 0% 0%, ${colorNames.emeraldGlow}, transparent 50%), radial-gradient(circle at 100% 100%, ${colorNames.cyanGlow}, transparent 50%)`,
};

// Text levels: headings, body, secondary. Secondary passes AA on the page
// background too (slate-600 on slate-100 is 6.9:1), so it works everywhere.
export const themeLight = {
  ...common,
  colors: {
    // Links, focus rings, section bars, step numbers: the tester colour.
    primary: colorNames.cyan700,
    onPrimary: colorNames.white,
    textPrimary: colorNames.slate900,
    muted: colorNames.slate600,
    site: {
      background: colorNames.slate100,
      text: colorNames.slate700,
    },
    gradient,
    onGradient: colorNames.slate950,
    gridDot: colorNames.gridDotLight,
    glow: {
      dev: colorNames.emeraldGlow,
      qa: colorNames.cyanGlow,
    },
    nav: colorNames.navLight,
    dev: {
      accent: colorNames.emerald700,
      soft: colorNames.emerald50,
      border: colorNames.emerald200,
    },
    qa: {
      accent: colorNames.cyan700,
      soft: colorNames.cyan50,
      border: colorNames.cyan200,
    },
    buttonLink: {
      text: colorNames.slate950,
      border: colorNames.slate300,
      shadow: colorNames.cyan200,
    },
    boxBackground: colorNames.white,
    // Card borders: 1.48:1 against white, so cards stand out from the page.
    headerLine: colorNames.slate300,
    tile: {
      border: colorNames.slate300,
      borderHover: colorNames.cyan200,
      header: colorNames.slate900,
    },
    // The border is a control boundary: 3.86:1, above the 3:1 WCAG 1.4.11 needs.
    themeSwitch: {
      background: colorNames.slate200,
      border: colorNames.slate500,
      icon: colorNames.cyan700,
    },
    terminal,
    contact,
  },
};

export const themeDark: typeof themeLight = {
  ...common,
  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.35)",
  colors: {
    primary: colorNames.cyan400,
    onPrimary: colorNames.slate950,
    // Softer than slate-100 against near-black, still 15.6:1.
    textPrimary: colorNames.slate200,
    muted: colorNames.slate400,
    site: {
      background: colorNames.ink,
      text: colorNames.slate300,
    },
    gradient,
    onGradient: colorNames.slate950,
    gridDot: colorNames.gridDotDark,
    glow: {
      dev: colorNames.emeraldGlow,
      qa: colorNames.cyanGlow,
    },
    nav: colorNames.navDark,
    dev: {
      accent: colorNames.emerald400,
      soft: colorNames.emeraldSoftDark,
      border: colorNames.emeraldBorderDark,
    },
    qa: {
      accent: colorNames.cyan400,
      soft: colorNames.cyanSoftDark,
      border: colorNames.cyanBorderDark,
    },
    buttonLink: {
      text: colorNames.slate950,
      border: colorNames.inkBorder,
      shadow: colorNames.whiteTransparent,
    },
    boxBackground: colorNames.inkPanel,
    headerLine: colorNames.inkBorder,
    tile: {
      border: colorNames.inkBorder,
      borderHover: colorNames.cyanBorderDark,
      header: colorNames.slate200,
    },
    themeSwitch: {
      background: colorNames.slate800,
      border: colorNames.slate500,
      icon: colorNames.cyan700,
    },
    terminal,
    contact: {
      ...contact,
      background: colorNames.inkPanel,
    },
  },
};
