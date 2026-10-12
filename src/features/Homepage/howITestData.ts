export interface TestingStep {
  title: string;
  text: string;
}

// How I test at work, from the experience section and my own description.
// Clients, systems and figures are confidential: describe the approach only.
export const howITest = {
  title: "How I test at work",
  intro:
    "At Equiniti I test financial and shareholder data as it moves between systems. I try to look at a migration from above, so I see the same record as data, as business logic and as code. Clients and figures are confidential, so this is my approach, not a project report.",
  // In my own words: what I enjoy most about testing. No systems, no figures.
  story: {
    title: "Beyond the obvious bugs",
    // The word in the title set in yellow.
    highlight: "obvious",
    paragraphs: [
      "More than once I found bugs not only in the data that came with a code drop after a deployment, but in the stored procedures themselves.",
      "Sometimes there was no data to test yet. I like to analyse and dig, so I read the stored procedures and checked them against the business requirements and the mapping documents, and asked the solution designers more questions. Several times I set up a call with the developer who wrote the code, to go through an interesting case together.",
    ],
    // The last line, shown large next to the title.
    punchline:
      "Sometimes I was right. That gave me far more satisfaction than finding the obvious bugs.",
  },
  steps: [
    {
      title: "Understand the rules, then design the tests",
      text: "I turn requirements, mapping documents and transformation rules into positive and negative test cases, each traceable back to the rule it checks and peer-reviewed before anything is run.",
    },
    {
      title: "Reconcile with SQL and check the logic",
      text: "Record counts, totals, field-by-field values, empty values, duplicates and relationships between tables. A number can match and still be wrong, so I also check results against the business rules and read the stored procedures that transform the data.",
    },
    {
      title: "Trace each defect to its root cause",
      text: "Is it the data, the transformation logic, a stored procedure or the requirement itself? I log it in Azure DevOps with reproduction steps and evidence, and retest the fix with the developers.",
    },
  ] satisfies TestingStep[],
  whyItMatters:
    "In financial data, one wrong field can mean a wrong holding or a wrong payment. Reconciliation proves that nothing was lost or changed on the way.",
};
