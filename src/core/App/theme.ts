const colorNames = {
  ink: "#0B0F17",
  inkPanel: "#111827",
  inkTerminal: "#0B1220",
  slate50: "#F8FAFC",
  slate100: "#F1F5F9",
  slate200: "#E2E8F0",
  slate300: "#CBD5E1",
  slate400: "#94A3B8",
  slate500: "#64748B",
  slate600: "#475569",
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
  teal300: "#5EEAD4",
  teal700: "#0F766E",
  emeraldGlow: "rgba(16, 185, 129, 0.10)",
  cyanGlow: "rgba(6, 182, 212, 0.10)",
  emeraldSoftDark: "rgba(16, 185, 129, 0.08)",
  emeraldBorderDark: "rgba(52, 211, 153, 0.30)",
  cyanSoftDark: "rgba(6, 182, 212, 0.08)",
  cyanBorderDark: "rgba(34, 211, 238, 0.30)",
  gridDotLight: "rgba(15, 23, 42, 0.07)",
  gridDotDark: "rgba(255, 255, 255, 0.06)",
  navLight: "rgba(248, 250, 252, 0.85)",
  navDark: "rgba(11, 15, 23, 0.80)",
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

export const themeLight = {
  ...common,
  colors: {
    primary: colorNames.teal700,
    textPrimary: colorNames.slate900,
    muted: colorNames.slate600,
    site: {
      background: colorNames.slate50,
      text: colorNames.slate600,
    },
    gradient,
    onGradient: colorNames.slate950,
    gradientText: `linear-gradient(90deg, ${colorNames.emerald700}, ${colorNames.cyan700})`,
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
      border: colorNames.slate200,
      shadow: colorNames.teal300,
    },
    boxBackground: colorNames.white,
    headerLine: colorNames.slate200,
    tile: {
      border: colorNames.slate200,
      borderHover: colorNames.teal300,
      header: colorNames.slate900,
    },
    themeSwitch: {
      background: colorNames.slate200,
      border: colorNames.slate400,
      icon: colorNames.teal700,
    },
    terminal,
    contact,
  },
};

export const themeDark: typeof themeLight = {
  ...common,
  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.35)",
  colors: {
    primary: colorNames.teal300,
    textPrimary: colorNames.slate100,
    muted: colorNames.slate400,
    site: {
      background: colorNames.ink,
      text: colorNames.slate300,
    },
    gradient,
    onGradient: colorNames.slate950,
    gradientText: `linear-gradient(90deg, ${colorNames.emerald400}, ${colorNames.cyan400})`,
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
      border: colorNames.slate800,
      shadow: colorNames.whiteTransparent,
    },
    boxBackground: colorNames.inkPanel,
    headerLine: colorNames.slate800,
    tile: {
      border: colorNames.slate800,
      borderHover: colorNames.teal300,
      header: colorNames.slate100,
    },
    themeSwitch: {
      background: colorNames.slate800,
      border: colorNames.slate500,
      icon: colorNames.teal700,
    },
    terminal,
    contact: {
      ...contact,
      background: colorNames.inkPanel,
    },
  },
};
