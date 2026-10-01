import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { themeLight, themeDark } from "./theme";
import { Homepage } from "../../features/Homepage";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "../../common/themeSlice";

export const App = () => {
  const isDarkTheme = useSelector(selectDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <Homepage />
    </ThemeProvider>
  );
};
