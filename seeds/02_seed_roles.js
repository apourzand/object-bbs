
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('role').insert([
    { id: 1, name: 'admin' },
    { id: 2, name: 'staff' },
    { id: 3, name: 'user' },
  ])
}
