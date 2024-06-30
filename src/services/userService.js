import pool from '../database.js'
import User from '../models/user.js'

/**
 * Service to handle user-related operations.
 * @class UserService
 * @namespace UserService
 */
export default class UserService {
	/**
	 * Retrieves all users.
	 *
	 * @function
	 * @name getUsers
	 * @returns {Promise<Array<User>>} The list of users.
	 * @memberof UserService
	 */
	async getUsers() {
		const { rows } = await pool.query('SELECT * FROM users')
		return rows.map(
			userData =>
				new User(
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
		)
	}

	/**
	 * Retrieves a user by ID.
	 *
	 * @function
	 * @name getOneById
	 * @param {string} id - The user ID.
	 * @returns {Promise<User>} The user.
	 * @memberof UserService
	 */
	async getOneById(id) {
		const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id])
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
	}

	/**
	 * Edits a user.
	 *
	 * @function
	 * @name editUser
	 * @param {string} id - The user ID.
	 * @param {Object} data - The user data to update.
	 * @param {string} data.email - The updated email.
	 * @param {string} data.firstName - The updated first name.
	 * @param {string} data.lastName - The updated last name.
	 * @param {string} data.role - The updated role.
	 * @returns {Promise<User>} The updated user.
	 * @memberof UserService
	 */
	async editUser(id, data) {
		const { rows } = await pool.query(
			'UPDATE users SET email = $1, firstName = $2, lastName = $3, role = $4, updatedAt = NOW() WHERE id = $5 RETURNING *',
			[data.email, data.firstName, data.lastName, data.role, id]
		)
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
	}

	/**
	 * Deletes a user.
	 *
	 * @function
	 * @name deleteUser
	 * @param {string} id - The user ID.
	 * @returns {Promise<void>}
	 * @memberof UserService
	 */
	async deleteUser(id) {
		const result = await pool.query('DELETE FROM users WHERE id = $1', [id])
		if (result.rowCount === 0) {
			throw new Error('User not found')
		}
	}
}
