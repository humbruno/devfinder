import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import { format } from "date-fns";

import Stats from "../Stats/Stats";
import Socials from "../Socials/Socials";

import styles from "./styles.module.scss";

const Card = () => {
  const { user } = useContext(UserContext);

  const formattedDate = (date) => {
    return format(new Date(date), "dd' 'MMM' 'yyyy");
  };

  return (
    <div className={styles.container}>
      <div className={styles.profilePhoto}>
        <img src={user.avatar_url} alt="Profile photo" />
      </div>

      <div className={styles.profileInfo}>
        <div className={styles.userName}>
          <h2>{user.name} </h2>
          <p>Joined {formattedDate(user.created_at)}</p>
        </div>

        <a className={styles.handle} href={user.html_url} target="_blank">
          @{user.login}
        </a>

        <p className={styles.bio}>
          {user.bio ? user.bio : "This profile has no bio."}
        </p>

        <Stats />
        <Socials />
      </div>
    </div>
  );
};

export default Card;
