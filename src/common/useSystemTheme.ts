import { useEffect } from "react";
import { useAppDispatch } from "../core/hooks";
import { darkSchemeQuery, systemThemeChanged } from "./themeSlice";

export const useSystemTheme = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const mediaQuery = window.matchMedia?.(darkSchemeQuery);

    if (!mediaQuery) {
      return;
    }

    const onChange = (event: MediaQueryListEvent) =>
      dispatch(systemThemeChanged(event.matches));

    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, [dispatch]);
};
