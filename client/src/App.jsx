import "./App.css";
import { useState, useEffect } from "react";

import Characters from "./components/Builder";
import NavBar from "./components/Navbar";
// import NavBar from "./components/Navbar";

function App() {
  useState;
  const [allCharacterSheets, setAllCharacterSheets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const characterSheets = await fetchAllCharactersheet();
      setAllCharacterSheets(characterSheets);
      console.log(characterSheets);
      return characterSheets;
    }
    fetchData();
  }, []);

  return (
    <>
    <NavBar/>
      <Characters allCharacterSheets={allCharacterSheets}/>
    </>
  );
}

export default App;
