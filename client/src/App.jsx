import './App.css';
import { characterSheets } from '../../server/db/seedData';
import {useState, useEffect} from 'react';
import { fetchAllCharactersheets } from '/../db/helpers/characterSheet';

function App() {
  // useState
  // const [allCharacterSheets, setAllCharacterSheets] = useState([]);
  const [setAllCharacterSheets] = useState([]);

  // useEffect
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
    <h1>hi</h1>
      {/* <Builder setAllCharacterSheets={allCharacterSheets} /> */}
    </>
  )
}

export default App;