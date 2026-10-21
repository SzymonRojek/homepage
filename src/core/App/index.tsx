import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { themeLight, themeDark } from "./theme";
import { Homepage } from "../../features/Homepage";
import { useAppSelector } from "../hooks";
import { selectDarkTheme } from "../../common/themeSlice";
import { useSystemTheme } from "../../common/useSystemTheme";
import { useDocumentTheme } from "../../common/useDocumentTheme";
import { usePrerenderCleanup } from "../../common/usePrerenderCleanup";
import { ErrorBoundary } from "../ErrorBoundary";

export const App = () => {
  const isDarkTheme = useAppSelector(selectDarkTheme);
  useSystemTheme();
  useDocumentTheme(isDarkTheme);
  usePrerenderCleanup();

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <ErrorBoundary>
        <Homepage />
      </ErrorBoundary>
    </ThemeProvider>
  );
};
