const db = require('../database/dbConfig');

module.exports = {
    find,
    findById,
    findByPrison

}

function find(){
     return db('prisoners').select();
}
function findById(id){
   console.log('id',id)
   return db('prisoners').where({id: id}).select();
}
function findByPrison(id){
   return db('prisoners').where('prison_id','=',id).select();
}