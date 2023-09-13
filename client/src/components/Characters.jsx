// import { characterSheets } from "../../server/db/seedData";
import Builder from "./Builder";

export default function characterSheets({ characterSheets }){
    return(
        <>
        <div>
            <h1>Newly Created Characters</h1>
        </div>
        {allCharacterSheets.map((characterSheets) => {
            return <Builder key={characterSheets.charactersheetId} characterSheets={characterSheets}/>
        })}
        </>
    );
}