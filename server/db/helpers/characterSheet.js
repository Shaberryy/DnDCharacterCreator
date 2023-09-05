const client = require('../client')

const createCharacterSheets = async ({name, raceId, classId, backgroundId}) => {
    try{
        const{
            rows: [characterSheets],
        } = await client.query(
            `
            INSERT INTO CHARACTERSHEETS(name, raceId, classId, backgroundId)
            VALUES(var1, var3, var1, var4)
            RETURNING *;
            `,
            [name, raceId, classId, backgroundId]
        )
     return characterSheets
    
     }catch (error){
        throw error
     }
    
}

const getAllCharacterSheets = async () => {
    try{
        const { rows } 
        =await client.query(`
        SELECT *
        FROM characterSheets;
        `)
     return rows   
    }catch (error) {
        throw error
    }
}


module.exports = { createCharacterSheets, getAllCharacterSheets}