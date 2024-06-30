import { Router } from 'express'
import { getUsers, getUserById, editUser, deleteUser } from '../controllers/userController.js'
import { checkJwt } from '../middlewares/checkJwt.js'
import { checkRole } from '../middlewares/checkRole.js'

/**
 * @namespace UserRoutes
 * @type {Router}
 * @exports UserRoutes
 */
const router = Router()

/**
 * Route to get all users.
 *
 * @memberof UserRoutes
 * @type {Router}
 * GET /users/
 * @name GetUsers
 * @param {string} Authorization - The JWT token
 * @param {string} body.salutation - The salutation to create
 */
router.get('/', [checkJwt], getUsers)

/**
 * Route to get a user by ID.
 *
 * @memberof UserRoutes
 * @type {Router}
 * GET /users/:id
 * @name GetUserById
 * @param {string} Authorization - The JWT token
 * @param {string} body.salutation - The salutation to create
 */
router.get('/:id', [checkJwt], getUserById)

/**
 * Route to edit a user by ID (only for admins).
 *
 * @memberof UserRoutes
 * @type {Router}
 * PATCH /users/:id
 * @name EditUser
 * @param {string} Authorization - The JWT token
 * @param {string} body.salutation - The salutation to create
 */
router.patch('/:id', [checkJwt, checkRole(['ADMIN'])], editUser)

/**
 * Route to delete a user by ID (only for admins).
 *
 * @memberof UserRoutes
 * @type {Router}
 * DELETE /users/:id
 * @name DeleteUser
 * @param {string} Authorization - The JWT token
 * @param {string} body.salutation - The salutation to create
 */
router.delete('/:id', [checkJwt, checkRole(['ADMIN'])], deleteUser)

export default router
