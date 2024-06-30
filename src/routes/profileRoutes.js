import { Router } from 'express'
import { checkJwt } from '../middlewares/checkJwt.js'
import { getCurrentUser, updateCurrentUser } from '../controllers/profileController.js'

/**
 * @namespace ProfileRoutes
 * @type {Router}
 * @exports ProfileRoutes
 */
const router = Router()

/**
 * Route to get the current user's profile information.
 *
 * @memberof ProfileRoutes
 * GET /profile/
 * @type {Router}
 * @param {string} Authorization - The JWT token
 * @name GetCurrentUser
 */
router.get('/', [checkJwt], getCurrentUser)

/**
 * Route to update the current user's profile information.
 *
 * @memberof ProfileRoutes
 * PATCH /profile/
 * @type {Router}
 * @param {string} Authorization - The JWT token
 * @name UpdateCurrentUser
 */
router.patch('/', [checkJwt], updateCurrentUser)

export default router
