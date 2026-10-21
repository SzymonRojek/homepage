// The page's sections in order, by the id of their heading. Each heading
// shows its number in front of its name ("01 / How I test"), as in
// the top bar's order; keep this list in step with the page (index.tsx).
export const sectionOrder = [
  "how-i-use-ai",
  "how-i-test",
  "projects",
  "experience",
  "skills",
  "recommendations",
] as const;

export type SectionId = (typeof sectionOrder)[number];

export const sectionNumber = (id: SectionId) =>
  String(sectionOrder.indexOf(id) + 1).padStart(2, "0");
