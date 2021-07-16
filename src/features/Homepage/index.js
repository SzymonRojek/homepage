import { WrapperHomepage } from "./styled";
import { ThemeSwitch } from "../../common/ThemeSwitch";
import { MainHeader } from "./MainHeader";
import { Footer } from "./Footer";

export const Homepage = () => (
  <WrapperHomepage>
    <ThemeSwitch />
    <MainHeader />
    <Footer />
  </WrapperHomepage>
);
