const db = require('../database/dbConfig');

module.exports = {
    find,
    findById,

}

function find(){
     return db('prisoners').select();
}
function findById(id){
   return db('prisoners').where({id}).select();
}