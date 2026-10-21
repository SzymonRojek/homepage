import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { afterEach, describe, expect, it, vi } from "vitest";
import { themeLight } from "../../../core/App/theme";
import { email } from "../email";
import { CopyEmail } from "./CopyEmail";

// jsdom has no clipboard, so each test says what writeText should do.
const withClipboard = (writeText: () => Promise<void>) =>
  Object.defineProperty(navigator, "clipboard", {
    value: { writeText },
    configurable: true,
  });

const renderCopyEmail = () =>
  render(
    <ThemeProvider theme={themeLight}>
      <CopyEmail />
    </ThemeProvider>,
  );

const button = () =>
  screen.getByRole("button", { name: `Copy my email address, ${email}` });

afterEach(() => {
  vi.restoreAllMocks();
});

describe("CopyEmail", () => {
  it("puts the address on the clipboard and says so", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    withClipboard(writeText);
    renderCopyEmail();

    fireEvent.click(button());

    expect(writeText).toHaveBeenCalledWith(email);
    await waitFor(() =>
      expect(screen.getByRole("status")).toHaveTextContent(
        "Email address copied.",
      ),
    );
  });

  it("tells the visitor to select it when the clipboard refuses", async () => {
    // An old browser, a page served over plain http, or a refused
    // permission. Saying nothing would leave a screen reader user with no
    // way to tell whether the copy had worked.
    withClipboard(vi.fn().mockRejectedValue(new Error("denied")));
    renderCopyEmail();

    fireEvent.click(button());

    await waitFor(() =>
      expect(screen.getByRole("status")).toHaveTextContent(
        "Could not copy. Select the address to copy it yourself.",
      ),
    );
    // Never the mint "Copied": on this site green means passing.
    expect(screen.getByText("Select it to copy")).toBeInTheDocument();
  });

  it("shows the address, so it can be read even if copying fails", () => {
    withClipboard(vi.fn().mockResolvedValue(undefined));
    renderCopyEmail();

    expect(button()).toHaveTextContent(email);
  });
});
