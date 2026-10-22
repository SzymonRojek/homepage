// A #hash comes from the address bar, so it can be anything: "#%" and
// "#%E0%A4" are not valid escaping and make decodeURIComponent throw. Both
// readers of the hash run as the page starts (index.tsx, useInitialScroll),
// where a throw used to leave the visitor with a page that never came alive.
export const decodeHash = (hash: string): string => {
  try {
    return decodeURIComponent(hash);
  } catch {
    // Not valid escaping: take it as it stands. It then matches no case
    // study and no section, which is what a nonsense address deserves.
    return hash;
  }
};
