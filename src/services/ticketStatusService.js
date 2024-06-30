import pool from '../database.js'
import TicketStatus from '../models/ticketStatus.js'

/**
 * Service to handle ticket status-related operations.
 * @class TicketStatusService
 * @namespace TicketStatusService
 */
export default class TicketStatusService {
	/**
	 * Creates a new ticket status.
	 *
	 * @function
	 * @name createTicketStatus
	 * @param {Object} data - The ticket status data.
	 * @param {string} data.name - The name of the ticket status.
	 * @returns {Promise<TicketStatus>} The created ticket status.
	 * @memberof TicketStatusService
	 */
	async createTicketStatus(data) {
		const { rows } = await pool.query('INSERT INTO ticketStatuses (name) VALUES ($1) RETURNING *', [data.name])
		const ticketStatusData = rows[0]
		return new TicketStatus(
			ticketStatusData.id,
			ticketStatusData.name,
			ticketStatusData.createdAt,
			ticketStatusData.updatedAt,
			ticketStatusData.deletedAt
		)
	}

	/**
	 * Retrieves all ticket statuses.
	 *
	 * @function
	 * @name getTicketStatuses
	 * @returns {Promise<Array<TicketStatus>>} The list of ticket statuses.
	 * @memberof TicketStatusService
	 */
	async getTicketStatuses() {
		const { rows } = await pool.query('SELECT * FROM ticketStatuses')
		return rows.map(
			ticketStatusData =>
				new TicketStatus(
					ticketStatusData.id,
					ticketStatusData.name,
					ticketStatusData.createdAt,
					ticketStatusData.updatedAt,
					ticketStatusData.deletedAt
				)
		)
	}

	/**
	 * Retrieves a ticket status by its ID.
	 *
	 * @function
	 * @name getTicketStatusById
	 * @memberof TicketStatusService
	 * @param {string} id - The ID of the ticket status.
	 * @returns {Promise<TicketStatus>} The ticket status.
	 */
	async getTicketStatusById(id) {
		const { rows } = await pool.query('SELECT * FROM ticketStatuses WHERE id = $1', [id])
		return new TicketStatus(...rows[0])
	}

	/**
	 * Updates a ticket status.
	 *
	 * @function
	 * @name updateTicketStatus
	 * @memberof TicketStatusService
	 * @param {string} id - The ID of the ticket status.
	 * @param {Object} data - The ticket status data.
	 * @returns {Promise<TicketStatus>} The updated ticket status.
	 */
	async updateTicketStatus(id, data) {
		const { rows } = await pool.query('UPDATE ticketStatuses SET name = $1 WHERE id = $2 RETURNING *', [
			data.name,
			id
		])
		return new TicketStatus(...rows[0])
	}

	/**
	 * Deletes a ticket status.
	 *
	 * @function
	 * @name deleteTicketStatus
	 * @memberof TicketStatusService
	 * @param {string} id - The ID of the ticket status.
	 * @returns {Promise<void>}
	 */
	async deleteTicketStatus(id) {
		await pool.query('DELETE FROM ticketStatuses WHERE id = $1', [id])
	}
}
