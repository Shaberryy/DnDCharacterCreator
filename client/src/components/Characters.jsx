// import { characterSheets } from "../../server/db/seedData";
import Builder from "./Builder";

export default function characterSheets({ characterSheets }){
    return(
        <>
        {allCharacterSheets.map((characterSheets) => {
            return <Builder key={characterSheets.charactersheetId} characterSheets={characterSheets}/>
        })}
        </>
    );
}