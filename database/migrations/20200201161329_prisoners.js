exports.up = function(knex) {
  return knex.schema.createTable("prisoners", tbl => {
    tbl.increments();
    tbl.text("prisoner_name").notNullable();
    tbl
      .boolean("prisoner_availability")
      .notNullable()
      .defaultTo();
    tbl.text("prisoner_skills").notNullable();
    tbl
      .integer("prison_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("prisons");
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("prisoners");
};
