const express = require('express');
const app = express();
// exports objects from heklper
const PORT = 8080;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// init cors 
const cors = require('cors');
app.use(cors());

const client = require('./db/client');
client.connect();

app.get('/', (req, res) => {
    res.send('Hello world');
});

// router api 
app.use('/api', require('./api'));

app.listen(PORT, ( )=> {
    console.log(`Server is listening on port ${PORT}`);
})