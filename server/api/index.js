const express = require('express');
const app = express();
const PORT = 8080;

router.get('/charactersheet', (req, res, next) =>{
    res.send('OK');
});

router.use('/characterSheet', require('./characterSheet'));

module.exports = router;