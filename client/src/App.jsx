import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import CharacterSheet from './components/Builder';
import NavBar from './components/Navbar';

function App() {
  // useState
  // const [allCharacterSheets, setAllCharacterSheets] = useState([]);
  const [setAllCharacterSheets] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const characterSheets = await fetchAllCharactersheets();
      setAllCharacterSheets(characterSheets);
      console.log(characterSheets);
      return characterSheets;
    }
    fetchData();
  },[]);

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}

export default App;