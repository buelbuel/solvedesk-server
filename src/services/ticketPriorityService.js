import pool from '../database.js'
import TicketPriority from '../models/ticketPriority.js'

/**
 * Service to handle ticket priority-related operations.
 * @class TicketPriorityService
 * @namespace TicketPriorityService
 */
export default class TicketPriorityService {
	/**
	 * Creates a new ticket priority.
	 *
	 * @function
	 * @name createTicketPriority
	 * @memberof TicketPriorityService
	 * @param {Object} data - The ticket priority data.
	 * @param {string} data.name - The name of the ticket priority.
	 * @returns {Promise<TicketPriority>} The created ticket priority.
	 */
	async createTicketPriority(data) {
		const { rows } = await pool.query('INSERT INTO ticketPriorities (name) VALUES ($1) RETURNING *', [data.name])
		const ticketPriorityData = rows[0]
		return new TicketPriority(
			ticketPriorityData.id,
			ticketPriorityData.name,
			ticketPriorityData.createdAt,
			ticketPriorityData.updatedAt,
			ticketPriorityData.deletedAt
		)
	}

	/**
	 * Retrieves all ticket priorities.
	 *
	 * @function
	 * @name getTicketPriorities
	 * @memberof TicketPriorityService
	 * @returns {Promise<Array<TicketPriority>>} The list of ticket priorities.
	 */
	async getTicketPriorities() {
		const { rows } = await pool.query('SELECT * FROM ticketPriorities')
		return rows.map(
			ticketPriorityData =>
				new TicketPriority(
					ticketPriorityData.id,
					ticketPriorityData.name,
					ticketPriorityData.createdAt,
					ticketPriorityData.updatedAt,
					ticketPriorityData.deletedAt
				)
		)
	}

	/**
	 * Retrieves a ticket priority by its ID.
	 *
	 * @function
	 * @name getTicketPriorityById
	 * @memberof TicketPriorityService
	 * @param {string} id - The ID of the ticket priority.
	 * @returns {Promise<TicketPriority>} The ticket priority.
	 */
	async getTicketPriorityById(id) {
		const { rows } = await pool.query('SELECT * FROM ticketPriorities WHERE id = $1', [id])
		return new TicketPriority(...rows[0])
	}

	/**
	 * Updates a ticket priority.
	 *
	 * @function
	 * @name updateTicketPriority
	 * @memberof TicketPriorityService
	 * @param {string} id - The ID of the ticket priority.
	 * @param {Object} data - The ticket priority data.
	 * @returns {Promise<TicketPriority>} The updated ticket priority.
	 */
	async updateTicketPriority(id, data) {
		const { rows } = await pool.query('UPDATE ticketPriorities SET name = $1 WHERE id = $2 RETURNING *', [
			data.name,
			id
		])
		return new TicketPriority(...rows[0])
	}

	/**
	 * Deletes a ticket priority.
	 *
	 * @function
	 * @name deleteTicketPriority
	 * @memberof TicketPriorityService
	 * @param {string} id - The ID of the ticket priority.
	 * @returns {Promise<void>}
	 */
	async deleteTicketPriority(id) {
		await pool.query('DELETE FROM ticketPriorities WHERE id = $1', [id])
	}
}
