
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex.raw('SET FOREIGN_KEY_CHECKS = 0;')
    .then(knex.raw('TRUNCATE table user;'))
    .then(knex.raw('TRUNCATE table role;'))
    .then(knex.raw('SET FOREIGN_KEY_CHECKS = 1;'))
    .then(function () {
      // Inserts seed entries
      return knex('role').insert([
        { id: 1, name: 'admin' },
        { id: 2, name: 'staff' },
        { id: 3, name: 'user' },
      ])
    })
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        { first_name: 'super', last_name: 'admin', email: 'admin@test.com', role_id: 1 },
        { first_name: 'John', last_name: 'Doe', email: 'john@test.com', role_id: 2 },
      ])
    })
}
