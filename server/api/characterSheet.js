
// const { characterSheets } = require("../db/seedData");

const {getAllCharacterSheets} = require('../db/helpers/characterSheet');

// get character marcey
router.get('/', async (req, res, next) => {
    try{
        const characterSheets = await getAllCharacterSheets();
        res.send(characterSheets);
    }catch(error){
        next(error);
    }
});

// get by id
router.get('/:id', async (req, res, next) => {
    try{
        const characterSheets = await getAllCharacterSheets();
        res.send(characterSheets);
    }catch (error){
        next(error);
    }
});
// post
router.post('/', async (req, res, next) => {
    try {
        const characterSheets = await createCharacterSheets(req.body);
        res.send(characterSheets);
    } catch (err) {
        next(err);
    }
});
// put
router.put('/:id', async (req, res, next) => {
    try {
        const characterSheets = await updateCharacterSheets(req.params.id, req.body);
        res.send(characterSheets);
    } catch (err) {
        next(err);
    }
});

// patch
router.patch('/:id', requireUser, async (req, res, next) => {
    try {
        const characterSheet = await updateCharacterSheet(req.params.characterSheetId, req.body);
        res.send(characterSheet);
    } catch (error) {
        next(error);
    }
});
// delete
router.delete('/:id', requireUser, async (req, res, next) => {
    try {
        const characterSheet = await deleteCharacterSheet(req.params.id);
        res.send(characterSheet);
    } catch (error) {
        next(error);
    }
});
// export
module.exports = router;

// const data = require("./seedData");
// // get all
// async function getAllCharacterSheets() {
//   try {
//     const rows = data.characterSheets;
//     return rows;
//   } catch (error) {
//     throw error;
//   }
// }

// // get  by id
// async function getsCharacterSheetById(characterSheetId) {
//   try {
//     const rows = data.characterSheets;
//     const characterSheet = rows.find(
//       (characterSheet) => characterSheet.id === Number(characterSheetId));
//       return characterSheet;
//   } catch (error) {
//     throw error;
//   }
// }
// // post
// async function createCharacterSheet(body) {
//   try {
//     const characterSheet = body;
//     const characterSheets = data.characterSheets;
//     characterSheets.push(body);
//     return characterSheet;
//   } catch (error) {
//     throw error;
//   }
// }
// // put
// async function updateCharacterSheet(characterSheetId, body) {
//     try {
//       const characterSheets = data.characterSheets;
//       const characterSheet = characterSheets.find(characterSheet => characterSheet.id === Number(characterSheetId));
//       const index = characterSheets.findIndex(characterSheet => characterSheet.id === Number(characterSheetId));
//       let newCharacterSheet = {...characterSheet, ...body};
//       characterSheets[index] = newCharacterSheet
//       return characterSheet;
//     } catch (error) {
//         throw error;
//     }
// }
// // delete
// async function deleteCharacterSheet(characterSheetId) {
//     try {
//         const characterSheets = data.characterSheets;
//         const characterSheet = characterSheets.find(characterSheet => characterSheet.id === Number(characterSheetId));
//         const index = characterSheets.findIndex(characterSheet => characterSheet.id === Number(characterSheetId));
//         characterSheets.splice(index, 1);
//     return characterSheet;
//   } catch (error) {
//     throw error;
//   }
// }

// module.exports = {
//     getAllCharacterSheets,
//     getsCharacterSheetById,
//     createCharacterSheet,
//     updateCharacterSheet,
//     deleteCharacterSheet
// }