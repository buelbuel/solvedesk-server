import pool from '../database.js'
import TicketType from '../models/ticketType.js'

/**
 * Service to handle ticket type-related operations.
 * @class TicketTypeService
 * @namespace TicketTypeService
 */
export default class TicketTypeService {
	/**
	 * Creates a new ticket type.
	 *
	 * @function
	 * @name createTicketType
	 * @memberof TicketTypeService
	 * @param {Object} data - The ticket type data.
	 * @param {string} data.name - The name of the ticket type.
	 * @returns {Promise<TicketType>} The created ticket type.
	 */
	async createTicketType(data) {
		const { rows } = await pool.query('INSERT INTO ticketTypes (name) VALUES ($1) RETURNING *', [data.name])
		const ticketTypeData = rows[0]
		return new TicketType(
			ticketTypeData.id,
			ticketTypeData.name,
			ticketTypeData.createdAt,
			ticketTypeData.updatedAt,
			ticketTypeData.deletedAt
		)
	}

	/**
	 * Retrieves all ticket types.
	 *
	 * @function
	 * @name getTicketTypes
	 * @memberof TicketTypeService
	 * @returns {Promise<Array<TicketType>>} The list of ticket types.
	 */
	async getTicketTypes() {
		const { rows } = await pool.query('SELECT * FROM ticketTypes')
		return rows.map(
			ticketTypeData =>
				new TicketType(
					ticketTypeData.id,
					ticketTypeData.name,
					ticketTypeData.createdAt,
					ticketTypeData.updatedAt,
					ticketTypeData.deletedAt
				)
		)
	}

	/**
	 * Retrieves a ticket type by its ID.
	 *
	 * @function
	 * @name getTicketTypeById
	 * @memberof TicketTypeService
	 * @param {string} id - The ID of the ticket type.
	 * @returns {Promise<TicketType>} The ticket type.
	 */
	async getTicketTypeById(id) {
		const { rows } = await pool.query('SELECT * FROM ticketTypes WHERE id = $1', [id])
		return new TicketType(...rows[0])
	}

	/**
	 * Updates a ticket type.
	 *
	 * @function
	 * @name updateTicketType
	 * @memberof TicketTypeService
	 * @param {string} id - The ID of the ticket type.
	 * @param {Object} data - The ticket type data.
	 * @returns {Promise<TicketType>} The updated ticket type.
	 */
	async updateTicketType(id, data) {
		const { rows } = await pool.query('UPDATE ticketTypes SET name = $1 WHERE id = $2 RETURNING *', [data.name, id])
		return new TicketType(...rows[0])
	}

	/**
	 * Deletes a ticket type.
	 *
	 * @function
	 * @name deleteTicketType
	 * @memberof TicketTypeService
	 * @param {string} id - The ID of the ticket type.
	 * @returns {Promise<void>}
	 */
	async deleteTicketType(id) {
		await pool.query('DELETE FROM ticketTypes WHERE id = $1', [id])
	}
}
