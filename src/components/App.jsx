import { UserProvider } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

import SearchBar from "./SearchBar/SearchBar";
import Card from "./Card/Card";
import Header from "./Header/Header";

import "../globals.scss";

function App() {
  return (
    <UserProvider>
      <Card />
    </UserProvider>
  );
}

export default App;
