/**
 * Middleware to check user role.
 * @param {Array<string>} roles - The allowed roles.
 * @returns {Function} The middleware function that checks if the user has one of the allowed roles.
 */
export const checkRole = roles => {
	/**
	 * Middleware function that checks if the user's role is among the allowed roles.
	 * @function roleChecker
	 * @param {Request} req - The request object.
	 * @param {Response} res - The response object.
	 * @param {Function} next - The next middleware function.
	 * @returns {void}
	 */
	return (req, res, next) => {
		const userRole = req.user.role
		if (roles.includes(userRole)) {
			next()
		} else {
			res.status(403).send('Forbidden')
		}
	}
}
