import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
// import { useState, useEffect } from "react";
import Characters from "./components/Builder";
import NavBar from "./components/Navbar";
import AllCharacterSheets from "./components/AllCharacters";

function App() {
  

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/builder" element={<Characters/>}/>
      <Route path="/character" element={<AllCharacterSheets/>}/>
    </Routes>

      {/* <Characters allCharacterSheets={allCharacterSheets}/> */}
    </BrowserRouter>
    </>
  );
}

export default App;
