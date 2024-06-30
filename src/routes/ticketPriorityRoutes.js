import { Router } from 'express'
import { checkJwt } from '../middlewares/checkJwt.js'
import { createTicketPriority, getTicketPriorities } from '../controllers/ticketPriorityController.js'

/**
 * @namespace TicketPriorityRoutes
 * @type {Router}
 * @exports TicketPriorityRoutes
 */
const router = Router()

/**
 * Route to create a new ticket priority.
 *
 * @memberof TicketPriorityRoutes
 * POST /ticket-priorities/
 * @type {Router}
 * @param {string} Authorization - The JWT token
 * @name CreateTicketPriority
 */
router.post('/', [checkJwt], createTicketPriority)

/**
 * Route to get all ticket priorities.
 *
 * @memberof TicketPriorityRoutes
 * GET /ticket-priorities/
 * @type {Router}
 * @param {string} Authorization - The JWT token
 * @name GetTicketPriorities
 */
router.get('/', [checkJwt], getTicketPriorities)

export default router
