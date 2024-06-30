import pool from '../database.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import User from '../models/user.js'
import { validate as uuidValidate } from 'uuid'
import { configDotenv } from 'dotenv'

configDotenv

/**
 * DTO class to validate user ID format.
 * @class UserIdDTO
 * @memberof ProfileService
 * @access private
 */
class UserIdDTO {
	/**
	 * Constructs a UserIdDTO object.
	 * @constructor
	 * @param {string} userId - The user ID.
	 */
	constructor(userId) {
		this.userId = userId
	}

	/**
	 * Checks if the user ID is in valid UUID format.
	 * @returns {boolean} True if the user ID is valid UUID format, false otherwise.
	 */
	isValid() {
		return uuidValidate(this.userId)
	}
}

/**
 * Service to handle profile-related operations.
 * @class ProfileService
 * @namespace ProfileService
 */
export default class ProfileService {
	/**
	 * Constructs a ProfileService object.
	 * @constructor
	 */
	constructor() {
		this.jwtSecret = process.env.JWT_SECRET
	}

	/**
	 * Retrieves the current user based on the provided token.
	 *
	 * @function
	 * @name getCurrentUser
	 * @memberof ProfileService
	 * @param {string} token - The JWT token.
	 * @returns {Promise<User>} The current user.
	 * @throws {Error} If the user ID is invalid or there is an error fetching the user.
	 */
	async getCurrentUser(token) {
		try {
			const decoded = jwt.verify(token, this.jwtSecret)
			const userIdDTO = new UserIdDTO(decoded.userId)

			if (!userIdDTO.isValid()) {
				throw new Error('Invalid user ID format')
			}

			const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [userIdDTO.userId])
			const userData = rows[0]
			if (!userData) {
				throw new Error('User not found')
			}

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
		} catch (error) {
			throw new Error('Error fetching current user: ', error)
		}
	}

	/**
	 * Updates the current user.
	 *
	 * @function
	 * @name updateCurrentUser
	 * @memberof ProfileService
	 * @param {string} token - The JWT token.
	 * @param {Object} data - The user data.
	 * @returns {Promise<User>} The updated user.
	 */
	async updateCurrentUser(token, data) {
		throw new Error('Not implemented: ', token, data)
	}

	/**
	 * Deletes the current user.
	 *
	 * @function
	 * @name deleteCurrentUser
	 * @memberof ProfileService
	 * @param {string} token - The JWT token.
	 * @returns {Promise<void>}
	 */
	async deleteCurrentUser(token) {
		throw new Error('Not implemented: ', token)
	}
}
