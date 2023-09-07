const client = require('../client')

const createCharacterSheets = async ({name, raceId, classId,abilityId, backgroundsId}) => {
    try{
        const{
            rows: [charactersheets],
        } = await client.query(
            `
            INSERT INTO CHARACTERSHEETS(name, race_id, class_id,ability_id, backgrounds_id)
            VALUES( $1, $2, $3, $4, $5 )
            RETURNING *;
            `,
            [name, raceId, classId,abilityId, backgroundsId]
        )
     return charactersheets
    
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

// const client = require('../client')

// const createCharacterSheets = async ({name, race, dndClass, background, abilities}) => {
//     try{
//         const{
//             rows: [charactersheets],
//         } = await client.query(
//             `
//             INSERT INTO CHARACTERSHEETS(name, race, dndClass, background)
//             VALUES(var1, var3, var1, var4)
//             RETURNING *;
//             `,
//             [name, race, dndClass, background, abilities]
//         )
//      return charactersheets
    
//      }catch (error){
//         throw error
//      }
    
// }


// module.exports = { createCharacterSheets}