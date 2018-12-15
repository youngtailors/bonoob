require('../src/libs/load-env');
const fs = require('fs');
const task = require('./task');
const { yyyymmddhhmmss } = require('./utils');
const db = require('../src/db');

const command = process.argv[2];

module.exports = task('db', async () => {
  switch (command) {
    case 'make:migration': {
      const name = process.argv[3];
      if (!name) {
        throw new Error('A name must be specified for the generated migration');
      }
      const filename = `${yyyymmddhhmmss()}_${name}.js`;
      const template = `module.exports.up = async (db) => {\n}\n
module.exports.down = async (db) => {\n}\n
module.exports.configuration = { transaction: true }\n`;
      fs.writeFileSync(
        `migrations/${filename}`,
        template,
        'utf8',
      );
      break;
    }
    case 'migrate': {
      await db.migrate.latest();
      break;
    }
    case 'seed':
      await db.seed.run();
      break;
    default:
      throw new Error(`Unknown command: ${command}`);
  }
  process.exit(0);
});
