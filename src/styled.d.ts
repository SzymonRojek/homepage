import "styled-components";
import { themeLight } from "./core/App/theme";

type Theme = typeof themeLight;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}
