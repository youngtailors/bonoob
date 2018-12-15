module.exports.up = async (db) => {
  await db.schema.createTable('users', (table) => {
    table.increments('id').notNullable().primary();
    table.string('username', 100).unique().notNullable();
    table.string('display_name', 100);
    table.integer('roles_mask').defaultTo(1).notNullable();
    table.string('password_hash', 128);
    table.timestamps(true, true);
  })
}

module.exports.down = async (db) => {
  await db.schema.dropTableIfExists('users');
}

module.exports.configuration = { transaction: true }
