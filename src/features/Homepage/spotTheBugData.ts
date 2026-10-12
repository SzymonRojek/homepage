export interface MigratedField {
  field: string;
  before: string;
  after: string;
  // Why this value is fine after all, shown when a visitor picks it.
  fine?: string;
}

export interface BugLevel {
  name: string;
  fields: MigratedField[];
  // Quick checks that pass anyway: why a match proves little.
  checks: string[];
  // The explanation once the bug is found.
  found: string;
}

// Made-up client records, not real data. Each level hides one bug that a
// quick check would pass; the harder the level, the more the other values
// look suspicious while being right.
export const spotTheBug = {
  title: "Spot the bug",
  intro:
    "Each record below moved to a new system and passed a quick check. One value is still wrong. Pick a level and find the value you'd report.",
  caption: "A made-up client record, before and after the migration",
  levels: [
    {
      name: "Easy",
      fields: [
        {
          field: "Name",
          before: "Łukasz Nowak",
          after: "Łukasz Nowak",
          fine: "Not this one: the name came across exactly.",
        },
        {
          field: "Date of birth",
          before: "03/04/1981",
          after: "03/04/1981",
          fine: "Not this one: the date didn't change.",
        },
        {
          field: "Shares held",
          before: "1,250",
          after: "125",
        },
        {
          field: "Dividend paid",
          before: "£84.20",
          after: "£84.20",
          fine: "Not this one: same amount, same currency.",
        },
      ],
      checks: ["Records: 1 = 1"],
      found:
        "1,250 shares became 125: a digit was lost on the way. Counting the records would never notice it.",
    },
    {
      name: "Medium",
      fields: [
        {
          field: "Name",
          before: "Łukasz Nowak",
          after: "Łukasz Nowak",
          fine: "Not this one: the Polish Ł came across intact.",
        },
        {
          field: "Date of birth",
          before: "03/04/1981",
          after: "1981-03-04",
        },
        {
          field: "Shares held",
          before: "1,250",
          after: "1250",
          fine: "Not this one: 1,250 and 1250 are the same number. Only the format changed.",
        },
        {
          field: "Dividend paid",
          before: "£84.20",
          after: "84.20 GBP",
          fine: "Not this one: £84.20 and 84.20 GBP are the same amount, written differently.",
        },
      ],
      checks: ["Records: 1 = 1", "Total paid: £84.20 = 84.20 GBP"],
      found:
        "03/04/1981 is 3 April in the UK, but the new system read it as 4 March. The count and the total still match, which is why I compare migrated data field by field with SQL.",
    },
    {
      name: "Hard",
      fields: [
        {
          field: "Name",
          before: "Zoë Kowalska",
          after: "Zoë Kowalska",
          fine: "Not this one: the ë came across intact.",
        },
        {
          field: "Date of birth",
          before: "03/04/1981",
          after: "1981-04-03",
          fine: "Not this one: 3 April 1981, written year first. That's correct.",
        },
        {
          field: "Shares held",
          before: "1,250",
          after: "1250",
          fine: "Not this one: the same number without the comma.",
        },
        {
          field: "Dividend paid",
          before: "£84.20",
          after: "84.20 EUR",
        },
      ],
      checks: ["Records: 1 = 1", "Total paid: 84.20 = 84.20"],
      found:
        "The amount is right, but pounds became euros. A check that compares only the numbers says it matches. I check what a value means, not just its digits.",
    },
  ] satisfies BugLevel[],
};
