const db = require("../database/dbConfig");

module.exports = {
  find,
  findById,
  findByPrison
};

function find() {
  return db("prisons").select(
    "prisons.id",
    "prison_name",
    "number_of_prisoners",
    "prison_address",
    "image_url"
  );
}
function findById(id) {
  console.log("id", id);
  return db("prisoners")
    .where({ id: id })
    .select();
}
function findByPrison(id) {
  return db("prisons")
    .join("prisoners", "prisons.id", "prisoners.prison_id")
    .where("prison_id", "=", id)
    .select(
      "prisoners.id",
      "prisoners.prisoner_name",
      "prisoners.prisoner_availability",
      "prisoners.prisoner_skills",
      "prisons.prison_name",
      "prisons.number_of_prisoners",
      "prisons.prison_address",
      "prisons.image_url"
    );
}
