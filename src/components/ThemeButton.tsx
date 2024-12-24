import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import themeButtonStyles from "../styles/ThemeButton.module.css";
import { Theme } from "../types/Theme";

const ThemeButton: React.FC = () => {
  // 1) Consume theme and setTheme from context
  const { theme, setTheme } = useTheme();

  // 2) Helper: Convert Theme -> Position
  const positionFromTheme = (th: Theme) => {
    switch (th) {
      case Theme.THEME_1:
        return 1;
      case Theme.THEME_2:
        return 2;
      case Theme.THEME_3:
        return 3;
      default:
        return 1;
    }
  };

  // 4) We store the toggle’s UI position in local state,
  //    initializing it based on the current theme from context.
  const [position, setPosition] = useState<number>(() =>
    positionFromTheme(theme)
  );

  // 5) Whenever the context’s theme changes externally,
  //    we update position so the toggle stays in sync.
  useEffect(() => {
    setPosition(positionFromTheme(theme));
  }, [theme]);

  // 6) We'll define how far “left” the toggle circle goes at each position.
  const leftPositions: Record<number, string> = {
    1: "5px",
    2: "27.5px",
    3: "51px",
  };

  const toggleStyle: React.CSSProperties = {
    left: leftPositions[position],
  };

  // 7) handleToggleClick: user clicks somewhere in the toggle track
  const handleToggleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const segmentWidth = rect.width / 3;

    if (clickX < segmentWidth) {
      // left zone => position 1 => LIGHT
      setTheme(Theme.THEME_1);
    } else if (clickX < 2 * segmentWidth) {
      // middle => position 2 => DARK
      setTheme(Theme.THEME_2);
    } else {
      // right => position 3 => BLUE
      setTheme(Theme.THEME_3);
    }
  };

  return (
    <div className={themeButtonStyles.themeButtonDiv}>
      <div className={themeButtonStyles.numberLabel}>1</div>
      <div className={themeButtonStyles.numberLabel}>2</div>
      <div className={themeButtonStyles.numberLabel}>3</div>

      {/* 
        The clickable track. 
        onClick decides which zone was clicked => sets position + theme
      */}
      <div className={themeButtonStyles.toggleDiv} onClick={handleToggleClick}>
        {/* The circle, absolutely positioned by "left: XXpx" */}
        <div className={themeButtonStyles.toggle} style={toggleStyle}></div>
      </div>
    </div>
  );
};

export default ThemeButton;
