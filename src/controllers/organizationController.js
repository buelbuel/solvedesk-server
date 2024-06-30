import OrganizationService from '../services/organizationService.js'

const organizationService = new OrganizationService()

/**
 * Creates a new organization.
 * @async
 * @function createOrganization
 * @param {Request} req - The request object containing organization details in the body.
 * @param {Response} res - The response object used to send back the created organization.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the newly created organization or an error message.
 */
export const createOrganization = async (req, res) => {
	try {
		const newOrganization = await organizationService.createOrganization(req.body)
		res.status(201).json(newOrganization)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

/**
 * Retrieves all organizations.
 * @async
 * @function getOrganizations
 * @param {Request} req - The request object.
 * @param {Response} res - The response object used to send back the list of organizations.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the list of organizations or an error message.
 */
export const getOrganizations = async (req, res) => {
	try {
		const organizations = await organizationService.getOrganizations()
		res.status(200).json(organizations)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}
