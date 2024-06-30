import { Router } from 'express'
import { checkJwt } from '../middlewares/checkJwt.js'
import { createContactSalutation, getContactSalutations } from '../controllers/contactSalutationController.js'

/**
 * @namespace ContactSalutationRoutes
 * @type {Router}
 */
const router = Router()

/**
 * Route to create a new contact salutation.
 *
 * POST /contact-salutations/
 * @memberof ContactSalutationRoutes
 * @type {Router}
 * @param {string} Authorization - The JWT token
 * @param {string} body.salutation - The salutation to create
 */
router.post('/', [checkJwt], createContactSalutation)

/**
 * Route to get all contact salutations.
 *
 * GET /contact-salutations/
 * @memberof ContactSalutationRoutes
 * @type {Router}
 * @param {string} Authorization - The JWT token
 */
router.get('/', [checkJwt], getContactSalutations)

export default router
