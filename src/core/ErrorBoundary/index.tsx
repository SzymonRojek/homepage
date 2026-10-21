import { Component, type ErrorInfo, type ReactNode } from "react";
import { email } from "../../features/Homepage/email";
import { profile } from "../../features/Homepage/profile";
import { githubProfileUrl } from "../../features/Homepage/Portfolio/githubUserName";
import { Fallback, Title, Note, Address, Links } from "./styled";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  failed: boolean;
}

// The page's last line of defence. React unmounts the whole tree when a
// render throws, so without this a recruiter would be left looking at a
// blank page; this keeps the one thing they came for on screen. It renders
// its children untouched, so the build's static copy of the page and the
// copy the browser takes over are the same (src/index.tsx).
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { failed: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { failed: true };
  }

  // A static site has nowhere to send this: the visitor's console and the
  // browser's own reporting are all there is.
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("The page failed to render.", error, info.componentStack);
  }

  render() {
    if (!this.state.failed) {
      return this.props.children;
    }

    return (
      <Fallback>
        <Title>This page didn’t load properly.</Title>
        <Note>
          Reloading usually fixes it. If it doesn’t, here is how to reach me.
        </Note>
        <Address>{email}</Address>
        <Links>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={githubProfileUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </Links>
      </Fallback>
    );
  }
}
