const db = require('../database/dbConfig');

module.exports = {
    find,

}

function find(){
      db('prisoners').select();
}