import jwt from 'jsonwebtoken'
import AuthService from '../services/authService.js'
import 'dotenv/config'

const authService = new AuthService()

/**
 * Middleware to check JWT token.
 * @function checkJwt
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {void}
 */
export const checkJwt = async (req, res, next) => {
	const token = req.headers.authorization
	if (!token) {
		return res.status(401).send('Access token not provided')
	}

	try {
		const jwtSecret = process.env.JWT_SECRET
		jwt.verify(token, jwtSecret)
		next()
	} catch (error) {
		if (error.name === 'TokenExpiredError') {
			try {
				const refreshToken = req.headers['x-refresh-token']
				if (!refreshToken) {
					return res.status(401).send('Refresh token not provided')
				}
				const newAccessToken = await authService.refreshToken(refreshToken)
				res.setHeader('x-access-token', newAccessToken)
				next()
			} catch (refreshError) {
				return res.status(401).send('Unable to refresh access token: ', refreshError)
			}
		} else {
			return res.status(401).send('Invalid access token')
		}
	}
}
