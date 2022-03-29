import styles from "./styles.module.scss";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { ThemeContext } from "../../context/ThemeContext";

const Stats = () => {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const statsStyle = {
    dark: {
      color: "#fff",
      backgroundColor: "#141D2F",
    },
    light: {
      color: "#2B3442",
      backgroundColor: "#F6F8FF",
    },
    common: {
      transition: "all 150ms ease",
    },
  };

  const statsThemeStyle = {
    ...statsStyle.common,
    ...(theme === "light" ? statsStyle.light : statsStyle.dark),
  };

  return (
    <div className={styles.container} style={statsThemeStyle}>
      <div>
        <h3>Repos</h3>
        <p>{user.public_repos}</p>
      </div>

      <div>
        <h3>Followers</h3>
        <p>{user.followers}</p>
      </div>

      <div>
        <h3>Following</h3>
        <p>{user.following}</p>
      </div>
    </div>
  );
};

export default Stats;
