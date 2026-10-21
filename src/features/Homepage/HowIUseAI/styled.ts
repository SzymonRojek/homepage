import styled from "styled-components";
import { BandSection, SectionLabel } from "../Section";
import { StoryTitle } from "../HowITest/styled";

// The first section, right under the hero, with no page colour between the
// near-black and its band: the deep brand green in the light theme, so the
// hero steps down into it, and a step lighter in the dark one, where How I
// test below is the deep green. Its colours come from theme.colors.ai, since
// primary is the deep green in the light theme and would vanish on the band.
export const Block = styled(BandSection)`
  margin-top: 0;
  color: ${({ theme }) => theme.colors.ai.text};
`;

// The numbered label takes the band's yellow instead of primary.
export const Label = styled(SectionLabel)`
  color: ${({ theme }) => theme.colors.ai.accent};
`;

// The section's big line, as "Beyond the obvious bugs" opens How I test.
export const Heading = styled(StoryTitle)`
  max-width: 12em;
  color: ${({ theme }) => theme.colors.ai.text};
  /* StoryTitle is an h3 and takes the display face from the global h1-h4
     rule; this one renders as a <p>, so it has to ask for it. Without this
     it fell back to Geist, which has no metric-matched fallback at this
     size, rewrapped when the real font arrived and shifted the page by
     0.053 (e2e/fonts.spec.ts, 2026-10-20). */
  font-family: ${({ theme }) => theme.fontDisplay};

  /* StoryTitle sizes itself from 100cqi on phones, but that needs a
     container-type ancestor, which How I test has (Story) and this section
     does not: cqi then resolved against the viewport (390px) rather than the
     column (358px), so the line came out ~2px too wide, wrapped in the real
     font and not in the fallback, and the page moved by 0.055
     (e2e/fonts.spec.ts, 2026-10-20). The column, explicitly: the gutters are
     16px a side. Anything up to 12.0em fits on one line at this divisor,
     with the marker's 0.2em of padding counted; the line before this one
     measured 10.96em in Bricolage 800. Re-measure whenever the line or the
     font changes, and let e2e/fonts.spec.ts confirm it. */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: min(32px, calc((100vw - 32px) / 12.2));
  }
`;

// The two columns, as a real table: what the tool does against what I do.
// No ticked points and no stage dividers, so it reads nothing like How I
// test above it. The rows are split by thin cream lines and the columns by
// one down the middle; my column is cream and the agent's muted, so the
// weight sits on my side without a word being spent on it.
export const Columns = styled.table`
  width: 100%;
  margin-top: 48px;
  border-collapse: collapse;
  text-align: left;

  th,
  td {
    padding: 0 0 36px;
    vertical-align: top;
  }

  /* No rules between the rows and none down the middle: the user asked on
     2026-10-19 for the grey lines to go, so the pairs are held apart by
     space alone and only my side keeps its yellow rule. */
  tbody tr:last-child td {
    padding-bottom: 0;
  }

  /* The two columns are deliberately unequal: the agent's is narrow, small
     and muted, mine is wide, larger and cream, with a yellow rule down it.
     The asymmetry is the section's point, so the design makes it. */
  th:first-child,
  td:first-child {
    width: 36%;
    padding-right: 32px;
  }

  th:last-child,
  td:last-child {
    width: 64%;
    padding-left: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    th:last-child,
    td:last-child {
      padding-left: 24px;
    }

    th:first-child,
    td:first-child {
      padding-right: 24px;
    }
  }

  /* On phones and small tablets the pairs stack: each row is one block, and
     each cell carries its column's name above it, since the headings at the
     top are then too far away to connect. */
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    display: block;
    margin-top: 36px;

    /* Off screen, not display: none. Stacking needs display: block, which
       would strip the table's semantics, so the cells carry explicit ARIA
       roles and the column names must stay in the accessibility tree for
       screen readers to pair them with. Sighted visitors get the name above
       each cell instead (td::before below). */
    thead {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      overflow: hidden;
      clip-path: inset(50%);
      white-space: nowrap;
    }

    tbody,
    tbody tr {
      display: block;
    }

    tbody tr {
      padding: 0 0 32px;
    }

    tbody tr:last-child {
      padding-bottom: 0;
    }

    td,
    td:first-child,
    td:last-child {
      display: block;
      width: auto;
      padding: 0;
    }

    td + td {
      margin-top: 14px;
    }

    td::before {
      content: attr(data-column);
      display: block;
      margin-bottom: 6px;
      font-family: ${({ theme }) => theme.fontMono};
      font-size: 12px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.ai.accent};
    }
  }
`;

// The column headings: small monospace capitals, like the section's label.
export const ColumnName = styled.th`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.ai.accent};
`;

// What the tool does: small and muted, so the eye passes over it.
export const AgentCell = styled.td`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.ai.body};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14.5px;
  }
`;

// What I do: cream and larger, the side the eye lands on.
export const MeCell = styled.td`
  font-size: 18px;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.ai.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    font-size: 17px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

// A yellow rule down my side of each pair, inside the column's own divider,
// so my answer reads as the one that counts.
export const MeText = styled.span`
  display: block;
  padding-left: 16px;
  border-left: 2px solid ${({ theme }) => theme.colors.ai.accent};
`;

// The table's caption: read by screen readers, off screen for everyone else
// (the column headings and the section's line already say it on the page).
export const Caption = styled.caption`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;
