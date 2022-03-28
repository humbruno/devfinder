import styles from "./styles.module.scss";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { FaTwitter, FaLink, FaBuilding } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const Socials = () => {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.container}>
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
