// creat arrays of objects based on schema tables

// Class
const classes = [
{class: 'Bard', traits: '', details: ''},
{class: 'Cleric', traits: '', details: ''},
{class: 'Druid', traits: '', details: ''},
{class: 'Rogue', traits: '', details: ''},
{class: 'Wizard', traits: '', details: ''},
{class: 'Warlock', traits: '', details: ''},
]

//Race
const Races = [
// {race: 'Elf', subrace: 'High Elf, Wood Elf', traits: 'Darkvision, Keen Senses, Fey Ancestry, Trance, Intelligence +1, Wisdom +1'},
{race: 'Dwarf', traits: '', details: ''},
{race: 'Drow', traits: '', details: ''},
{race: 'Elf', traits: '', details: ''},
{race: 'Tiefling', traits: '', details: ''},
{race: 'Human', traits: '', details: ''},
// {race: '', traits: '', details: ""}
]

// Background/origin
const Backgrounds = [
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

const characterSheet = [
    {name:'Marcey', raceId: 2, classId: 1, backgroundId: 4 },
]

module.exports = {abilities, Races, Backgrounds, classes, characterSheet}