// creat arrays of objects based on schema tables

// Class
const classes = [
  {
    name: "Bard",
    traits: "Primary Ability: Charisma",
    details:
      '"You know music is more than a fancy - it is power. Through study and adventure, you have mastered song, speech, and the magic within."',
  },
  {
    name: "Cleric",
    traits: "Primary Ability: Wisdom",
    details:
      '"Clerics are representatives of the gods they worship, wielding potent divine magic for good or ill."',
  },
  {
    name: "Druid",
    traits: "Primary Ability: Wisdom",
    details:
      '"Druids channel the elemental forces of nature and share a deep kinship with animals. Mastery of Wild Shape allows them to transform into beasts from all over the Realms."',
  },
  {
    name: "Rogue",
    traits: "Primary Ability: Dexterity",
    details:
      '"With stealth, skill and uncanny reflexes, a rogue`s versatility lets them get the upper hand in almost any situation."',
  },
  {
    name: "Wizard",
    traits: "Primary Ability: Intelligence",
    details:
      '"Wizards master the arcane by specialising in individual schools of magic, combining ancient spells with modern research."',
  },
  {
    name: "Warlock",
    traits: "Primary Ability: Charisma",
    details:
      '"Bound by a pact to an all-powerful patron, warlocks trade their loyalty for supernatural abilities and unique magic."',
  },
  {
    name: "Barbarian",
    traits: "Primary Ability: Strength",
    details:
      '"The strong embrace the wild that hides inside - keen instincts, primal physicality, and most of all, an unbridled, unquenchable rage."',
  },
];

//Race
const races = [
  // {race: 'Elf', subrace: 'High Elf, Wood Elf', traits: 'Darkvision, Keen Senses, Fey Ancestry, Trance, Intelligence +1, Wisdom +1'},
  {
    name: "Dragonborn",
    traits: "Draconic Ancestry, Breath Weapon",
    details:
      '"A proud race that values clan and skills above all else. Once enslaved by dragons, they strive to be self-sufficient, not wanting to be beholden to anyone, not even the gods."',
  },
  {
    name: "Drow",
    traits:
      "Drow Weapon Training, Fey Ancestry, Superior Darkvision, Keen Senses, Drow Magic",
    details:
      '"Driven to the Underdark, most drow have adopted a ruthless pragmatism. While the Lolth-sworn delight in the goddess` evil tenets, the Seldarine reject Her attempt to overthrow the leader of the elven pantheon."',
  },
  {
    name: "Elf",
    traits: "Darkvison, Elven Weapon Training, Fey Ancestry, Keen Sences",
    details:
      '"With ethereal countenances and long lifespans, elves are at home with nature`s power, flourishing in light and dark alike."',
  },
  {
    name: "Tiefling",
    traits: "Darkvision(12m), Hellish Resistance",
    details:
      '"Descended from devils of the Nine Hells, tieflings face constant suspicion in Faerun. Thankfully, their arcane abilities make them natural survivors."',
  },
  {
    name: "Human",
    traits: "Civil Militia, Human Versatility",
    details:
      '"The most common face to see in Faerün, humans are known for their tenacity, creativity, and endless capacity for growth."',
  },
  // {race: '', traits: '', details: ""}
];

// Background/origin
const backgrounds = [
  {
    name: "Sage",
    traits: "Arcana Proficiency, History Proficiency",
    details:
      '"You are curious and well-read, with an unending thirst for knowledge. Learning about rare lore of the world will inspire you to put this knowledge to greater purpose."',
  },
  {
    name: "Acolyte",
    traits: "Insight Proficiency, Religion Proficiency",
    details:
      '"You have spent your life in service to a temple, learning sacred rites and providing sacrifices to the god or gods you worship. Serving the gods and discovering their  sacred works will lead you to greatness."',
  },
  {
    name: "Charlatan",
    traits: "Deception Proficiency, Sleight of Hand Proficiency",
    details:
      '"You are an expert in manipulation, prone to exaggeration and more than happy to profit from it. Bending the truth and turning allies against each other will bring you success down the road."',
  },
  {
    name: "Criminal",
    traits: "Deception Proficiency, Stealth Proficiency",
    details:
      "aYou have a history of breaking the law and survive by leveraging less-than-legal connections. Profiting from criminal enterprise will lead to greater opportunities in the future.",
  },
  {
    name: "Urchin",
    traits: "Sleight of Hand Proficiency, Stealth Proficiency ",
    details:
      "After surviving a childhood on the streets, you know how to make the most out of very little. Using your street smarts bolsters your spirit for the journey ahead.",
  },
  {
    name: "Noble",
    traits: "History Proficiency, Persuasion Proficiency",
    details:
      '"You were raised in a family among the social elite, accustomed to power and privilege. Accumulating renown, power, and loyalty will raise your status."',
  },
  {
    name: "Entertainer",
    traits: "Acrobatics Proficiency, Performance Proficiency",
    details:
      '"You live to sway and subvert your audience, engaging common crowds and high society alike."',
  },
  {
    name: "Hermit",
    traits: "Medicine Proficiency, Religion Proficiency",
    details:
      '"You were once sworn to seclusion and continue to prefer solitude over the chaos of society."',
  },
  {
    name: "Outlander",
    traits: "Athletics Proficiency, Survival Proficiency",
    details:
      '"You grew up in the wilds, learning to survive far from the comforts of civilization. Surviving unusual hazards of the wild will enhance your prowess and understanding."',
  },
  {
    name: "Soldier",
    traits: "Athletics Proficiency, Intimitation Proficiency",
    details:
      '"You are trained in battlefield tactics and combat, having served in a militia, mercenary company, or officer corps. Show smart tactics and bravery on the battlefield to enhance your prowess."',
  },
  {
    name: "Folk Hero",
    traits: "Animal Handling Proficiency, Survival Proficiency",
    details:
      '"You are a champion of the common people, challenging tyrants and monsters to protect the helpless. Saving innocents in imminent danger will make your legend grow."',
  },
];
// Abilities
const abilities = [
  { name: "Strength" },
  { name: "Dexterity" },
  { name: "Constitution" },
  { name: "Intelligence" },
  { name: "Wisdom" },
  { name: "Charisma" },
];

const characterSheets = [
  { name: "Marcey", raceId: 2, classId: 1, abilityId: 6, backgroundsId: 5 },
  { name: "Amelia", raceId: 3, classId: 5, abilityId: 5, backgroundsId: 1 },
];

module.exports = { abilities, races, backgrounds, classes, characterSheets };
