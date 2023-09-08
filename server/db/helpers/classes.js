const client = require('../client')



const createClass = async ({name, traits, details}) => {
    try{
        const{
            rows: [classes],
        } = await client.query(
            `
            INSERT INTO CLASSES(name, traits, details)
            VALUES($1, $2, $3)
            RETURNING *;
            `,
            [name, traits, details]
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