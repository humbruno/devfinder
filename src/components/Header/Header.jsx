import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./styles.module.scss";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={styles.container}>
      <h1>devfinder</h1>
      <button onClick={handleThemeToggle}>{theme}</button>
    </div>
  );
};

export default Header;
