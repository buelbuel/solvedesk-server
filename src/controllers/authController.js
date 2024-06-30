import AuthService from '../services/authService.js'

const authService = new AuthService()

/**
 * Registers a new user.
 * @async
 * @function registerUser
 * @param {Request} req - The request object containing user details in the body.
 * @param {Response} res - The response object used to send back the registered user.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the newly registered user or an error message.
 */
export const registerUser = async (req, res) => {
	try {
		const newUser = await authService.registerUser(req.body)
		res.status(201).json(newUser)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

/**
 * Authenticates a user and returns a JWT token.
 * @async
 * @function authenticateUser
 * @param {Request} req - The request object containing user credentials in the body.
 * @param {Response} res - The response object used to send back the JWT token.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the JWT token or an error message.
 */
export const authenticateUser = async (req, res) => {
	const { email, password } = req.body

	try {
		const accessToken = await authService.authenticateUser(email, password)
		res.json({ accessToken })
	} catch (error) {
		console.error('Authentication error:', error)
		res.status(401).json({ error: error.message })
	}
}

/**
 * Refreshes the JWT token.
 * @async
 * @function refreshToken
 * @param {Request} req - The request object containing the token to refresh in the body.
 * @param {Response} res - The response object used to send back the new token.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the new JWT token or an error message.
 */
export const refreshToken = async (req, res) => {
	const { token } = req.body

	try {
		const refreshToken = await authService.refreshToken(token)
		res.json({ token: refreshToken })
	} catch (error) {
		console.error('Refresh token error:', error)
		res.status(401).json({ error: error.message })
	}
}

/**
 * Resets the user's password.
 * @async
 * @function resetPassword
 * @param {Request} req - The request object containing user email and new password in the body.
 * @param {Response} res - The response object used to indicate the password reset status.
 * @returns {Promise<void>} - A promise that resolves to sending a response indicating the password reset status or an error message.
 */
export const resetPassword = async (req, res) => {
	const { email, newPassword } = req.body

	try {
		await authService.resetPassword(email, newPassword)
		res.status(200).json({ message: 'Password reset successful' })
	} catch (error) {
		console.error('Reset password error:', error)
		res.status(400).json({ error: error.message })
	}
}
