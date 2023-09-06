const client = require('../client')

const createClass = async ({dndClass, traits, details}) => {
    try{
        const{
            rows: [classes],
        } = await client.query(
            `
            INSERT INTO CLASSES(dndClass, traits, details)
            VALUES(var1)
            RETURNING *;
            `,
            [dndClass, traits, details]
        )
     return classes
    
     }catch (error){
        throw error
     }
    
}

const getAllClasses = async () => {
    try{
        const { rows } 
        =await client.query(`
        SELECT *
        FROM classes;
        `)
     return rows   
    }catch (error) {
        throw error
    }
}


module.exports = { createClass, getAllClasses}