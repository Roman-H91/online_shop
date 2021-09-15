import {Pool} from "pg"
require("dotenv").config()

const pool = new Pool({
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
    user: String(process.env.DB_USER),
    password: String(process.env.DB_PASSWORD),
    database: String(process.env.DB_NAME)
})

pool.connect()

module.exports = pool

