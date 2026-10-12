import { useEffect } from "react";

// The page renders with JavaScript, so on a first visit to an address with a
// #hash (for example a CV link to ?view=developer#projects) the browser looks
// for the section before it exists and stays at the top. Once the page has
// rendered, scroll to it.
export const useScrollToHash = () => {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));

    if (id) {
      document.getElementById(id)?.scrollIntoView();
    }
  }, []);
};
