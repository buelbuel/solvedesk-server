/** src/data-sources.ts */
import 'reflect-metadata'
import * as path from 'path'
import { DataSource } from 'typeorm'
import 'dotenv/config'

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: process.env.TYPEORM_HOST,
	port: parseInt(process.env.TYPEORM_PORT as string),
	username: process.env.TYPEORM_USERNAME,
	password: process.env.TYPEORM_PASSWORD,
	database: process.env.TYPEORM_DATABASE,
	schema: process.env.TYPEORM_SCHEMA || 'public',
	entities: [path.join(__dirname, '**', '*.entity.{ts,js}')],
	synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
	logging: process.env.TYPEORM_LOGGING === 'true',
	migrations: [],
	subscribers: []
})
