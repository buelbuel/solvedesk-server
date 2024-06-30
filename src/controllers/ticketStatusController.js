import TicketStatusService from '../services/ticketStatusService.js'

const ticketStatusService = new TicketStatusService()

/**
 * Creates a new ticket status.
 * @async
 * @function createTicketStatus
 * @param {Request} req - The request object containing ticket status details in the body.
 * @param {Response} res - The response object used to send back the created ticket status.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the newly created ticket status or an error message.
 */
export const createTicketStatus = async (req, res) => {
	try {
		const newTicketStatus = await ticketStatusService.createTicketStatus(req.body)
		res.status(201).json(newTicketStatus)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

/**
 * Retrieves all ticket statuses.
 * @async
 * @function getTicketStatuses
 * @param {Request} req - The request object.
 * @param {Response} res - The response object used to send back the list of ticket statuses.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the list of ticket statuses or an error message.
 */
export const getTicketStatuses = async (req, res) => {
	try {
		const ticketStatuses = await ticketStatusService.getTicketStatuses()
		res.status(200).json(ticketStatuses)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}
