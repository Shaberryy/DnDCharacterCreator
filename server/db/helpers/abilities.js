const client = require('../client')
// const util = require("../util");


async function createAbility ({ name }) {
    try {
        const {
            rows: [abilityName]
        } = await client.query(`
            INSERT INTO abilities(name)
            VALUES($1)
            RETURNING *;
        `, [name]
        )
        return abilityName
    } catch (error) {
        throw error
    }
}

const getAllAblities = async () => {
    try{
        const { rows } 
        =await client.query(`
        SELECT *
        FROM abilities;
        `)
     return rows   
    }catch (error) {
        throw error
    }
}



const getAbilityById = async (abilityId) => {
    try {
      const {
        rows: [ability],
      } = await client.query(
        `
              SELECT *
              FROM ability
              WHERE "abilityId" =${abilityId}
              `
      );
      return ability;
    } catch (error) {
      throw error;
    }
  };


module.exports = { createAbility, getAbilityById , getAllAblities}