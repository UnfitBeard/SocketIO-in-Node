import Pool from "pg-pool";

export const pool = new Pool({
    host: 'my_postgres-networked',
    port: 5432,
    user: 'postgres',
    database:'librarymanagementsystem',
    password:'mysecretpassword',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})

