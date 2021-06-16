
exports.up = function (knex) {
    return knex.schema
        .createTable('facility', function (table) {
            table.increments()
            table.string('name').notNullable().unique()
            table.boolean('is_active').notNullable().defaultTo(false)
            table.timestamps(true,true)
        })
}

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('facility')
}
