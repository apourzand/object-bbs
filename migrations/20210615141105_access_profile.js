exports.up = function (knex) {
    return knex.schema
        .createTable('access_profile', function (table) {
            table.increments()
            table.string('name').notNullable().unique()
            table.time('start_at').notNullable().defaultTo('07:00:00')
            table.time('end_at').notNullable().defaultTo('17:00:00')
            table.boolean('is_weekend').notNullable().defaultTo(false)
            table.timestamps(true,true)
        })
}

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('access_profile')
}
