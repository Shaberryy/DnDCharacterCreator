const client = require('../client')

const createRace = async ({name, traits, details}) => {
    try{
        const{
            rows: [races],
        } = await client.query(
            `
            INSERT INTO RACES(name, traits, details)
            VALUES($1, $2, $3)
            RETURNING *;
            `,
            [name, traits, details]
        )
     return races
    
     }catch (error){
        throw error
     }
    
}

const getAllRaces = async () => {
    try{
        const { rows } 
        =await client.query(`
        SELECT *
        FROM races;
        `)
     return rows   
    }catch (error) {
        throw error
    }
}


module.exports = { createRace, getAllRaces}