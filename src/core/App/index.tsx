import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { themeLight, themeDark } from "./theme";
import { Homepage } from "../../features/Homepage";
import { useAppSelector } from "../hooks";
import { selectDarkTheme } from "../../common/themeSlice";

export const App = () => {
  const isDarkTheme = useAppSelector(selectDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <Homepage />
    </ThemeProvider>
  );
};
