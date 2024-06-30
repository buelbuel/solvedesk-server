import { Router } from 'express'
import { checkJwt } from '../middlewares/checkJwt.js'
import { createTicketStatus, getTicketStatuses } from '../controllers/ticketStatusController.js'

/**
 * @namespace TicketStatusRoutes
 * @type {Router}
 * @exports TicketStatusRoutes
 */
const router = Router()

/**
 * Route to create a new ticket status.
 *
 * @memberof TicketStatusRoutes
 * POST /ticket-statuses/
 * @type {Router}
 * @param {string} Authorization - The JWT token
 * @param {string} body.salutation - The salutation to create
 * @name CreateTicketStatus
 */
router.post('/', [checkJwt], createTicketStatus)

/**
 * Route to get all ticket statuses.
 *
 * @memberof TicketStatusRoutes
 * GET /ticket-statuses/
 * @type {Router}
 * @param {string} Authorization - The JWT token
 * @name GetTicketStatuses
 */
router.get('/', [checkJwt], getTicketStatuses)

export default router
