
exports.up = function (knex) {
    return knex.schema
        .createTable('access_right', function (table) {
            table.increments()
            table.integer('user_id').unsigned().notNullable().references('id').inTable('user')
            table.integer('facility_id').unsigned().notNullable().references('id').inTable('facility')
            table.integer('access_profile_id').unsigned().notNullable().references('id').inTable('access_profile')
            table.timestamps(true,true)
        })
}

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('access_right')
}
