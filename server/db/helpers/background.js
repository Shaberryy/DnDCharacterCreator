const client = require('../client')

const createBackgrounds = async ({name,traits, details}) => {
    try{
        const{
            rows: [backgrounds],
        } = await client.query(
            `
            INSERT INTO BACKGROUNDS(name,traits ,details)
            VALUES($1, $2, $3)
            RETURNING *;
            `,
            [name,traits, details]
        )
     return backgrounds
    
     }catch (error){
        throw error
     }
    
}

const getAllBackgrounds = async () => {
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