const client = require("../client");
const util = require("../util");

const getAllCharacterSheets = async () => {
  try {
    const { rows } = await client.query(`
        SELECT *
        FROM characterSheets;
        `);
    return rows;
  } catch (error) {
    throw error;
  }
};
//
const getCharacterSheetById = async (characterSheetId) => {
  try {
    const {
      rows: [characterSheet],
    } = await client.query(
      `
            SELECT *
            FROM characterSheet
            WHERE "characterSheetId" =${characterSheetId}
            `
    );
    return characterSheet;
  } catch (error) {
    throw error;
  }
};

const createCharacterSheets = async ({
  name,
  raceId,
  classId,
  abilityId,
  backgroundsId,
}) => {
  try {
    const {
      rows: [charactersheets],
    } = await client.query(
      `
            INSERT INTO CHARACTERSHEETS(name, race_id, class_id,ability_id, backgrounds_id)
            VALUES( $1, $2, $3, $4, $5 )
            RETURNING *;
            `,
      [name, raceId, classId, abilityId, backgroundsId]
    );
    return charactersheets;
  } catch (error) {
    throw error;
  }
};

async function updateCharacterSheet(characterSheetId, fields) {
  try {
    const toUpdate = {};
    for (let column in fields) {
      if (fields[column] !== undefined) toUpdate[column] = fields[column];
    }
    let characterSheet;
    if (util.dbFields(toUpdate).insert.length > 0) {
      const { rows } = await client.query(
        `
                UPDATE characterSheets
                SET ${util.dbFields(toUpdate).insert}
                WHERE "characterSheetId"=${characterSheetId}
                RETURNING *;
                `,
        Object.values(toUpdate)
      );
      characterSheet = rows[0];
    }
    return characterSheet;
  } catch (error) {
    throw error;
  }
}

async function deleteCharacterSheet(characterSheetId) {
  try {
    const { rows } = await client.query(
      `
            DELETE FROM charachterSheet
            WHERE "id=$1"
            RETURNING *,
            `,
      [characterSheetId]
    );

    return rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createCharacterSheets,
  getAllCharacterSheets,
  updateCharacterSheet,
  getCharacterSheetById,
  deleteCharacterSheet,
};

// const client = require('../client')

// const createCharacterSheets = async ({name, race, dndClass, background, abilities}) => {
//     try{
//         const{
//             rows: [charactersheets],
//         } = await client.query(
//             `
//             INSERT INTO CHARACTERSHEETS(name, race, dndClass, background)
//             VALUES(var1, var3, var1, var4)
//             RETURNING *;
//             `,
//             [name, race, dndClass, background, abilities]
//         )
//      return charactersheets

//      }catch (error){
//         throw error
//      }

// }

// module.exports = { createCharacterSheets}
