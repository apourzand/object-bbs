
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('access_right').insert([
    { user_id: 1, facility_id: 1, access_profile_id: 3},
    { user_id: 1, facility_id: 2, access_profile_id: 3},
    { user_id: 2, facility_id: 2, access_profile_id: 2},
    { user_id: 2, facility_id: 3, access_profile_id: 1}
  ])
}
