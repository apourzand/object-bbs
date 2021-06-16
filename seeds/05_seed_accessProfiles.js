
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('access_profile').insert([
    { id: 1, name: 'Beginner'},
    { id: 2, name: 'Skilled' },
    { id: 3, name: 'Expert' },
  ])
}
