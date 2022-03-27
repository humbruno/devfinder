import { UserProvider } from "../context/UserContext";

import SearchBar from "./SearchBar/SearchBar";
import Card from "./Card/Card";
import Header from "./Header/Header";

import "../globals.scss";

function App() {
  return (
    <UserProvider>
      <main className="container">
        <Header />
        <SearchBar />
        <Card />
      </main>
    </UserProvider>
  );
}

export default App;
