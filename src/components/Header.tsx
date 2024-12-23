import headerStyles from "../styles/Header.module.css";
import ThemeButton from "./ThemeButton";

const Header = () => {
  return (
    <div className={headerStyles.headerDiv}>
      <div className={headerStyles.logo}>calc</div>
      <div className={headerStyles.themeDiv}>
        <div className={headerStyles.themeText}>THEME</div>
        <ThemeButton />
      </div>
    </div>
  );
};

export default Header;
