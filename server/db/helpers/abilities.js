const client = require('../client')

async function createAbility({ ability }) {
    try {
        const {
            rows: [abilityName]
        } = await client.query(`
            INSERT INTO abilities(ability)
            VALUES($1)
            RETURNING *;
        `, [ability]
        )
        return abilityName
    } catch (error) {
        throw error
    }
}

module.exports = { createAbility }