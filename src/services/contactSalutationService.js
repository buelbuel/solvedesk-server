import pool from '../database.js'
import ContactSalutation from '../models/contactSalutation.js'

/**
 * Service to handle contact salutation-related operations.
 * @class ContactSalutationService
 * @namespace ContactSalutationService
 */
export default class ContactSalutationService {
	/**
	 * Creates a new contact salutation.
	 * @function
	 * @name createContactSalutation
	 * @memberof ContactSalutationService
	 * @param {Object} data - The contact salutation data.
	 * @param {string} data.salutation - The salutation text.
	 * @returns {Promise<ContactSalutation>} The created contact salutation.
	 */
	async createContactSalutation(data) {
		const { rows } = await pool.query('INSERT INTO contactSalutations (salutation) VALUES ($1) RETURNING *', [
			data.salutation
		])
		const contactSalutationData = rows[0]
		return new ContactSalutation(
			contactSalutationData.id,
			contactSalutationData.salutation,
			contactSalutationData.createdAt,
			contactSalutationData.updatedAt,
			contactSalutationData.deletedAt
		)
	}

	/**
	 * Retrieves all contact salutations.
	 *
	 * @function
	 * @name getContactSalutations
	 * @memberof ContactSalutationService
	 * @returns {Promise<Array<ContactSalutation>>} The list of contact salutations.
	 */
	async getContactSalutations() {
		const { rows } = await pool.query('SELECT * FROM contactSalutations')
		return rows.map(
			contactSalutationData =>
				new ContactSalutation(
					contactSalutationData.id,
					contactSalutationData.salutation,
					contactSalutationData.createdAt,
					contactSalutationData.updatedAt,
					contactSalutationData.deletedAt
				)
		)
	}

	/**
	 * Retrieves a contact salutation by its ID.
	 * @memberof ContactSalutationService
	 * @param {string} id - The ID of the contact salutation.
	 * @returns {Promise<ContactSalutation>} The contact salutation.
	 */
	async getContactSalutationById(id) {
		const { rows } = await pool.query('SELECT * FROM contactSalutations WHERE id = $1', [id])
		return new ContactSalutation(...rows[0])
	}

	/**
	 * Updates a contact salutation.
	 *
	 * @function
	 * @name updateContactSalutation
	 * @memberof ContactSalutationService
	 * @param {string} id - The ID of the contact salutation.
	 * @param {Object} data - The contact salutation data.
	 * @returns {Promise<ContactSalutation>} The updated contact salutation.
	 */
	async updateContactSalutation(id, data) {
		const { rows } = await pool.query('UPDATE contactSalutations SET salutation = $1 WHERE id = $2 RETURNING *', [
			data.salutation,
			id
		])
		return new ContactSalutation(...rows[0])
	}

	/**
	 * Deletes a contact salutation.
	 *
	 * @function
	 * @name deleteContactSalutation
	 * @memberof ContactSalutationService
	 * @param {string} id - The ID of the contact salutation.
	 * @returns {Promise<void>}
	 */
	async deleteContactSalutation(id) {
		await pool.query('DELETE FROM contactSalutations WHERE id = $1', [id])
	}
}
