import { useEffect, useState } from "react";
import fetchCharacterSheets from "../assets/API/index.js";
import "../assets/API/index.js"

export default function AllCharacterSheets(){
<>
<h1>All characters</h1>
</>
// const [CharacterSheets,setCharacterSheets] = useState;
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function fetchCharacters() {
      try{
        const response = await fetchCharacterSheets();
        setCharacters(response)
      }catch (error){
        console.error(error);
      }
    }
    fetchCharacters();
  }, []);
};