import { Router } from 'express'
import { checkJwt } from '../middlewares/checkJwt.js'
import { createAccount, getAccounts } from '../controllers/accountController.js'

/**
 * @namespace AccountRoutes
 * @type {object}
 */
const router = Router()

/**
 * Route to create a new account.
 * POST /accounts/
 * @type {Router}
 * @param {string} Authorization - The JWT token
 * @name CreateAccount
 */
router.post('/', [checkJwt], createAccount)

/**
 * Route to get all accounts.
 * GET /accounts/
 * @type {Router}
 * @param {string} Authorization - The JWT token
 * @name GetAccounts
 */
router.get('/', [checkJwt], getAccounts)

export default router
