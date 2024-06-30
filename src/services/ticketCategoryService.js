import pool from '../database.js'
import TicketCategory from '../models/ticketCategory.js'

/**
 * Service to handle ticket category-related operations.
 * @class TicketCategoryService
 * @namespace TicketCategoryService
 */
export default class TicketCategoryService {
	/**
	 * Creates a new ticket category.
	 *
	 * @function
	 * @name createTicketCategory
	 * @memberof TicketCategoryService
	 * @param {Object} data - The ticket category data.
	 * @param {string} data.name - The name of the ticket category.
	 * @returns {Promise<TicketCategory>} The created ticket category.
	 */
	async createTicketCategory(data) {
		const { rows } = await pool.query('INSERT INTO ticketCategories (name) VALUES ($1) RETURNING *', [data.name])
		const ticketCategoryData = rows[0]
		return new TicketCategory(
			ticketCategoryData.id,
			ticketCategoryData.name,
			ticketCategoryData.createdAt,
			ticketCategoryData.updatedAt,
			ticketCategoryData.deletedAt
		)
	}

	/**
	 * Retrieves all ticket categories.
	 *
	 * @function
	 * @name getTicketCategories
	 * @memberof TicketCategoryService
	 * @returns {Promise<Array<TicketCategory>>} The list of ticket categories.
	 */
	async getTicketCategories() {
		const { rows } = await pool.query('SELECT * FROM ticketCategories')
		return rows.map(
			ticketCategoryData =>
				new TicketCategory(
					ticketCategoryData.id,
					ticketCategoryData.name,
					ticketCategoryData.createdAt,
					ticketCategoryData.updatedAt,
					ticketCategoryData.deletedAt
				)
		)
	}

	/**
	 * Retrieves a ticket category by its ID.
	 *
	 * @function
	 * @name getTicketCategoryById
	 * @memberof TicketCategoryService
	 * @param {string} id - The ID of the ticket category.
	 * @returns {Promise<TicketCategory>} The ticket category.
	 */
	async getTicketCategoryById(id) {
		const { rows } = await pool.query('SELECT * FROM ticketCategories WHERE id = $1', [id])
		return new TicketCategory(...rows[0])
	}

	/**
	 * Updates a ticket category.
	 *
	 * @function
	 * @name updateTicketCategory
	 * @memberof TicketCategoryService
	 * @param {string} id - The ID of the ticket category.
	 * @param {Object} data - The ticket category data.
	 * @returns {Promise<TicketCategory>} The updated ticket category.
	 */
	async updateTicketCategory(id, data) {
		const { rows } = await pool.query('UPDATE ticketCategories SET name = $1 WHERE id = $2 RETURNING *', [
			data.name,
			id
		])
		return new TicketCategory(...rows[0])
	}

	/**
	 * Deletes a ticket category.
	 *
	 * @function
	 * @name deleteTicketCategory
	 * @memberof TicketCategoryService
	 * @param {string} id - The ID of the ticket category.
	 * @returns {Promise<void>}
	 */
	async deleteTicketCategory(id) {
		await pool.query('DELETE FROM ticketCategories WHERE id = $1', [id])
	}
}
