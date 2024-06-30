import ProfileService from '../services/profileService.js'

const profileService = new ProfileService()

/**
 * Retrieves the current user based on the provided token.
 * @async
 * @function getCurrentUser
 * @param {Request} req - The request object containing the authorization header with the token.
 * @param {Response} res - The response object used to send back the user information.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the user information or an error message.
 */
export const getCurrentUser = async (req, res) => {
	const token = req.headers.authorization

	if (!token) {
		return res.status(401).json({ error: 'Access token not provided' })
	}

	try {
		const user = await profileService.getCurrentUser(token)
		if (!user) {
			return res.status(404).json({ error: 'User not found' })
		}
		res.json(user)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

/**
 * Updates the current user based on the provided token and the request body.
 * @async
 * @function updateCurrentUser
 * @param {Request} req - The request object containing the authorization header with the token and the request body.
 * @param {Response} res - The response object used to send back the updated user information.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the updated user information or an error message.
 */
export const updateCurrentUser = async (req, res) => {
	const token = req.headers.authorization

	if (!token) {
		return res.status(401).json({ error: 'Access token not provided' })
	}

	try {
		const user = await profileService.updateCurrentUser(token, req.body)
		res.json(user)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}
