// express
const data = require("./seedData");
// get all
async function getAllClasses() {
  try {
    const rows = data.classes;
    return rows;
  } catch (error) {
    throw error;
  }
}

// get  by id
async function getClassById(classId) {
  try {
    const rows = data.classes;
    const klass = rows.find(
      (class) => class.id === Number(classId));
      return class;
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