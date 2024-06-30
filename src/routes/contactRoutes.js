import { Router } from 'express'
import { checkJwt } from '../middlewares/checkJwt.js'
import { createContact, getContacts } from '../controllers/contactController.js'

/**
 * @namespace ContactRoutes
 * @type {Router}
 */
const router = Router()

/**
 * Route to create a new contact.
 * POST /contacts/
 * @type {Router}
 * @param {string} Authorization - The JWT token
 * @name CreateContact
 */
router.post('/', [checkJwt], createContact)

/**
 * Route to get all contacts.
 * GET /contacts/
 * @type {Router}
 * @param {string} Authorization - The JWT token
 * @name GetContacts
 */
router.get('/', [checkJwt], getContacts)

export default router
