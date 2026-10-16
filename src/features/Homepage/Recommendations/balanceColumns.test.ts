import { describe, expect, it } from "vitest";
import { balanceColumns } from "./balanceColumns";

const card = (name: string, length: number, paragraphs = 1) => ({
  name,
  quote: Array.from({ length: paragraphs }, () =>
    "x".repeat(Math.round(length / paragraphs)),
  ).join("\n\n"),
});

const names = (column: { item: { name: string } }[]) =>
  column.map(({ item }) => item.name);

describe("balanceColumns", () => {
  it("puts the newest two side by side at the top", () => {
    const [left, right] = balanceColumns([card("A", 100), card("B", 900)]);

    expect(names(left)).toEqual(["A"]);
    expect(names(right)).toEqual(["B"]);
  });

  it("picks the split whose columns end closest together", () => {
    const [left, right] = balanceColumns([
      card("A", 850),
      card("B", 450),
      card("C", 750),
      card("D", 400),
      card("E", 250),
    ]);

    // Card by card, C would go right as the shorter column so far; placing
    // it under A and the two short ones on the right is more even.
    expect(names(left)).toEqual(["A", "C"]);
    expect(names(right)).toEqual(["B", "D", "E"]);
  });

  it("counts a card's paragraphs as well as its words", () => {
    const [, right] = balanceColumns([
      card("A", 600),
      card("B", 590, 4),
      card("C", 100),
    ]);

    // Shorter than A by its words, but its three extra paragraphs make
    // the right column the taller one, so C goes left.
    expect(names(right)).toEqual(["B"]);
  });

  it("keeps each card's place in the full list, newest first", () => {
    const [left, right] = balanceColumns([
      card("A", 850),
      card("B", 450),
      card("C", 750),
    ]);

    expect(left.map(({ order }) => order)).toEqual([0]);
    expect(right.map(({ order }) => order)).toEqual([1, 2]);
  });

  it("handles fewer than two cards", () => {
    expect(balanceColumns([])).toEqual([[], []]);
    expect(names(balanceColumns([card("A", 100)])[0])).toEqual(["A"]);
  });
});
