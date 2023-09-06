const express = require('express');
const router = express.Router();

const {getAllCharacterSheets} = require('../db/helpers/characterSheet');
// const app = express();

// get character marcey
router.get('/', async (req, res, next) => {
    try{
        const characterSheets = await getAllCharacterSheets();
        res.send(characterSheets);
    }catch(error){
        next(error);
    }
});