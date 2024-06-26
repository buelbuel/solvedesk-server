import { Request, Response } from 'express'
import { ProfileService } from '../services/profile.service'

const profileService = new ProfileService()

/**
 *
 * @source controllers/profile.controller.ts
 */
export const getCurrentUser = async (req: Request, res: Response) => {
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
