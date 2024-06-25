import { Request, Response } from 'express'
import { UserService } from '../services/user.service'

const userService = new UserService()

/**
 * 
 * @source controllers/user.controller.ts
 */
export const getOneById = async (req: Request, res: Response) => {
	const { id } = req.params
	try {
		const user = await userService.getOneById(id)
		if (!user) {
			return res.status(404).json({ error: 'User not found' })
		}
		res.json(user)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

export const getUsers = async (req: Request, res: Response) => {
	try {
		
		const page = parseInt(req.query.page as string) || 1
		const pageSize = parseInt(req.query.pageSize as string) || 20

		const { users, totalPages } = await userService.getUsers(
			page,
			pageSize
		)

		res.status(200).json({ users, totalPages })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

export const editUser = async (req: Request, res: Response) => {
	const { id } = req.params
	const userDetails = req.body
	try {
		const updatedUser = await userService.editUser(id, userDetails)
		if (!updatedUser) {
			return res.status(404).json({ error: 'User not found' })
		}
		res.json(updatedUser)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

export const deleteUser = async (req: Request, res: Response) => {
	const { id } = req.params
	try {
		await userService.deleteUser(id)
		res.status(204).send()
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}
