// export default function CharacterSheet({ characterSheet })
import characterSheets from "./Characters";
// import choose from "./choose.png"
export default function CharacterSheet() {
  return (
    <>
      <img
        src="https://mylarpworld.com/wp-content/uploads/2023/04/Elhorndog_Bard_rogue_and_sorcerer_camping_out_in_the_mountains__12f1d82a-8a1e-4258-a28c-9244eb378225.png"
        className="choose"
        />
      <div className="chardisplay">
        <h1>Character Creator!</h1>
      {/* <p key={characterSheet.characterSheetId}>{characterSheet.name}</p> */}
      {/* <characterSheets/> */}
      </div>
      <div className="details">
        <h3>Roll your abilities!!</h3>
        <a  className="roller" href="https://rgbstudios.org/projects/dnd-dice/character-roller?r=">
          Ability Roller!
        </a>
        <h3>There are six abilities which provide a quick description of every creature's physical and mental characteristics: Strength, measuring physical power. Dexterity, measuring agility. Constitution, measuring endurance. Intelligence, measuring reasoning and memory.</h3>
      </div>
    </>
  );
}
