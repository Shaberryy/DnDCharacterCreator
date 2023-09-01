const {Client } = require('pg')

const charSheet = 'charSheet'
const client = new Client(`postgress://localhost:5432/${charSheet}`)

module.exports = client