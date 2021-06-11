
exports.up = function (knex) {
    return knex.schema
        .createTable('user', function (table) {
            table.increments()
            table.string('first_name').notNullable()
            table.string('last_name').notNullable()
            table.string('email').notNullable().unique()
            table.integer('role_id').unsigned().notNullable().references('id').inTable('role')
            table.timestamps(true,true)
        })
}

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('user')
}
