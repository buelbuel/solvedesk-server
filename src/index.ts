// src/index.ts
import 'reflect-metadata'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import { AppDataSource } from './data-source'
import helmet from 'helmet'
import routes from './routes/index'
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 3000

app.use(
	cors({
		origin: 'http://localhost:5174',
		credentials: true,
		optionsSuccessStatus: 200
	})
)
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', routes)

AppDataSource.initialize()
	.then(async () => {
		console.log('Connected to the database')
		app.listen(port, () => {
			console.log('Server is running on port:', port)
		})
	})
	.catch(error => console.log('TypeORM connection error: ', error))
