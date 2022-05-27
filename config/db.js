import { createPool } from "mysql2/promise";

const pool = createPool({
    host: 'localhost',
    user: 'sergio',
    password: 'seas0611',
    port:3306,
    database: 'test'
})

export { pool }