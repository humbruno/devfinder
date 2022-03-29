import styles from "./styles.module.scss";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { FaTwitter, FaLink, FaBuilding } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { ThemeContext } from "../../context/ThemeContext";

const Socials = () => {
  const { user } = useContext(UserContext);

  const { theme } = useContext(ThemeContext);

  const socialsStyle = {
    dark: {
      color: "#fff",
    },
    light: {
      color: "#4B6A9B",
    },
    common: {
      transition: "all 150ms ease",
    },
  };

  const socialsThemeStyle = {
    ...socialsStyle.common,
    ...(theme === "light" ? socialsStyle.light : socialsStyle.dark),
  };

  return (
    <div className={styles.container} style={socialsThemeStyle}>
      <div>
        <span>
          <ImLocation />{" "}
          {user.location !== null ? user.location : "Not Available"}
        </span>
        <span>
          <FaLink /> {user.blog !== "" ? user.blog : "Not Available"}
        </span>
      </div>

      <div>
        <span>
          <FaTwitter />{" "}
          {user.twitter_username !== null
            ? user.twitter_username
            : "Not Available"}
        </span>
        <span>
          <FaBuilding />{" "}
          {user.company !== null ? user.company : "Not Available"}
        </span>
      </div>
    </div>
  );
};

export default Socials;
