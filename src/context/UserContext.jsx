import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [profileFound, setProfileFound] = useState(true);

  const [user, setUser] = useState({
    login: "octocat",
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    html_url: "https://github.com/octocat",
    name: "The Octocat",
    company: "@github",
    blog: "https://github.blog",
    location: "San Francisco",
    email: null,
    bio: null,
    twitter_username: null,
    public_repos: 8,
    followers: 5339,
    following: 9,
    created_at: "2011-01-25T18:44:36Z",
  });

  return (
    <UserContext.Provider
      value={{ user, setUser, profileFound, setProfileFound }}
    >
      {children}
    </UserContext.Provider>
  );
};
