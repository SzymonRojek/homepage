import { useEffect, useRef, useState } from "react";
import { footerId, footerLinksId } from "../Footer/ids";
import {
  floorHeight,
  restsAboveFooter,
  scrollProgress,
  showAfter,
} from "./progress";
import { Link, Ring, Track, Progress, Arrow, ringLength } from "./styled";

// A round link back to the top, fixed on the right once the page has moved.
// Its edge is a ring that fills as the page scrolls, so a visitor sees how
// far down they are. At the end of the page it rests above the footer (or,
// in a short window, above the footer's last line), so it never covers the
// GitHub and LinkedIn icons or the theme switch.
// The build renders it hidden and empty; the browser fills it in an effect,
// so the static copy and the first render agree. The ring and the place are
// written straight to the elements, not through state: they change on every
// frame of a scroll, and only "shown" needs React.
export const BackToTop = () => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const progressRef = useRef<SVGCircleElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const link = linkRef.current;
      const ring = progressRef.current;

      if (!link || !ring) {
        return;
      }

      const progress = scrollProgress(
        window.scrollY,
        document.documentElement.scrollHeight,
        window.innerHeight,
      );
      ring.style.strokeDashoffset = String(ringLength * (1 - progress));

      const footer = document.getElementById(footerId);
      const floor =
        footer &&
        restsAboveFooter(
          footer.offsetHeight,
          link.offsetHeight,
          window.innerHeight,
        )
          ? footer
          : document.getElementById(footerLinksId);
      const under = floor
        ? floorHeight(floor.getBoundingClientRect().top, window.innerHeight)
        : 0;
      link.style.setProperty("--floor", `${under}px`);

      setShown(window.scrollY > showAfter);
    };

    // One update a frame, however many scroll events arrive in it.
    const schedule = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <Link
      ref={linkRef}
      href="#top"
      aria-label="Back to top"
      // Hidden in words as well as in CSS, so it is out of the tab order and
      // away from screen readers even where the styles have not arrived.
      aria-hidden={shown ? undefined : true}
      tabIndex={shown ? undefined : -1}
      $shown={shown}
    >
      <Ring viewBox="0 0 48 48" aria-hidden="true">
        <Track cx="24" cy="24" r="22" pathLength={ringLength} />
        <Progress
          ref={progressRef}
          cx="24"
          cy="24"
          r="22"
          pathLength={ringLength}
        />
        <Arrow d="M24 32V17M17.5 23.5 24 17l6.5 6.5" />
      </Ring>
    </Link>
  );
};
