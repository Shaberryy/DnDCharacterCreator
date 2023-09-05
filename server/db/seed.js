// table functions
const client = require('./client')

// reset db
// drop table
const dropTables = async () =>{
 try{
    await client.query(``)
 } catch(error){
    throw error
 }
}
