import pool from '../database.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import User from '../models/user.js'
import 'dotenv/config'

/**
 * Data transfer object for registering a new user.
 * @class RegisterUserDTO
 * @memberof AuthService
 */
class RegisterUserDTO {
	/**
	 * Creates a new RegisterUserDTO.
	 *
	 * @constructor
	 * @memberof RegisterUserDTO
	 * @param {string} email - The user's email.
	 * @param {string} password - The user's password.
	 * @param {string} firstName - The user's first name.
	 * @param {string} lastName - The user's last name.
	 */
	constructor(email, password, firstName, lastName) {
		this.email = email
		this.password = password
		this.firstName = firstName
		this.lastName = lastName
	}

	/**
	 * Validates the RegisterUserDTO instance.
	 *
	 * @function
	 * @name validate
	 * @memberof RegisterUserDTO
	 * @returns {Array<string>} An array of validation errors.
	 */
	validate() {
		const errors = []
		if (!this.email || !/\S+@\S+\.\S+/.test(this.email)) {
			errors.push('Invalid email')
		}
		if (!this.password || this.password.length < 6 || this.password.length > 20) {
			errors.push('Password must be between 6 and 20 characters')
		}
		if (!this.firstName) {
			errors.push('First name is required')
		}
		if (!this.lastName) {
			errors.push('Last name is required')
		}
		return errors
	}
}

/**
 * Service to handle authentication-related operations.
 * @class AuthService
 * @namespace AuthService
 */
export default class AuthService {
	/**
	 * Creates an instance of AuthService.
	 * @constructor
	 * @memberof AuthService
	 */
	constructor() {
		this.jwtSecret = process.env.JWT_SECRET
	}

	/**
	 * Registers a new user.
	 * @function
	 * @name registerUser
	 * @memberof AuthService
	 * @param {Object} data - The registration data.
	 * @param {string} data.email - The user's email.
	 * @param {string} data.password - The user's password.
	 * @param {string} data.firstName - The user's first name.
	 * @param {string} data.lastName - The user's last name.
	 * @returns {Promise<User>} The registered user.
	 * @throws {Error} If there are validation errors or an error occurs during registration.
	 */
	async registerUser(data) {
		const registerUserDTO = new RegisterUserDTO(data.email, data.password, data.firstName, data.lastName)
		const errors = registerUserDTO.validate()
		if (errors.length > 0) {
			throw new Error(errors.join(', '))
		}
		const hashedPassword = bcrypt.hashSync(data.password, 8)
		const { rows } = await pool.query(
			'INSERT INTO users (id, email, password, firstName, lastName) VALUES ($1, $2, $3, $4, $5) RETURNING *',
			[uuidv4(), data.email, hashedPassword, data.firstName, data.lastName]
		)
		const userData = rows[0]

		return new User(
			userData.id,
			userData.email,
			userData.firstName,
			userData.lastName,
			userData.role,
			userData.password,
			userData.createdAt,
			userData.updatedAt,
			userData.deletedAt
		)
	}

	/**
	 * Authenticates a user and returns a JWT token.
	 * @function
	 * @name authenticateUser
	 * @memberof AuthService
	 * @param {string} email - The user's email.
	 * @param {string} password - The user's password.
	 * @returns {Promise<string>} The JWT token.
	 * @throws {Error} If authentication fails.
	 */
	async authenticateUser(email, password) {
		const { rows } = await pool.query('SELECT * FROM public.user WHERE email = $1', [email])
		const userData = rows[0]
		if (!userData || !bcrypt.compareSync(password, userData.password)) {
			throw new Error('Invalid email or password')
		}

		const user = new User(
			userData.id,
			userData.email,
			userData.firstName,
			userData.lastName,
			userData.role,
			userData.password,
			userData.createdAt,
			userData.updatedAt,
			userData.deletedAt
		)

		const token = jwt.sign({ userId: user.id }, this.jwtSecret, { expiresIn: '1h' })
		return token
	}

	/**
	 * Refreshes the JWT token.
	 * @function
	 * @name refreshToken
	 * @memberof AuthService
	 * @param {string} token - The current JWT token.
	 * @returns {Promise<string>} The new JWT token.
	 * @throws {Error} If the token is invalid or expired.
	 */
	async refreshToken(token) {
		try {
			const decoded = jwt.verify(token, this.jwtSecret)
			const newToken = jwt.sign({ userId: decoded.userId }, this.jwtSecret, { expiresIn: '1h' })
			return newToken
		} catch (error) {
			throw new Error('Invalid or expired token: ', error)
		}
	}

	/**
	 * Resets the user's password.
	 * @function
	 * @name resetPassword
	 * @memberof AuthService
	 * @param {string} email - The user's email.
	 * @param {string} newPassword - The new password.
	 * @returns {Promise<void>}
	 * @throws {Error} If the user is not found or the update fails.
	 */
	async resetPassword(email, newPassword) {
		const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email])
		const userData = rows[0]
		if (!userData) {
			throw new Error('User not found')
		}

		const hashedPassword = bcrypt.hashSync(newPassword, 8)
		await pool.query('UPDATE users SET password = $1 WHERE email = $2', [hashedPassword, email])
	}
}
