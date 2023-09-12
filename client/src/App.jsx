import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
// import { useState, useEffect } from "react";
import Characters from "./components/Builder";
import NavBar from "./components/Navbar";

function App() {
  // useState;
  // const [allCharacterSheets, setAllCharacterSheets] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const characterSheets = await fetchAllCharactersheet();
  //     setAllCharacterSheets(characterSheets);
  //     console.log(characterSheets);
  //     return characterSheets;
  //   }
  //   fetchData();
  // }, []);

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/builder" element={<Characters/>}/>
    </Routes>

      {/* <Characters allCharacterSheets={allCharacterSheets}/> */}
    </BrowserRouter>
    </>
  );
}

export default App;
