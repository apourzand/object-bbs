// Update with your config settings.
require('dotenv').config()
const { knexSnakeCaseMappers } = require('objection')

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASS,
      dateStrings: true
    },
    pool: {
      min: 2,
      max: 10
    },
    debug: false,
    ...knexSnakeCaseMappers()
  }, 
}
