// import { characterSheets } from "../../server/db/seedData";
// import Builder from "./Builder";

// export default function characterSheets(){
//     const [ ]
// }
// const ul = document.querySelector("ul");
// console.log("work?");


// fetch("http://localhost:8081/api/charactersheet")
// .then((response) => response.json())
// .then((characterSheets) => {
//     characterSheets.foreach((characterSheet) => {
//         const li= document.createElement("li");
//         li.textContent = characterSheet.name;
//         ul.append(li);
//     });
// });

import { useNavigate } from "react-router-dom";

export default function Character({characterSheet, token}){
    const nav = useNavigate();
    return(
        <>
        <div onClick={() => nav(`/characterSheet/${characterSheet._id}`, {state: {characterSheet, token}})}>
        <h4>Name: {characterSheet.name}</h4>
        <p>Race: {characterSheet.race_id}</p>
        <p>Class: {characterSheet.class_id}</p>
        <p>Backgrounds: {characterSheet.background_id}</p>
        </div>
        </>
    )
}