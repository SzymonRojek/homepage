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
  highlight:
    "The largest I've tested: a large migration of client data from one system to another.",
  steps: [
    {
      title: "Understand the mapping and the business",
      text: "I turn requirements, mapping documents and transformation rules into test scenarios, each traceable back to the rule it checks.",
    },
    {
      title: "Design the tests",
      text: "Positive and negative cases for every rule, estimated and peer-reviewed before anything is run.",
    },
    {
      title: "Reconcile source and target with SQL",
      text: "Record counts, totals, field-by-field values, empty values, duplicates and relationships between tables, across databases, extracts and reconciliation reports.",
    },
    {
      title: "Check the business logic, not only the data",
      text: "A number can match and still be wrong. I check results against the business rules and read the stored procedures that transform the data.",
    },
    {
      title: "Trace each defect to its root cause",
      text: "Is it the data, the transformation logic, a stored procedure or the requirement itself? I log it in Azure DevOps with reproduction steps and evidence, and retest the fix with the developers.",
    },
    {
      title: "Use AI with a human in charge",
      text: "GitHub Copilot agents for code analysis and repetitive work, agentic testing procedures with validation steps, and reviewing tests that AI agents write from user stories to find their gaps.",
    },
  ] satisfies TestingStep[],
  whyItMatters:
    "In financial data, one wrong field can mean a wrong holding or a wrong payment. Reconciliation proves that nothing was lost or changed on the way.",
};
