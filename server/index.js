module.exports = {
// require('./characterSheet')
}
// exports objects from heklper

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