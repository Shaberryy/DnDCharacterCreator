// const express = require('express');
// const router = express.Router();
// const { characterSheets } = require("../db/seedData");


// router.get('/', async (req, res, next) => {
//     try{
//         const characterSheets = await getAllCharacterSheets();
//         res.send(characterSheets);
//     }catch(error){
//         next(error);
//     }
// });

// // get by id
// router.get('/:characterSheetId', async (req, res, next) => {
//     try{
//         const characterSheets = await getAllCharacterSheets();
//         res.send(characterSheets);
//     }catch (error){
//         next(error);
//     }
// });