const express = require('express');
const router = express.Router();

router.get('/health', (req, res, next) =>{
    res.send('OK');
});
// // character sheet api
router.use('/characterSheet', require('./characterSheet'));
// // classes api
// router.use('/classes', require('./classes'));

module.exports = router;