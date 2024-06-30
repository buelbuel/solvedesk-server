import { Router } from 'express'
import { checkJwt } from '../middlewares/checkJwt.js'
import { createTicketCategory, getTicketCategories } from '../controllers/ticketCategoryController.js'

/**
 * @namespace TicketCategoryRoutes
 * @type {Router}
 * @exports TicketCategoryRoutes
 */
const router = Router()

/**
 * Route to create a new ticket category.
 *
 * @memberof TicketCategoryRoutes
 * POST /ticket-categories/
 * @type {Router}
 * @param {string} Authorization - The JWT token
 * @name CreateTicketCategory
 */
router.post('/', [checkJwt], createTicketCategory)

/**
 * Route to get all ticket categories.
 *
 * @memberof TicketCategoryRoutes
 * GET /ticket-categories/
 * @type {Router}
 * @param {string} Authorization - The JWT token
 * @name GetTicketCategories
 */
router.get('/', [checkJwt], getTicketCategories)

export default router
