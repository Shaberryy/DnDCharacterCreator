// import { characterSheets } from "../../server/db/seedData";
import Builder from "./Builder";

export default function PokemonList({ allCharacterSheets }){
    return(
        <>
        {allCharacterSheets.map((characterSheets) => {
            return <Builder key={characterSheets.charactersheetId} characterSheets={characterSheets}/>
        })}
        </>
    );
}