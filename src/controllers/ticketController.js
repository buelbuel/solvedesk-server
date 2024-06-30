import TicketService from '../services/ticketService.js'

const ticketService = new TicketService()

/**
 * Creates a new ticket.
 * @async
 * @function createTicket
 * @param {Request} req - The request object containing ticket details in the body.
 * @param {Response} res - The response object used to send back the created ticket.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the newly created ticket or an error message.
 */
export const createTicket = async (req, res) => {
	try {
		const newTicket = await ticketService.createTicket(req.body)
		res.status(201).json(newTicket)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

/**
 * Retrieves all tickets with pagination.
 * @async
 * @function getTickets
 * @param {Request} req - The request object containing pagination parameters in the query.
 * @param {Response} res - The response object used to send back the list of tickets and total pages.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the list of tickets and total pages or an error message.
 */
export const getTickets = async (req, res) => {
	try {
		const page = parseInt(req.query.page) || 1
		const pageSize = parseInt(req.query.pageSize) || 20

		const { tickets, totalPages } = await ticketService.getTickets(page, pageSize)
		res.status(200).json({ tickets, totalPages })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}
