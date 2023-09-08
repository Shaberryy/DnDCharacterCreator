const client = require('../client')
// get
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
// get by id
const getBackgroundById = async (backgroundId) => {
    try {
      const {
        rows: [background],
      } = await client.query(
        `
              SELECT *
              FROM backgrounds
              WHERE "backgroundId" =${backgroundId}
              `
      );
      return background;
    } catch (error) {
      throw error;
    }
  };
// post? put?
const createBackgrounds = async ({name,traits, details}) => {
    try{
        const{
            rows: [backgrounds],
        } = await client.query(
            `
            INSERT INTO BACKGROUNDS(name,traits, details)
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
// post? put?


module.exports = { createBackgrounds, getAllBackgrounds,  getBackgroundById}