exports.up = function(knex) {
  return knex.schema.createTable("prisons", tbl => {
    tbl.increments();
    tbl
      .text("username")
      .unique()
      .notNullable();
    tbl
      .text("password")
      .unique()
      .notNullable();
    tbl
      .text("email")
      .unique()
      .notNullable();
    tbl
      .text("prison_name")
      .unique()
      .notNullable();
    tbl.integer("number_of_prisoners").notNullable();
    tbl.text("prison_address").notNullable();
    tbl.text("image_url");
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("prisons");
};
