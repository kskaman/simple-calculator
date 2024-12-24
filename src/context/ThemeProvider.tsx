import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import { Theme } from "../types/Theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => Theme.THEME_1);

  useEffect(() => {
    // Whenever theme changes, update the global data attribute
    document.documentElement.setAttribute("data-theme", theme);

    // Cleanup function
    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, [theme]);

  const contextValue = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
