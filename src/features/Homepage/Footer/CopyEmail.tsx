import { useEffect, useState } from "react";
import { email } from "../email";
import CopyIcon from "./copy.svg?react";
import TickIcon from "./tick.svg?react";
import {
  ActionRow,
  CopyAction,
  AddressText,
  CopiedNote,
  CopyStatus,
} from "./styled";

type Result = "idle" | "copied" | "failed";

// The footer's one action: the address, and clicking it copies. It replaced
// a mailto: "Email me" on 2026-10-20, which did nothing at all for a visitor
// whose machine has no mail app registered, and told them nothing either.
// The clipboard is only touched in the click handler, never on import or
// while rendering, so the page still renders in Node for the prerender.
export const CopyEmail = () => {
  const [result, setResult] = useState<Result>("idle");

  // Back to the copy icon after a moment, so the button never claims a
  // clipboard state that may since have changed.
  useEffect(() => {
    if (result === "idle") return;
    const timer = setTimeout(() => setResult("idle"), 2400);
    return () => clearTimeout(timer);
  }, [result]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setResult("copied");
    } catch {
      // No clipboard: an old browser, a page served over plain http, or a
      // refused permission. Say so, rather than appearing to do nothing;
      // the address is selectable, so there is still a way to take it.
      setResult("failed");
    }
  };

  const failed = result === "failed";

  return (
    <ActionRow>
      <CopyAction
        type="button"
        onClick={copy}
        aria-label={`Copy my email address, ${email}`}
      >
        {result === "copied" ? (
          <TickIcon aria-hidden="true" />
        ) : (
          <CopyIcon aria-hidden="true" />
        )}
        <AddressText>{email}</AddressText>
      </CopyAction>
      {/* The pill is for the eye only: screen readers hear the live region
          below instead, so the news is not given twice. */}
      <CopiedNote
        $shown={result !== "idle"}
        $failed={failed}
        aria-hidden="true"
      >
        {failed ? "Select it to copy" : "Copied"}
      </CopiedNote>
      <CopyStatus role="status" aria-live="polite">
        {result === "copied" && "Email address copied."}
        {failed && "Could not copy. Select the address to copy it yourself."}
      </CopyStatus>
    </ActionRow>
  );
};
