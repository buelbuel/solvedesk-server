import pkg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const { Pool } = pkg

/**
 * Creates a new pool instance to manage PostgreSQL connections.
 *
 * @type {Pool} A Pool instance from pg library
 */
const pool = new Pool({
	host: process.env.PG_HOST,
	port: parseInt(process.env.PG_PORT),
	user: process.env.PG_USERNAME,
	password: process.env.PG_PASSWORD,
	database: process.env.PG_DATABASE
})

export default pool
