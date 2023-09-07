const data = require("./seedData");
// get all
async function getAllBackgrounds() {
  try {
    const rows = data.backgrounds;
    return rows;
  } catch (error) {
    throw error;
  }
}

// get  by id
async function getBackgroundById(backgroundId) {
  try {
    const rows = data.backgrounds;
    const background = rows.find(
      (background) => background.id === Number(backgroundId));
      return background;
  } catch (error) {
    throw error;
  }
}
// post
async function createBackgrounds(body) {
  try {
    const background = body;
    const backgrounds = data.backgrounds;
    backgrounds.push(body);
    return background;
  } catch (error) {
    throw error;
  }
}
// put
async function updateBackground(backgroundId, body) {
    try {
      const backgrounds = data.backgrounds;
      const background = backgrounds.find(background => background.id === Number(backgroundId));
      const index = backgrounds.findIndex(background => background.id === Number(backgroundId));
      let newBackground = {...background, ...body};
      backgrounds[index] = newBackground
      return background;
    } catch (error) {
        throw error;
    }
}
// delete
async function deleteBackground(backgroundId) {
    try {
        const backgrounds = data.backgrounds;
        const background = backgrounds.find(background => background.id === Number(backgroundId));
        const index = backgrounds.findIndex(background => background.id === Number(backgroundId));
        backgrounds.splice(index, 1);
    return background;
  } catch (error) {
    throw error;
  }
}

module.exports = {
    getAllBackgrounds,
    getBackgroundById,
    createBackgrounds,
    updateBackground,
    deleteBackground
}