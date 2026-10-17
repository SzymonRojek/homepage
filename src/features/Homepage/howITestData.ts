export interface TestingStep {
  title: string;
  // One short line under the title: what the step is about.
  summary: string;
  // What the step covers, as short ticked points to skim.
  points: string[];
}

// How I test at work, from the experience section and my own description.
// Clients, systems and figures are confidential: describe the approach only.
export const howITest = {
  title: "How I test at work",
  // In my own words: what I enjoy most about testing. It opens the section,
  // before the method. No systems, no figures.
  story: {
    title: "Beyond the obvious bugs",
    // The word in the title set in yellow.
    highlight: "obvious",
    // Shortened on 2026-10-17 from two paragraphs, keeping all three points:
    // bugs in the stored procedures, reading them against the requirements
    // and mapping documents, and going through cases with the developers.
    paragraphs: [
      "I've found bugs not only in the migrated data, but in the stored procedures that move it. When there was no data to test yet, I read the procedures against the requirements and mapping documents, questioned the solution designers, and walked through tricky cases with the developer who wrote them.",
    ],
    // The last line, shown large next to the title.
    punchline: "The best bugs were hiding in the code itself.",
  },
  // Shortened on 2026-10-17 from a paragraph each into a line and a few
  // points, so a recruiter can skim them; same facts, nothing added.
  steps: [
    {
      title: "Understand the rules, then design the tests",
      summary:
        "Requirements, mapping documents and transformation rules become test cases.",
      points: [
        "Positive and negative cases",
        "Each traced back to the rule it checks",
        "Peer-reviewed before anything is run",
      ],
    },
    {
      title: "Reconcile with SQL and check the logic",
      summary: "A number can match and still be wrong.",
      points: [
        "Record counts, totals and field-by-field values",
        "Empty values, duplicates and relationships between tables",
        "Results checked against the business rules",
        "The stored procedures that transform the data",
      ],
    },
    {
      title: "Trace each defect to its root cause",
      summary:
        "The data, the transformation logic, a stored procedure or the requirement itself?",
      points: [
        "Logged in Azure DevOps",
        "Reproduction steps and evidence attached",
        "The fix retested with the developers",
      ],
    },
  ] satisfies TestingStep[],
};
