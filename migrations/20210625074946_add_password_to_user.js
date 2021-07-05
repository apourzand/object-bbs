exports.up = function(knex) {
  return knex.schema.table('user', table => {
    table.string('password').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.table('user', table => {
    table.dropColumn('password');
  })
};