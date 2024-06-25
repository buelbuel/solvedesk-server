import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import 'dotenv/config'

/**
 *
 * @source controllers/checkJwt.middleware.ts
 */
export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
	const token = <string>req.headers['authorization']
	let jwtPayload: { userId: any; username: any }

	try {
		jwtPayload = <any>jwt.verify(token, process.env.JWT_SECRET)
		res.locals.jwtPayload = jwtPayload
	} catch (error) {
		return res.status(401).send()
	}

	const { userId, username } = jwtPayload
	const newToken = jwt.sign({ userId, username }, process.env.JWT_SECRET, {
		expiresIn: '1h'
	})
	res.setHeader('token', newToken)

	next()
}
