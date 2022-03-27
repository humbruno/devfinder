import styles from "./styles.module.scss";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Stats = () => {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <div>
        <h3>Repos</h3>
        <strong>{user.public_repos}</strong>
      </div>

      <div>
        <h3>Followers</h3>
        <strong>{user.followers}</strong>
      </div>

      <div>
        <h3>Following</h3>
        <strong>{user.following}</strong>
      </div>
    </div>
  );
};

export default Stats;
