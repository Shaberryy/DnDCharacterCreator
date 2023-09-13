const client = require('../client')

// get
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
};

// const getClassesById = async (classId) => {
//     try {
//       const {
//         rows: [classs],
//       } = await client.query(
//         `
//               SELECT *
//               FROM classes
//               WHERE "classId" =${classId}
//               `
//       );
//       return classs;
//     } catch (error) {
//       throw error;
//     }
//   };

// const createClass = async ({name, traits, details}) => {
//     try{
//         const{
//             rows: [classes],
//         } = await client.query(
//             `
//             INSERT INTO classes(name, traits, details)
//             VALUES($1, $2, $3)
//             RETURNING *;
//             `,
//             [name, traits, details]
//         )
//      return classes
    
//      }catch (error){
//         throw error
//      }
    
// };

// module.exports = { createClass, getAllClasses, getClassesById}
module.exports = {getAllClasses}