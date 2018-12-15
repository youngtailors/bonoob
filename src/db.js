const knex = require('knex')

const db = knex({
  client: 'pg',
  connection: process.env.DATABASE_URI,
  migrations: {
    tableName: 'migrations',
  },
  seeds: {
    directory: 'seeds'
  }
})

module.exports = db
