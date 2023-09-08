// express
const express = require('express');

const router = express.Router();

// get all
async function getAllAbilities() {
  try {
    const rows = data.abilities;
    return rows;
  } catch (error) {
    throw error;
  }
}

// get  by id
async function getAbilityById(abilityId) {
  try {
    const rows = data.abilities;
    const ability = rows.find(
      (ability) => ability.id === Number(abilityId));
      return ability;
  } catch (error) {
    throw error;
  }
}
// post
async function createAbilities(body) {
  try {
    const ability = body;
    const abilities = data.abilities;
    abilities.push(body);
    return ability;
  } catch (error) {
    throw error;
  }
}
// put
async function updateBackground(abilityId, body) {
    try {
      const abilities = data.abilities;
      const ability = abilities.find(ability => ability.id === Number(abilityId));
      const index = abilities.findIndex(ability => ability.id === Number(abilityId));
      let newAbility = {...ability, ...body};
      abilities[index] = newAbility
      return ability;
    } catch (error) {
        throw error;
    }
}
// delete
async function deleteAbility(abilityId) {
    try {
        const abilities = data.abilities;
        const ability = abilities.find(ability => ability.id === Number(abilityId));
        const index = ability.findIndex(ability => ability.id === Number(abilityId));
        abilities.splice(index, 1);
    return ability;
  } catch (error) {
    throw error;
  }
}

module.exports = {
    getAllAbilities,
    getAbilityById,
    createAbilities,
    updateBackground,
    deleteAbility
}