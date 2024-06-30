import { Router } from 'express'
import { checkJwt } from '../middlewares/checkJwt.js'
import { createTicket, getTickets } from '../controllers/ticketController.js'

/**
 * @namespace TicketRoutes
 * @type {Router}
 * @exports TicketRoutes
 */
const router = Router()

/**
 * Route to create a new ticket.
 *
 * @memberof TicketRoutes
 * POST /tickets/
 * @type {Router}
 * @param {string} Authorization - The JWT token
 * @name CreateTicket
 */
router.post('/', [checkJwt], createTicket)

/**
 * Route to get all tickets with pagination.
 *
 * @memberof TicketRoutes
 * GET /tickets/
 * @type {Router}
 * @param {string} Authorization - The JWT token
 * @name GetTickets
 */
router.get('/', [checkJwt], getTickets)

export default router
