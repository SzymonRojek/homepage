import { useAppDispatch, useAppSelector } from "../../core/hooks";
import { darkSchemeQuery, selectDarkTheme, toggleTheme } from "../themeSlice";
import { Button, MoonIcon, SunIcon } from "./styled";

// One press flips the theme. Flipping back to the OS theme follows the OS
// again (themeSlice), so there is no separate "system" option to find.
export const ThemeSwitch = () => {
  const isDarkTheme = useAppSelector(selectDarkTheme);
  const dispatch = useAppDispatch();

  return (
    <Button
      aria-label="Dark mode"
      aria-pressed={isDarkTheme}
      onClick={() =>
        dispatch(
          toggleTheme(window.matchMedia?.(darkSchemeQuery).matches ?? false),
        )
      }
    >
      {isDarkTheme ? (
        <SunIcon aria-hidden="true" />
      ) : (
        <MoonIcon aria-hidden="true" />
      )}
    </Button>
  );
};
