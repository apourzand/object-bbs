exports.seed = function (knex) {
    // Rollback and redo all migrations
    return knex.migrate.rollback()
    .then(function () {
      return knex.migrate.latest()
    })
  }
  