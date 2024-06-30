import pool from '../database.js'
import Contact from '../models/contact.js'

/**
 * Service to handle contact-related operations.
 * @class ContactService
 * @namespace ContactService
 */
export default class ContactService {
	/**
	 * Creates a new contact.
	 *
	 * @function
	 * @name createContact
	 * @param {Object} data - The contact data.
	 * @param {string} data.firstName - The first name of the contact.
	 * @param {string} data.lastName - The last name of the contact.
	 * @param {string} data.email - The email of the contact.
	 * @param {string} data.phone - The phone number of the contact.
	 * @param {string} data.accountId - The ID of the associated account.
	 * @returns {Promise<Contact>} The created contact.
	 * @memberof ContactService
	 */
	async createContact(data) {
		const { rows } = await pool.query(
			'INSERT INTO contacts (firstName, lastName, email, phone, accountId) VALUES ($1, $2, $3, $4, $5) RETURNING *',
			[data.firstName, data.lastName, data.email, data.phone, data.accountId]
		)
		const contactData = rows[0]
		return new Contact(
			contactData.id,
			contactData.firstName,
			contactData.lastName,
			contactData.email,
			contactData.phone,
			contactData.accountId,
			contactData.createdAt,
			contactData.updatedAt,
			contactData.deletedAt
		)
	}

	/**
	 * Retrieves all contacts.
	 *
	 * @function
	 * @name getContacts
	 * @returns {Promise<Array<Contact>>} The list of contacts.
	 * @memberof ContactService
	 */
	async getContacts() {
		const { rows } = await pool.query('SELECT * FROM contacts')
		return rows.map(
			contactData =>
				new Contact(
					contactData.id,
					contactData.firstName,
					contactData.lastName,
					contactData.email,
					contactData.phone,
					contactData.accountId,
					contactData.createdAt,
					contactData.updatedAt,
					contactData.deletedAt
				)
		)
	}

	/**
	 * Retrieves a contact by its ID.
	 *
	 * @function
	 * @name getContactById
	 * @memberof ContactService
	 * @param {string} id - The ID of the contact.
	 * @returns {Promise<Contact>} The contact.
	 */
	async getContactById(id) {
		const { rows } = await pool.query('SELECT * FROM contacts WHERE id = $1', [id])
		return new Contact(...rows[0])
	}

	/**
	 * Updates a contact.
	 *
	 * @function
	 * @name updateContact
	 * @memberof ContactService
	 * @param {string} id - The ID of the contact.
	 * @param {Object} data - The contact data.
	 * @returns {Promise<Contact>} The updated contact.
	 */
	async updateContact(id, data) {
		const { rows } = await pool.query('UPDATE contacts SET name = $1 WHERE id = $2 RETURNING *', [data.name, id])
		return new Contact(...rows[0])
	}

	/**
	 * Deletes a contact.
	 *
	 * @function
	 * @name deleteContact
	 * @memberof ContactService
	 * @param {string} id - The ID of the contact.
	 * @returns {Promise<void>}
	 */
	async deleteContact(id) {
		await pool.query('DELETE FROM contacts WHERE id = $1', [id])
	}
}
