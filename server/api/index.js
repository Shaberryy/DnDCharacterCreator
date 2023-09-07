const express = require('express');
const router = express.Router();

router.get('/charactersheet', (req, res, next) =>{
    res.send('OK');
});

router.use('/characterSheet', require('./characterSheet'));

module.exports = router;