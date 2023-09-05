const client = require('../client')

const createRace = async ({race, traits, details}) => {
    try{
        const{
            rows: [races],
        } = await client.query(
            `
            INSERT INTO RACES(race, traits, details)
            VALUES(var4)
            RETURNING *;
            `,
            [race, traits, details]
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