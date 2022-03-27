import styles from "./styles.module.scss";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Stats = () => {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.container}>
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
