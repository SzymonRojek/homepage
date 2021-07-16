import { WrapperHomepage } from "./styled";
import { ThemeSwitch } from "../../common/ThemeSwitch";
import { MainHeader } from "./MainHeader";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";

export const Homepage = () => (
  <WrapperHomepage>
    <ThemeSwitch />
    <MainHeader />
    <Portfolio />
    <Footer />
  </WrapperHomepage>
);
