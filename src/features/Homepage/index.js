import { WrapperHomepage } from "./styled";
import { ThemeSwitch } from "../../common/ThemeSwitch";
import { MainHeader } from "./Components/MainHeader";
import { Portfolio } from "./Components/Portfolio";
import { Footer } from "./Components/Footer";

export const Homepage = () => (
  <WrapperHomepage>
    <ThemeSwitch />
    <MainHeader />
    <Portfolio />
    <Footer />
  </WrapperHomepage>
);
