const db = require("../database/dbConfig");

module.exports = {
  findPrisonBy,
  addPrison,
  addPrisoner,
  editPrisoner,
  deletePrisoner
};

function findPrisonBy(username) {
  return db("prisons").where({ username });
}

function addPrison(userData) {
  return db("prisons").insert(userData);
}

function addPrisoner(userData) {
  return db("prisoners").insert(userData);
}

function editPrisoner(changes, id) {
  return db("prisoners")
    .where({ id })
    .update(changes);
}

function deletePrisoner(id) {
  return db("prisoners").insert(userData);
}
