const client = require('../client')

async function createAbility ({ name }) {
    try {
        const {
            rows: [abilityName]
        } = await client.query(`
            INSERT INTO abilities(name)
            VALUES($1)
            RETURNING *;
        `, [name]
        )
        return abilityName
    } catch (error) {
        throw error
    }
}

module.exports = { createAbility }