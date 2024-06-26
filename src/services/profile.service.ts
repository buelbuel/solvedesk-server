import { User } from '../entities/user.entity'
import { AppDataSource } from '../data-source'
import * as jwt from 'jsonwebtoken'
import { z } from 'zod'

export class ProfileService {
	private userRepository = AppDataSource.getRepository(User)
	private jwtSecret = process.env.JWT_SECRET!

	async getCurrentUser(token: string): Promise<User | undefined> {
		try {
			const decoded: any = jwt.verify(token, this.jwtSecret)
			const userId = decoded.userId

			const schema = z.string().uuid()
			const result = schema.safeParse(userId)
			if (!result.success) {
				throw new Error('getCurrentUser Invalid user ID format')
			}

			return await this.userRepository.findOne({ where: { id: userId } })
		} catch (error) {
			throw new Error('Error fetching current user')
		}
	}
}
