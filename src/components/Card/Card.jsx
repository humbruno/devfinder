import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import { format } from "date-fns";

import Stats from "../Stats/Stats";
import Socials from "../Socials/Socials";

import styles from "./styles.module.scss";
import { ThemeContext } from "../../context/ThemeContext";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";

const Card = () => {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const bodyStyle = {
    dark: {
      backgroundColor: "#141D2F",
    },
    light: {
      backgroundColor: "#f6f8ff",
    },
    common: {
      transition: "all 150ms ease",
    },
  };

  const bodyThemeStyle = {
    ...bodyStyle.common,
    ...(theme === "light" ? bodyStyle.light : bodyStyle.dark),
  };

  const cardStyle = {
    dark: {
      color: "#fff",
      backgroundColor: "#1E2A47",
    },
    light: {
      color: "#2B3442",
      backgroundColor: "#fefefe",
    },
    common: {
      transition: "all 150ms ease",
    },
  };

  const cardThemeStyle = {
    ...cardStyle.common,
    ...(theme === "light" ? cardStyle.light : cardStyle.dark),
  };

  const formattedDate = (date) => {
    return format(new Date(date), "dd' 'MMM' 'yyyy");
  };

  return (
    <main style={bodyThemeStyle}>
      <div className={styles.bodyContainer}>
        <Header />
        <SearchBar />
        <div className={styles.container} style={cardThemeStyle}>
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
                <p style={cardThemeStyle}>
                  Joined {formattedDate(user.created_at)}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.bio}>
            <p style={cardThemeStyle}>
              {user.bio ? user.bio : "This profile has no bio."}
            </p>
          </div>

          <Stats />
          <Socials />
        </div>
      </div>
    </main>
  );
};

export default Card;
