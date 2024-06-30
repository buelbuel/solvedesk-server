import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import routes from './routes/index.js'
import { configDotenv } from 'dotenv'
import { EventEmitter } from 'events'

configDotenv()

/**
 * Sets the default maximum number of listeners for the EventEmitter class.
 *
 * @param {number} maxListeners - The maximum number of listeners.
 */
EventEmitter.defaultMaxListeners = 20

/**
 * Creates an instance of the Express application.
 *
 * @type {Express}
 */
const app = express()
const port = process.env.PORT || 3000

/**
 * Middleware to enable CORS with various options.
 *
 * @param {string} origin - The origin of the request.
 * @param {boolean} credentials - Whether to allow credentials.
 * @param {number} optionsSuccessStatus - The status code to return for successful options requests.
 */
app.use(
	cors({
		origin: 'http://localhost:5173',
		credentials: true,
		optionsSuccessStatus: 200
	})
)

/**
 * Middleware to secure the app by setting various HTTP headers.
 *
 * @param {string} origin - The origin of the request.
 * @param {boolean} credentials - Whether to allow credentials.
 * @param {number} optionsSuccessStatus - The status code to return for successful options requests.
 */
app.use(helmet())

/**
 * Middleware to parse incoming request bodies in a middleware before your handlers, available under the req.body property.
 *
 * @param {string} origin - The origin of the request.
 * @param {boolean} credentials - Whether to allow credentials.
 * @param {number} optionsSuccessStatus - The status code to return for successful options requests.
 */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/**
 * Routes middleware to handle API routes.
 *
 * @param {string} origin - The origin of the request.
 * @param {boolean} credentials - Whether to allow credentials.
 * @param {number} optionsSuccessStatus - The status code to return for successful options requests.
 */
app.use('/api', routes)

/**
 * Starts the server and listens on the specified port.
 *
 * @param {number} port - The port number to listen on.
 * @param {function} callback - The callback function to execute when the server is running.
 */
app.listen(port, () => {
	console.log('Server is running on port:', port)
})
