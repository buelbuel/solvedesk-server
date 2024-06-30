import TicketCategoryService from '../services/ticketCategoryService.js'

const ticketCategoryService = new TicketCategoryService()

/**
 * Creates a new ticket category.
 * @async
 * @function createTicketCategory
 * @param {Request} req - The request object containing ticket category details in the body.
 * @param {Response} res - The response object used to send back the created ticket category.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the newly created ticket category or an error message.
 */
export const createTicketCategory = async (req, res) => {
	try {
		const newTicketCategory = await ticketCategoryService.createTicketCategory(req.body)
		res.status(201).json(newTicketCategory)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

/**
 * Retrieves all ticket categories.
 * @async
 * @function getTicketCategories
 * @param {Request} req - The request object.
 * @param {Response} res - The response object used to send back the list of ticket categories.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the list of ticket categories or an error message.
 */
export const getTicketCategories = async (req, res) => {
	try {
		const ticketCategories = await ticketCategoryService.getTicketCategories()
		res.status(200).json(ticketCategories)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}
