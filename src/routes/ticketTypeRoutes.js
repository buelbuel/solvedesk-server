import { Router } from 'express'
import { checkJwt } from '../middlewares/checkJwt.js'
import { createTicketType, getTicketTypes } from '../controllers/ticketTypeController.js'

/**
 * @namespace TicketTypeRoutes
 * @type {Router}
 * @exports TicketTypeRoutes
 */
const router = Router()

/**
 * Route to create a new ticket type.
 *
 * @memberof TicketTypeRoutes
 * POST /ticket-types/
 * @name CreateTicketType
 * @type {Router}
 * @param {string} Authorization - The JWT token
 * @param {string} body.salutation - The salutation to create
 */
router.post('/', [checkJwt], createTicketType)

/**
 * Route to get all ticket types.
 *
 * @memberof TicketTypeRoutes
 * GET /ticket-types/
 * @name GetTicketTypes
 * @type {Router}
 * @param {string} Authorization - The JWT token
 */
router.get('/', [checkJwt], getTicketTypes)

export default router
