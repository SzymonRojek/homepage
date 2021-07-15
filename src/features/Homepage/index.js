import { WrapperHomepage } from "./styled";
import { Header } from "./Header";
import { ThemeSwitch } from "../../common/ThemeSwitch";

export const Homepage = () => (
  <WrapperHomepage>
    <ThemeSwitch />
    <Header />;
  </WrapperHomepage>
);
