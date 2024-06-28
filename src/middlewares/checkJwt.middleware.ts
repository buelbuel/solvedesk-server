import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import { AuthService } from '../services/auth.service'
import 'dotenv/config'

/**
 *
 * @source controllers/checkJwt.middleware.ts
 */
const authService = new AuthService()

export const checkJwt = async (req: Request, res: Response, next: NextFunction) => {
	const token = req.headers.authorization
	if (!token) {
		return res.status(401).send('Access token not provided')
	}

	try {
		const jwtSecret = process.env.JWT_SECRET!
		jwt.verify(token, jwtSecret)
		next()
	} catch (error) {
		if (error.name === 'TokenExpiredError') {
			try {
				const refreshToken = req.headers['x-refresh-token']
				if (!refreshToken) {
					return res.status(401).send('Refresh token not provided')
				}
				const newAccessToken = await authService.refreshAccessToken(refreshToken as string)
				res.setHeader('x-access-token', newAccessToken)
				next()
			} catch (refreshError) {
				return res.status(401).send('Unable to refresh access token')
			}
		} else {
			return res.status(401).send('Invalid access token')
		}
	}
}
