import { Router } from 'express'
import { checkJwt } from '../middlewares/checkJwt.js'
import { registerUser, authenticateUser, refreshToken, resetPassword } from '../controllers/authController.js'

/**
 * @namespace AuthRoutes
 * @type {Router}
 */
const router = Router()

/**
 * Route to register a new user.
 * POST /auth/register
 * @type {Router}
 * @name RegisterUser
 */
router.post('/register', registerUser)

/**
 * Route to authenticate a user.
 * POST /auth/login
 * @type {Router}
 * @name AuthenticateUser
 */
router.post('/login', authenticateUser)

/**
 * Route to refresh token.
 * POST /auth/refresh-token
 * @type {Router}
 * @name RefreshToken
 */
router.post('/refresh-token', refreshToken)

/**
 * Route to reset password.
 * POST /auth/reset-password
 * @type {Router}
 * @param {string} Authorization - The JWT token
 * @name ResetPassword
 */
router.post('/reset-password', [checkJwt], resetPassword)

export default router
