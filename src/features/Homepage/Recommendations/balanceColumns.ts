// A card's height is guessed from its text, since the build can't measure it:
// the byline, padding and the gap to the next card take about as much room
// as this many characters of the quote, and each new paragraph adds its
// spacing and a part-filled last line.
const cardExtra = 390;
const paragraphExtra = 60;

const estimateHeight = (quote: string) =>
  quote.length + cardExtra + (quote.split("\n\n").length - 1) * paragraphExtra;

export interface Placed<T> {
  item: T;
  // Its place in the full list (newest first), kept for the one-column
  // layout.
  order: number;
}

// Two columns of about the same height. The newest card goes left and the
// next one right, so they sit side by side at the top; every way of placing
// the rest is tried (a handful of cards, so a few dozen splits) and the one
// whose columns end closest together wins. Each column stays newest first.
export const balanceColumns = <T extends { quote: string }>(
  items: T[],
): [Placed<T>[], Placed<T>[]] => {
  const heights = items.map(({ quote }) => estimateHeight(quote));
  const rest = Math.max(items.length - 2, 0);
  let best = { sides: [] as number[], gap: Infinity };

  for (let split = 0; split < 2 ** rest; split++) {
    // Bit n of the split puts card n + 2 on the right.
    const sides = items.map((_, index) =>
      index < 2 ? index : (split >> (index - 2)) & 1,
    );
    const gap = Math.abs(
      heights.reduce(
        (sum, height, index) => sum + (sides[index] ? -height : height),
        0,
      ),
    );
    if (gap < best.gap) best = { sides, gap };
  }

  const columns: [Placed<T>[], Placed<T>[]] = [[], []];
  items.forEach((item, order) => {
    columns[best.sides[order]].push({ item, order });
  });
  return columns;
};
