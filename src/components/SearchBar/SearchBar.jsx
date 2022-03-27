import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { FaSearch } from "react-icons/fa";

import styles from "./styles.module.scss";

import axios from "axios";

const SearchBar = () => {
  const { setUser, setProfileFound, profileFound } = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState("octocat");
  const [url, setUrl] = useState(`https://api.github.com/users/${searchQuery}`);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setUser(res.data);
        setProfileFound(true);
      })
      .catch(() => {
        setProfileFound(false);
      });
  }, [url]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUrl(`https://api.github.com/users/${searchQuery}`);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.container}>
      <FaSearch size={24} style={{ color: "var(--secondary)" }} />
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          name="userName"
          id="userName"
          placeholder="Search GitHub username..."
        />
        <span style={{ color: "var(--warning)" }}>
          {profileFound ? null : "No results"}
        </span>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
