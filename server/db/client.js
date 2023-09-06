const {Client} = require('pg')

const charsheet = 'charsheet'
const client = new Client(`postgress://localhost:5432/${charsheet}`)

module.exports = client