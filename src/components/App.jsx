import { UserProvider } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

import SearchBar from "./SearchBar/SearchBar";
import Card from "./Card/Card";
import Header from "./Header/Header";

import "../globals.scss";

function App() {
  const { theme } = useContext(ThemeContext);

  const bodyStyle = {
    dark: {
      backgroundColor: "#141D2F",
    },
    light: {
      backgroundColor: "#f6f8ff",
    },
  };

  const themeStyle = {
    ...(theme === "light" ? bodyStyle.light : bodyStyle.dark),
  };

  return (
    <UserProvider>
      <main style={themeStyle}>
        <div className="container">
          <Header />
          <SearchBar />
          <Card />
        </div>
      </main>
    </UserProvider>
  );
}

export default App;
