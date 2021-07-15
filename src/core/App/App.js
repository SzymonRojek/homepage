import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "../../styled";
import { themeLight, themeDark } from "./theme";
import { Homepage } from "../../features/Homepage";

export const App = () => (
  <ThemeProvider theme={themeLight}>
    <Normalize />
    <GlobalStyle />
    <Container>
      <Homepage />
    </Container>
  </ThemeProvider>
);
