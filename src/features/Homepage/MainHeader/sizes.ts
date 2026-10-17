// The hero's sizes that follow the band's width (cqi: the Band is the
// container), in one place, so the headline and the photo stay in balance as
// the window narrows.

// The headline's font size: 32px at 360px, 47px at 768px, 80px from about
// 1256px (see Headline).
export const headlineSize = "clamp(32px, max(19px + 3.6cqi, 7cqi - 8px), 80px)";

// "I don’t stop at green." on one line is 9.76 times its font size wide (the
// tilted block included); the text column never gets narrower than that, so
// the photo can't push the headline onto two lines.
export const headlineWidth = `calc(9.76 * ${headlineSize})`;

// The photo's height: 375px beside the 80px headline, shrinking at under half
// the headline's rate, so it stays about as tall as the text beside it (the
// text barely shrinks: only the headline follows the width). It used to
// follow the band's width alone and fell to two thirds of the text's height
// by 768px, looking small next to the headline.
export const photoHeight = `calc(225px + 1.875 * ${headlineSize})`;
