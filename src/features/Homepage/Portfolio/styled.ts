import styled from "styled-components";
import { BigLineRow } from "../Section";

// A sentence of the title in its side's colour: terracotta for code, green
// for testing (4.8:1 on sand; peach and mint in the dark theme).
export const Sentence = styled(BigLineRow)<{ $side: "code" | "test" }>`
  color: ${({ theme, $side }) =>
    $side === "code" ? theme.colors.dev.accent : theme.colors.qa.accent};
`;
