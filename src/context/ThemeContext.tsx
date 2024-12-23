import { createContext, useContext } from "react";

import { Theme } from "../types/Theme";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.THEME_1,
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
