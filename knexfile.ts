import path from 'path';
export default {
    development: {
        client: 'mysql2',
        connection: {
            host: 'localhost',
            user: 'root',
            password: 'julia24MAISA',
            database: 'db_xp'
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
        },
        seeds: {
            tableName: 'knex_migrations',
            directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
        },
    },
};
