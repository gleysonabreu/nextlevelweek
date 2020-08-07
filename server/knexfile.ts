import path from 'path';

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'src', 'shared', 'infra', 'sqlite3', 'database.sqlite')
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'shared', 'infra', 'sqlite3', 'migrations')
  },
  useNullAsDefault: true,
};