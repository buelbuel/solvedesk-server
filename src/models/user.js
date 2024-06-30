import bcrypt from 'bcrypt'

/**
 * Represents a user.
 * @typedef {Object} User
 * @property {string} id - The unique identifier of the user.
 * @property {string} email - The email address of the user.
 * @property {string} firstName - The first name of the user.
 * @property {string} lastName - The last name of the user.
 * @property {string} role - The role of the user (e.g., admin, user).
 * @property {string} password - The hashed password of the user.
 * @property {Date} createdAt - The date when the user was created.
 * @property {Date} updatedAt - The date when the user was last updated.
 * @property {Date} deletedAt - The date when the user was deleted (soft delete).
 */

/**
 * Represents a user entity.
 */
class User {
	/**
	 * Creates an instance of User.
	 * @param {string} id - The unique identifier of the user.
	 * @param {string} email - The email address of the user.
	 * @param {string} firstName - The first name of the user.
	 * @param {string} lastName - The last name of the user.
	 * @param {string} role - The role of the user (e.g., admin, user).
	 * @param {string} password - The plain text password of the user.
	 * @param {Date} createdAt - The date when the user was created.
	 * @param {Date} updatedAt - The date when the user was last updated.
	 * @param {Date} deletedAt - The date when the user was deleted (soft delete).
	 */
	constructor(id, email, firstName, lastName, role, password, createdAt, updatedAt, deletedAt) {
		this.id = id
		this.email = email
		this.firstName = firstName
		this.lastName = lastName
		this.role = role
		this.password = password
		this.createdAt = createdAt
		this.updatedAt = updatedAt
		this.deletedAt = deletedAt
		this.hashPassword()
	}

	/**
	 * Hashes the user's password using bcrypt.
	 */
	hashPassword() {
		this.password = bcrypt.hashSync(this.password, 8)
	}

	/**
	 * Checks if the provided unencrypted password matches the hashed password.
	 * @param {string} unencryptedPassword - The unencrypted password to check.
	 * @returns {boolean} - Returns true if the password matches, otherwise false.
	 */
	checkIfUnencryptedPasswordIsValid(unencryptedPassword) {
		return bcrypt.compareSync(unencryptedPassword, this.password)
	}
}

export default User
