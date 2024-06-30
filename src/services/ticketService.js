import pool from '../database.js'
import Ticket from '../models/ticket.js'

/**
 * Service to handle ticket-related operations.
 * @class TicketService
 * @namespace TicketService
 */
export default class TicketService {
	/**
	 * Creates a new ticket.
	 *
	 * @function
	 * @name createTicket
	 * @memberof TicketService
	 * @param {Object} data - The ticket data.
	 * @param {string} data.title - The title of the ticket.
	 * @param {string} data.description - The description of the ticket.
	 * @param {string} data.status - The status of the ticket.
	 * @param {string} data.priority - The priority of the ticket.
	 * @param {string} data.assigneeId - The ID of the assignee.
	 * @returns {Promise<Ticket>} The created ticket.
	 */
	async createTicket(data) {
		const { title, description, status, priority, assigneeId } = data
		const { rows } = await pool.query(
			'INSERT INTO tickets (title, description, status, priority, assigneeId) VALUES ($1, $2, $3, $4, $5) RETURNING *',
			[title, description, status, priority, assigneeId]
		)
		const ticketData = rows[0]
		return new Ticket(
			ticketData.id,
			ticketData.title,
			ticketData.description,
			ticketData.status,
			ticketData.priority,
			ticketData.assigneeId,
			ticketData.createdAt,
			ticketData.updatedAt,
			ticketData.deletedAt
		)
	}

	/**
	 * Retrieves all tickets with pagination.
	 *
	 * @function
	 * @name getTickets
	 * @memberof TicketService
	 * @param {number} [page=1] - The page number.
	 * @param {number} [pageSize=20] - The number of tickets per page.
	 * @returns {Promise<{ tickets: Array<Ticket>, totalPages: number }>} The tickets and total pages.
	 */
	async getTickets(page = 1, pageSize = 20) {
		const offset = (page - 1) * pageSize
		const { rows: tickets } = await pool.query('SELECT * FROM public.ticket LIMIT $1 OFFSET $2', [pageSize, offset])
		const {
			rows: [{ count }]
		} = await pool.query('SELECT COUNT(*) FROM tickets')
		const totalPages = Math.ceil(count / pageSize)
		return { tickets, totalPages }
	}

	/**
	 * Retrieves a ticket by its ID.
	 *
	 * @function
	 * @name getTicketById
	 * @memberof TicketService
	 * @param {string} id - The ID of the ticket.
	 * @returns {Promise<Ticket>} The ticket.
	 */
	async getTicketById(id) {
		const { rows } = await pool.query('SELECT * FROM tickets WHERE id = $1', [id])
		return new Ticket(...rows[0])
	}

	/**
	 * Updates a ticket.
	 *
	 * @function
	 * @name updateTicket
	 * @memberof TicketService
	 * @param {string} id - The ID of the ticket.
	 * @param {Object} data - The ticket data.
	 * @returns {Promise<Ticket>} The updated ticket.
	 */
	async updateTicket(id, data) {
		const { rows } = await pool.query('UPDATE tickets SET title = $1 WHERE id = $2 RETURNING *', [data.title, id])
		return new Ticket(...rows[0])
	}

	/**
	 * Deletes a ticket.
	 *
	 * @function
	 * @name deleteTicket
	 * @memberof TicketService
	 * @param {string} id - The ID of the ticket.
	 * @returns {Promise<void>}
	 */
	async deleteTicket(id) {
		await pool.query('DELETE FROM tickets WHERE id = $1', [id])
	}
}
