import type { SVGProps } from "react";

// The mark for a recommendation that arrived by email: an at-sign on the
// LinkedIn glyph's own 24×24 rounded tile, with the "@" cut out of the fill
// exactly as the "in" is, so the two read as one family. The glyph is set in
// the page's mono face and knocked out through a mask, so it needs no
// hand-drawn path. A mask is referenced by id, so each card passes one of
// its own: two cards sharing an id would leave a duplicate id in the page,
// and the second tile would be cut by the first card's mask.
export const EmailMark = ({
  maskId,
  ...props
}: SVGProps<SVGSVGElement> & { maskId: string }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <mask id={maskId}>
      <rect width="24" height="24" rx="1.73" fill="#fff" />
      <text
        x="12"
        y="17.6"
        textAnchor="middle"
        fontFamily='"Geist Mono", ui-monospace, SFMono-Regular, Menlo, monospace'
        fontSize="22"
        fontWeight="700"
        fill="#000"
      >
        @
      </text>
    </mask>
    <rect
      width="24"
      height="24"
      rx="1.73"
      fill="currentColor"
      mask={`url(#${maskId})`}
    />
  </svg>
);
