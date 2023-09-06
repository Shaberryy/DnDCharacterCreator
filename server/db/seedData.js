// creat arrays of objects based on schema tables

// Class
const classes = [
{name: 'Bard', traits: 'no', details: 'a'},
{name: 'Cleric', traits: 'yes', details: 'v'},
{name: 'Druid', traits: 'no', details: 'a'},
{name: 'Rogue', traits: 'yes', details: 'b'},
{name: 'Wizard', traits: 'no', details: 'a'},
{name: 'Warlock', traits: 'yes', details: 'b'},
]

//Race
const races = [
// {race: 'Elf', subrace: 'High Elf, Wood Elf', traits: 'Darkvision, Keen Senses, Fey Ancestry, Trance, Intelligence +1, Wisdom +1'},
{name: 'Dwarf', traits: 'g', details: 'q'},
{name: 'Drow', traits: 'b', details: 'w'},
{name: 'Elf', traits: 'f', details: 'e'},
{name: 'Tiefling', traits: 'e', details: 'r'},
{name: 'Human', traits: 's', details: 'g'},
// {race: '', traits: '', details: ""}
]

// Background/origin
const backgrounds = [
{name: 'Sage', details: '"You are curious and well-read, with an unending thirst for knowledge. Learning about rare lore of the world will inspire you to put this knowledge to greater purpose."',},
{name: 'Acolyte', details: 's',},
{name: 'Charlatan',details: 's',},
{name: 'Criminal',details: 'a',},
{name: 'Urchin',details: 'f'},
{name: 'Noble',details: 'b'},
{name: 'Entertainer',details: 'b'},
{name: 'Hermit',details: 'e'},
{name: 'Outlander',details: 'b'},
{name: 'Soldier',details: 'e'},
{name: 'Folk Hero',details: 'b'},
]
// Abilities
const abilities = [
{name: "Strength"},
{name: "Dexterity"},
{name: "Constitution"},
{name: "Intelligence"},
{name: "Wisdom"},
{name: "Charisma"}
]

const characterSheets = [
    {name:'Marcey', raceId: 2, classId: 1, abilityId: 4, backgroundsId: 1 },
]

module.exports = {abilities, races, backgrounds, classes, characterSheets}