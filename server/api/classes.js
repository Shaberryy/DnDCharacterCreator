// express
const express = require('express');

const router = express.Router();

const {getAllClasses} = require("../db/helpers/classes");

// get all
router.get('/', async (req, res, next) => {
    try{
        const classes = await getAllClasses();
        res.send(classes);
    }catch (error){
        next(error);
    }
});

// get by id
router.get('/:id', async (req, res, next) => {
    try{
        const classes = await getClassesById();
        res.send(classes);
    }catch (error){
        next(error);
    }
});
// put



// // post
// router.post('/',async (req, res, next) => {
//     try{
//         const classes = await createAllClasses(req.body);
//         res.send(classes);
//     }catch (err){
//         next(err);
//     }
// });
// 