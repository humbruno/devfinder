import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import { format } from "date-fns";

import Stats from "../Stats/Stats";
import Socials from "../Socials/Socials";

import styles from "./styles.module.scss";
import { ThemeContext } from "../../context/ThemeContext";

const Card = () => {
  const { user } = useContext(UserContext);

  const { theme } = useContext(ThemeContext);

  const bodyStyle = {
    dark: {
      backgroundColor: "#1E2A47",
    },
    light: {
      backgroundColor: "#fefefe",
    },
    common: {
      transition: "all 150ms ease",
    },
  };

  const themeStyle = {
    ...bodyStyle.common,
    ...(theme === "light" ? bodyStyle.light : bodyStyle.dark),
  };

  const formattedDate = (date) => {
    return format(new Date(date), "dd' 'MMM' 'yyyy");
  };

  return (
    <div className={styles.container} style={themeStyle}>
      <div className={styles.profile}>
        <div className={styles.profilePhoto}>
          <img src={user.avatar_url} alt="Profile photo" />
        </div>

        <div className={styles.profileInfo}>
          <div>
            <h2>{user.name} </h2>
            <a href={user.html_url} target="_blank">
              @{user.login}
            </a>
          </div>
          <div>
            <p>Joined {formattedDate(user.created_at)}</p>
          </div>
        </div>
      </div>

      <div className={styles.bio}>
        <p>{user.bio ? user.bio : "This profile has no bio."}</p>
      </div>

      <Stats />
      <Socials />
    </div>
  );
};

export default Card;
