export interface AIRow {
  // What the tool does.
  agent: string;
  // My part in a few words, bold above my answer, so the column can be read
  // in four glances.
  lead: string;
  // What I do: the column that carries the section, in my own words.
  me: string;
}

// How I use AI, as two columns: what the tool does and what I do.
// The rows run from the strongest claim down since 2026-11-21: the one I
// built, then testing what an agent wrote, then using one daily, then
// deciding whether an agent is worth it at all. They ran the other way, in
// decision order (the user's call on 2026-10-20: judge, use, doubt, build),
// and were reversed at the user's go-ahead because a visitor who skims reads
// the first row and samples the rest, and the first row then said only that
// I sometimes skip the agent, with the result (a real undeclared change
// caught) last. The leads were added the same day; each says only what its
// row already claims.
// The split is the point of the section, so the design makes it instead of
// the text stating it. Every row is work the user confirmed himself on
// 2026-10-19: Copilot daily, the spec-change check he built, the agent pilot
// other engineers built and he tested, and deciding when an agent is not
// worth the setup. Clients, systems, internal tool names and colleagues are
// confidential: describe the approach only, never what the documents hold.
export const howIUseAI = {
  title: "How I use AI",
  // The section's big line: the point of the whole section. It covers all
  // four rows, the first one included, where "The questions are mine."
  // only really covered the second (the user's call, 2026-10-20).
  heading: "The judgement is mine",
  // The word in the line on the yellow marker.
  headingHighlight: "mine",
  // The two column headings, above the rows.
  columns: { agent: "The agent", me: "Me" },
  // No diagram in this section, by the user's decision on 2026-10-19. Two
  // were tried and dropped: a loop between the agent and me (its arrows were
  // labelled with verbs, so it read as "the agent writes to me", and it
  // repeated the table's own headings), and a flow of how the spec-change
  // check works. The two columns say it better on their own. Don't add one
  // back unless the user asks.
  rows: [
    {
      agent:
        "Compares the document the tests were prepared from with the latest version, and flags what changed.",
      lead: "I built this one",
      me: "Requirements sometimes changed without the test team being told, so I built it: the agent instructions and the pipeline. It caught a real undeclared change, and coverage is now checked against the current specification before the tests run.",
    },
    {
      agent:
        "Writes tests from a user story and a mapping document: a pilot our engineers built and released to us.",
      lead: "I test what it writes",
      me: "I run it on real work and compare what it wrote with what I would have written, down to the steps. What is wrong or missing goes back to the engineers building it.",
    },
    {
      agent:
        "Reads stored procedures and mapping documents, and looks for discrepancies. Left to itself, it finds nothing.",
      lead: "I ask the questions",
      me: "What it finds is only as good as the question I ask and the context I give it. Those come from the business rules, from curiosity, and from not settling for the first question that comes to mind. I check every finding myself before it becomes a defect.",
    },
    {
      agent:
        "Needs briefing and setup before it can start, whatever the size of the job.",
      lead: "I decide if it’s worth it",
      me: "I read what needs testing first, then decide whether an agent is worth it. It depends on the problem: sometimes I write the test faster by hand than I could brief an agent to write it.",
    },
  ] satisfies AIRow[],
};
