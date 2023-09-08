// const { characterSheets } = require("../db/seedData/");
const express = require('express');

const router = express.Router();

// const {getAllBackgrounds, createBackgrounds, } = require('../db/helpers');

// get backgrounds
router.get('/', async (req, res, next) => {
    try{
        const backgrounds = await getAllBackgrounds();
        res.send(backgrounds);
    }catch(error){
        next(error);
    }
});

// get by id
router.get('/:id', async (req, res, next) => {
    try{
        const backgrounds = await getBackgroundsById();
        res.send(backgrounds);
    }catch (error){
        next(error);
    }
});
// post
router.post('/', async (req, res, next) => {
    try {
        const backgrounds = await createBackgrounds(req.body);
        res.send(backgrounds);
    } catch (err) {
        next(err);
    }
});
// put
router.put('/:id', async (req, res, next) => {
    try {
        const backgrounds = await updateBackgrounds(req.params.id, req.body);
        res.send(backgrounds);
    } catch (err) {
        next(err);
    }
});

// patch
router.patch('/:id', async (req, res, next) => {
    try {
        const background = await updateBackground(req.params.backgroundId, req.body);
        res.send(background);
    } catch (error) {
        next(error);
    }
});
// delete
router.delete('/:id', async (req, res, next) => {
    try {
        const background = await deleteBackground(req.params.id);
        res.send(background);
    } catch (error) {
        next(error);
    }
});
// export
module.exports = router;


// async function getAllBackgrounds() {
//   try {
//     const rows = data.backgrounds;
//     return rows;
//   } catch (error) {
//     throw error;
//   }
// }

// // get  by id
// async function getBackgroundById(backgroundId) {
//   try {
//     const rows = data.backgrounds;
//     const background = rows.find(
//       (background) => background.id === Number(backgroundId));
//       return background;
//   } catch (error) {
//     throw error;
//   }
// }
// // post
// async function createBackgrounds(body) {
//   try {
//     const background = body;
//     const backgrounds = data.backgrounds;
//     backgrounds.push(body);
//     return background;
//   } catch (error) {
//     throw error;
//   }
// }
// // put
// async function updateBackground(backgroundId, body) {
//     try {
//       const backgrounds = data.backgrounds;
//       const background = backgrounds.find(background => background.id === Number(backgroundId));
//       const index = backgrounds.findIndex(background => background.id === Number(backgroundId));
//       let newBackground = {...background, ...body};
//       backgrounds[index] = newBackground
//       return background;
//     } catch (error) {
//         throw error;
//     }
// }
// // delete
// async function deleteBackground(backgroundId) {
//     try {
//         const backgrounds = data.backgrounds;
//         const background = backgrounds.find(background => background.id === Number(backgroundId));
//         const index = backgrounds.findIndex(background => background.id === Number(backgroundId));
//         backgrounds.splice(index, 1);
//     return background;
//   } catch (error) {
//     throw error;
//   }
// }

// module.exports = {
//     getAllBackgrounds,
//     getBackgroundById,
//     createBackgrounds,
//     updateBackground,
//     deleteBackground
// }