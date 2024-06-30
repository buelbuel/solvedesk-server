import TicketPriorityService from '../services/ticketPriorityService.js'

const ticketPriorityService = new TicketPriorityService()

/**
 * Creates a new ticket priority.
 * @async
 * @function createTicketPriority
 * @param {Request} req - The request object containing ticket priority details in the body.
 * @param {Response} res - The response object used to send back the created ticket priority.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the newly created ticket priority or an error message.
 */
export const createTicketPriority = async (req, res) => {
	try {
		const newTicketPriority = await ticketPriorityService.createTicketPriority(req.body)
		res.status(201).json(newTicketPriority)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

/**
 * Retrieves all ticket priorities.
 * @async
 * @function getTicketPriorities
 * @param {Request} req - The request object.
 * @param {Response} res - The response object used to send back the list of ticket priorities.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the list of ticket priorities or an error message.
 */
export const getTicketPriorities = async (req, res) => {
	try {
		const ticketPriorities = await ticketPriorityService.getTicketPriorities()
		res.status(200).json(ticketPriorities)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}
