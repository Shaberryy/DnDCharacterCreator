// table functions
const client = require("./client");

// reset db
// drop table
const dropTables = async () => {
  try {
    await client.query(`
    DROP TABLE IF EXISTS races;
    DROP TABLE IF EXISTS backgrounds;
    DROP TABLE IF EXISTS classes;
    DROP TABLE IF EXISTS abilities;
    DROP TABLE IF EXISTS characterSheets;
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
      "race" SERIAL PRIMARY KEY,
      traits varchar(700) UNIQUE NOT NULL,
      details varchar(700) UNIQUE NOT NULL,
   );
   CREATE TABLE classes (
      "class" SERIAL PRIMARY KEY,
      traits varchar(700) UNIQUE NOT NULL,
      details varchar(700) UNIQUE NOT NULL,
   );
   CREATE TABLE races (
      "backgrounds" SERIAL PRIMARY KEY,
      details varchar(700) UNIQUE NOT NULL,
   );
   CREATE TABLE characterSheet (
      "name" SERIAL PRIMARY KEY,
      raceId varchar(700) UNIQUE NOT NULL,
      abilites varchar(250) UNIQUE NOT NULL,
      classId varchar(700) UNIQUE NOT NULL,
      backgroundId varchar(700) UNIQUE NOT NULL,

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
            await createRace(race)
        }
        console.log("created races")
    } catch (error) {
        throw error
    }
}
const createInitialCharacterSheet = async () => {
   try {
       //Looping through the "characterSheets" array from seedData
       for (const characterSheet of characterSheets) {
           await createcharacterSheet(characterSheet)
       }
       console.log("created characterSheets")
   } catch (error) {
       throw error
   }
}

const rebuildDb = async () =>{
try{
   client.connect()
      await dropTables()
      await createTables()

      console.log("start seeding...")
      await createInitialCharacterSheet()
}
catch (error){
 console.error(error)
}finally {
   client.end()
}
}

rebuildDb();