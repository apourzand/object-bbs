
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('facility').insert([
    { id: 1, name: 'Laser cutter' },
    { id: 2, name: '3D printer' },
    { id: 3, name: 'CNC router' },
  ])
}
