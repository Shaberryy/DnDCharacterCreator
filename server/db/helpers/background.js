const client = require('../client')

const createBackgrounds = async ({background, traits, details}) => {
    try{
        const{
            rows: [backgrounds],
        } = await client.query(
            `
            INSERT INTO BACKGROUNDS(background, details)
            VALUES(var4)
            RETURNING *;
            `,
            [background, details]
        )
     return backgrounds
    
     }catch (error){
        throw error
     }
    
}

const getAllRaces = async () => {
    try{
        const { rows } 
        =await client.query(`
        SELECT *
        FROM backgrounds;
        `)
     return rows   
    }catch (error) {
        throw error
    }
}


module.exports = { createBackgrounds, getAllBackgrounds}