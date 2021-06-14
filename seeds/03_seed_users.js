exports.seed = function (knex) {
    // Inserts seed entries
    return knex('user').insert([
        { first_name: 'super', last_name: 'admin', email: 'admin@test.com', role_id: 1 },
        { first_name: 'John', last_name: 'Doe', email: 'john@test.com', role_id: 2 },
    ])
}
