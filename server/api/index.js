const express = require('express');
const router = express.Router();

router.get('/health', (req, res, next) =>{
    res.send('OK');
});
// // character sheet api
router.use('/characterSheet', require('./characterSheet'));
// // classes api
// router.use('/classes', require('./classes'));
// races api
router.use('/races', require('./races'));
// background
router.use('/background', require('./background'));
// abilities
// router.use('/abilities', require('./ablilites'));

module.exports = router;