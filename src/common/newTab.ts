// Nothing tells someone using a screen reader that a link opens a new tab:
// target="_blank" is silent, and the ↗ arrow on the Demo button is decoration.
// So every external link says so, in the same words (WCAG G201), which live
// here alone, appended to the link's aria-label. A label, not hidden words
// inside the link: a hidden span's text is joined to the link's own without a
// space in jsdom and with one in a browser, so the name read out would differ
// between the tests and the page.
export const newTabHint = "(opens in a new tab)";

// For a link named by aria-label: "Demo: Talent Outreach (opens in a new
// tab)". The visible words stay at the front, so the name still starts with
// what the link says on screen (WCAG 2.5.3, Label in Name).
export const withNewTab = (name: string) => `${name} ${newTabHint}`;
