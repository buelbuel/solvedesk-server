import ContactService from '../services/contactService.js'

const contactService = new ContactService()

/**
 * Creates a new contact.
 * @async
 * @function createContact
 * @param {Request} req - The request object containing contact details in the body.
 * @param {Response} res - The response object used to send back the created contact.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the newly created contact or an error message.
 */
export const createContact = async (req, res) => {
	try {
		const newContact = await contactService.createContact(req.body)
		res.status(201).json(newContact)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

/**
 * Retrieves all contacts.
 * @async
 * @function getContacts
 * @param {Request} req - The request object.
 * @param {Response} res - The response object used to send back the list of contacts.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the list of contacts or an error message.
 */
export const getContacts = async (req, res) => {
	try {
		const contacts = await contactService.getContacts()
		res.status(200).json(contacts)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}
