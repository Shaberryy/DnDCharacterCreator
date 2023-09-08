export default function CharacterSheet({characterSheet}) {
    return(
        <p key={characterSheet.characterSheetId}>{characterSheet.name}</p>
    )
}

