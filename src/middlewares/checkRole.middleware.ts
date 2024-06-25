import { Request, Response, NextFunction } from 'express'
import { AppDataSource } from '../data-source'
import { User } from '../entities/user.entity'

/**
 *
 * @source controllers/checkRole.middleware.ts
 * TODO: Admin can invite, manage users
 * TODO: When User with same Organization registers, Role is pending, needs to be approved by Org Admin
 */
export const checkRole = (roles: Array<string>) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		const id = res.locals.jwtPayload.userId

		const userRepository = AppDataSource.getRepository(User)
		let user: User
		try {
			user = await userRepository.findOneOrFail({ where: { id } })
		} catch (error) {
			res.status(401).send()
			return
		}

		if (roles.indexOf(user.role) > -1) {
			next()
		} else {
			res.status(401).send()
		}
	}
}
