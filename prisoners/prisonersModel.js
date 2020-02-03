const db = require("../database/dbConfig");

module.exports = {
  find,
  findById,
  findByPrison
};

function find() {
  return db("prisons").select();
}
function findById(id) {
  console.log("id", id);
  return db("prisoners")
    .where({ id: id })
    .select();
}
function findByPrison(id) {
  return db("prisoners", "prisons.id")
    .join("prisons", "prisons.id", "prisoners.prison_id")
    .where("prison_id", "=", id)
    .select();
}
