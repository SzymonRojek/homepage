import { useEffect } from "react";

// Keeps <html data-theme> in step with the app, so the page background set in
// index.html matches the chosen theme behind and before the React content.
export const useDocumentTheme = (isDarkTheme: boolean) => {
  useEffect(() => {
    document.documentElement.dataset.theme = isDarkTheme ? "dark" : "light";
  }, [isDarkTheme]);
};
