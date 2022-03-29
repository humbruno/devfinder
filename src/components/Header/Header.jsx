import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

import styles from "./styles.module.scss";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const headerStyle = {
    dark: {
      color: "#fff",
    },
    light: {
      color: "#222731",
    },
    common: {
      transition: "all 150ms ease",
    },
  };

  const headerThemeStyle = {
    ...headerStyle.common,
    ...(theme === "light" ? headerStyle.light : headerStyle.dark),
  };

  const iconStyle = {
    dark: {
      color: "#fff",
    },
    light: {
      color: "#697C9A",
    },
    common: {
      transition: "all 150ms ease",
    },
  };

  const iconThemeStyle = {
    ...iconStyle.common,
    ...(theme === "light" ? iconStyle.light : iconStyle.dark),
  };

  return (
    <div className={styles.container}>
      <h1 style={headerThemeStyle}>devfinder</h1>
      <button onClick={handleThemeToggle} style={iconThemeStyle}>
        {theme === "light" ? (
          <span>
            Dark <FaMoon size={20} />{" "}
          </span>
        ) : (
          <span>
            Light <BsSunFill size={20} />
          </span>
        )}
      </button>
    </div>
  );
};

export default Header;
