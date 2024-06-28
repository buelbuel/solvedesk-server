import { Router } from 'express'
import { checkJwt } from '../middlewares/checkJwt.middleware'
import { createTicket, getTickets } from '../controllers/ticket.controller'

/**
 *
 * @source routes/ticket.routes.ts
 */
const router = Router()

router.post('/', [checkJwt], createTicket)
router.get('/', [checkJwt], getTickets)

export default router
