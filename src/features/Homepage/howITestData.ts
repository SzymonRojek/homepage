export interface TestingStep {
  title: string;
  // One short line under the title: what the step is about.
  summary: string;
  // What the step covers, as short ticked points to skim.
  points: string[];
}

// How I test, from the experience section and my own description.
// Clients, systems and figures are confidential: describe the approach only.
export const howITest = {
  title: "How I test",
  // In my own words: what I enjoy most about testing. It opens the section,
  // before the method. No systems, no figures.
  story: {
    title: "Beyond the obvious bugs",
    // The word in the title set in yellow.
    highlight: "obvious",
    // Shortened on 2026-10-17 from two paragraphs, keeping all three points:
    // bugs in the stored procedures, reading them against the requirements
    // and mapping documents, and going through cases with the developers.
    // The case now leads it (2026-10-23): the hero promises "I don't stop at
    // green", and one report that ran and was still wrong proves it better
    // than the approach does. It moved up from the last point of the third
    // stage, so each fact still lives in one place. No client, no system, no
    // figures.
    paragraphs: [
      "A report that ran and produced its numbers was still missing accounts: one misspelt word in a WHERE clause. I've found bugs not only in the migrated data but in the stored procedures that move it. When there was no data to test yet, I read them against the requirements and mapping documents, questioned the solution designers, and walked through tricky cases with the developer who wrote them.",
    ],
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
        "One test per logical branch, not several outcomes joined by OR in one test",
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
        "A report that was produced is not a report that is right: record counts, column names and false matches",
      ],
    },
    {
      title: "Trace each defect to its root cause",
      summary:
        "I find where it comes from: the data, the transformation logic, a stored procedure or the requirement itself.",
      points: [
        "Logged in Azure DevOps",
        "Reproduction steps and evidence attached",
        "The fix retested with the developers",
      ],
    },
  ] satisfies TestingStep[],
};
