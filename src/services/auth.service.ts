import { Request, Response } from 'express'
import { AppDataSource } from '../data-source'
import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'
import { validate } from 'class-validator'
import { z } from 'zod'
import { User } from '../entities/user.entity'
import 'dotenv/config'

/**
 *
 * @source services/auth.service.ts
 */
export class AuthService {
	private userRepository = AppDataSource.getRepository(User)
	private jwtSecret = process.env.JWT_SECRET
	private refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET!
	private refreshTokenExpiry = '7d'

	async createUser(email: string, password: string, firstName: string, lastName: string): Promise<User> {
		try {
			const schema = z.object({
				email: z.string().email(),
				password: z.string().min(6),
				firstName: z.string().min(1),
				lastName: z.string().min(1)
			})

			const result = schema.safeParse({
				email,
				password,
				firstName,
				lastName
			})
			if (!result.success) {
				throw new Error('Invalid input: ' + result.error.errors.map(err => err.message).join(', '))
			}

			const user = new User()
			user.email = email
			user.password = await bcrypt.hash(password, 10)
			user.firstName = firstName
			user.lastName = lastName
			user.role = 'USER'
			user.createdAt = new Date()

			const errors = await validate(user)
			if (errors.length > 0) {
				throw new Error('Validation failed: ' + errors.map(err => err.toString()).join(', '))
			}

			return await this.userRepository.save(user)
		} catch (error) {
			console.error('Error creating user:', error)
			if (error.code === '23505') {
				throw new Error('Email already in use')
			}
			throw new Error('An error occurred during user creation')
		}
	}

	async validateUser(email: string, password: string): Promise<{ accessToken: string; refreshToken: string }> {
		const user = await this.userRepository.findOneBy({ email })
		if (!user) {
			throw new Error('User not found')
		}

		const validPassword = await bcrypt.compare(password, user.password)
		if (!validPassword) {
			throw new Error('Invalid password')
		}

		const payload = { userId: user.id, email: user.email, role: user.role }
		const accessToken = jwt.sign(payload, this.jwtSecret, {
			expiresIn: '1h'
		})
		const refreshToken = jwt.sign(payload, this.refreshTokenSecret, {
			expiresIn: this.refreshTokenExpiry
		})

		return { accessToken, refreshToken }
	}

	async refreshAccessToken(refreshToken: string): Promise<string> {
		try {
			const payload = jwt.verify(refreshToken, this.refreshTokenSecret) as any

			const accessToken = jwt.sign({ userId: payload.userId, email: payload.email }, this.jwtSecret, {
				expiresIn: '1h'
			})

			return accessToken
		} catch (error) {
			throw new Error('Invalid refresh token')
		}
	}

	async changePassword(req: Request, res: Response): Promise<void> {
		try {
			const schema = z.object({
				oldPassword: z.string().min(6),
				newPassword: z.string().min(6)
			})

			const result = schema.safeParse(req.body)
			if (!result.success) {
				res.status(400).send(result.error.errors)
				return
			}

			const { oldPassword, newPassword } = result.data

			const id = res.locals.jwtPayload.userId

			let user: User
			try {
				user = await this.userRepository.findOneOrFail({
					where: { id }
				})
			} catch (error) {
				res.status(401).send('User not found')
				return
			}

			const validPassword = await bcrypt.compare(oldPassword, user.password)
			if (!validPassword) {
				res.status(401).send('Invalid old password')
				return
			}

			user.password = newPassword

			const errors = await validate(user)
			if (errors.length > 0) {
				res.status(400).send(errors)
				return
			}

			user.password = await bcrypt.hash(newPassword, 10)
			await this.userRepository.save(user)

			res.status(204).send()
		} catch (error) {
			console.error('Error changing password:', error)
			res.status(500).send('An error occurred during password change')
		}
	}
}
