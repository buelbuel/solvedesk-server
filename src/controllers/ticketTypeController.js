import TicketTypeService from '../services/ticketTypeService.js'

const ticketTypeService = new TicketTypeService()

/**
 * Creates a new ticket type.
 * @async
 * @function createTicketType
 * @param {Request} req - The request object containing ticket type details in the body.
 * @param {Response} res - The response object used to send back the created ticket type.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the newly created ticket type or an error message.
 */
export const createTicketType = async (req, res) => {
	try {
		const newTicketType = await ticketTypeService.createTicketType(req.body)
		res.status(201).json(newTicketType)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

/**
 * Retrieves all ticket types.
 * @async
 * @function getTicketTypes
 * @param {Request} req - The request object.
 * @param {Response} res - The response object used to send back the list of ticket types.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the list of ticket types or an error message.
 */
export const getTicketTypes = async (req, res) => {
	try {
		const ticketTypes = await ticketTypeService.getTicketTypes()
		res.status(200).json(ticketTypes)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}
