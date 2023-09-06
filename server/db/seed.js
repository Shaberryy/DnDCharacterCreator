// table functions
const client = require("./client");

const { createClass } = require("./helpers/classes");
const { createRace } = require("./helpers/races");
const { createBackgrounds } = require("./helpers/background");
const { createAbility } = require("./helpers/abilities");
const { createCharacterSheets } = require("./helpers/characterSheet");

const {abilities, races, backgrounds, classes, characterSheets} = require('./seedData')

// const {  } = require("./helpers/");

// reset db
// drop table
const dropTables = async () => {
  try {
    await client.query(`
    DROP TABLE IF EXISTS characterSheets;
    DROP TABLE IF EXISTS abilities;
    DROP TABLE IF EXISTS classes;
    DROP TABLE IF EXISTS backgrounds;
    DROP TABLE IF EXISTS races;
    `);
  } catch (error) {
    throw error;
  }
};

// create tables for live data
const createTables = async () => {
  console.log("Building tables...");
  await client.query(`
   CREATE TABLE races (
      id SERIAL PRIMARY KEY,
      name varchar(100) UNIQUE NOT NULL,
      traits varchar(700) NOT NULL,
      details varchar(700)  NOT NULL
   );
   CREATE TABLE classes (
      id SERIAL PRIMARY KEY,
      name varchar(100) UNIQUE NOT NULL,
      traits varchar(700)  NOT NULL,
      details varchar(700)  NOT NULL
   );
   CREATE TABLE backgrounds (
      id SERIAL PRIMARY KEY,
      name varchar(100) UNIQUE NOT NULL,
      details varchar(700) NOT NULL
      );
      CREATE TABLE abilities (
         id SERIAL PRIMARY KEY,
         name varchar(255) UNIQUE NOT NULL
      );
   CREATE TABLE characterSheets (
      id SERIAL PRIMARY KEY,
      name varchar(700) UNIQUE NOT NULL,
      race_id INTEGER REFERENCES races(id),
      class_id INTEGER REFERENCES classes(id),
      ability_id INTEGER REFERENCES abilities(id),
      backgrounds_id INTEGER REFERENCES backgrounds(id)

   ); 
   `);
};
console.log("Tables built!");

// insert mock data from seeData.js
const createInitialRaces = async () => {
  try {
    //Looping through the "races" array from seedData
    for (const race of races) {
      //Insert each race into the table
      await createRace(race);
    }
    console.log("created races");
  } catch (error) {
    throw error;
  }
};
const createInitialCLasses = async () => {
  try {
    //Looping through the "races" array from seedData
    for (const dndClass of classes) {
      await createClass(dndClass);
    }
    console.log("created classes");
  } catch (error) {
    throw error;
  }
};
const createInitialCharacterSheets = async () => {
  try {
    //Looping through the "characterSheets" array from seedData
    for (const characterSheet of characterSheets) {
      await createCharacterSheets(characterSheet);
    }
    console.log("created characterSheets");
  } catch (error) {
    throw error;
  }
};
const createintitialAbility = async () => {
  try {
    //Looping through the "abilites" array from seedData
    for (const ability of abilities) {
      await createAbility( ability);
    }
    console.log("created abilities");
  } catch (error) {
    throw error;
  }
};
const createInitialBackgrounds = async () => {
  try {
    //Looping through the "backgrounds" array from seedData
    for (const background of backgrounds) {
      await createBackgrounds(background);
    }
    console.log("created backgrounds");
  } catch (error) {
    throw error;
  }
};
// rebuild
const rebuildDb = async () => {
  try {
    client.connect();
    await dropTables();
    await createTables();

    console.log("start seeding...");
    await createInitialCLasses();
    await createInitialRaces();
    await createInitialBackgrounds();
    await createintitialAbility();
    await createInitialCharacterSheets();
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
};

rebuildDb();
