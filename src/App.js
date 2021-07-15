import { ThemeProvider } from "styled-components";
import Normalize from "react-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { Wrapper } from "./components/Wrapper";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Wrapper>
        <h1>Szymon Rojek</h1>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
