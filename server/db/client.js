const {Client } = require('pg')

const characterSheet = 'characterSheet'
const client = new Client(`postgress://localhost:5432/${characterSheet}`)

module.exports = client