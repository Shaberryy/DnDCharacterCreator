// creat arrays of objects based on schema tables

// Class
const classes = [
{dndClass: 'Bard', traits: '', details: ''},
{dndClass: 'Cleric', traits: '', details: ''},
{dndClass: 'Druid', traits: '', details: ''},
{dndClass: 'Rogue', traits: '', details: ''},
{dndClass: 'Wizard', traits: '', details: ''},
{dndClass: 'Warlock', traits: '', details: ''},
]

//Race
const races = [
// {race: 'Elf', subrace: 'High Elf, Wood Elf', traits: 'Darkvision, Keen Senses, Fey Ancestry, Trance, Intelligence +1, Wisdom +1'},
{race: 'Dwarf', traits: '', details: ''},
{race: 'Drow', traits: '', details: ''},
{race: 'Elf', traits: '', details: ''},
{race: 'Tiefling', traits: '', details: ''},
{race: 'Human', traits: '', details: ''},
// {race: '', traits: '', details: ""}
]

// Background/origin
const backgrounds = [
{background: 'Sage', details: '"You are curious and well-read, with an unending thirst for knowledge. Learning about rare lore of the world will inspire you to put this knowledge to greater purpose."',},
{background: 'Acolyte', details: '',},
{background: 'Charlatan',details: '',},
{background: 'Criminal',details: '',},
{background: 'Urchin',details: ''},
{background: 'Noble',details: ''},
{background: 'Entertainer',details: ''},
{background: 'Hermit',details: ''},
{background: 'Outlander',details: ''},
{background: 'Soldier',details: ''},
{background: 'Folk Hero',details: ''},
]
// Abilities
const abilities = [
"Strength",
"Dexterity",
"Constitution",
"Intelligence",
"Wisdom",
"Charisma",
]

const characterSheets = [
    {name:'Marcey', raceId: 2, classId: 1, backgroundId: 4 },
]

module.exports = {abilityId, races, backgroundId, classId, characterSheets}