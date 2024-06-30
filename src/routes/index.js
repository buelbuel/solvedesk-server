import { Router } from 'express'
import authRoutes from './authRoutes.js'
import organizationRoutes from './organizationRoutes.js'
import ticketRoutes from './ticketRoutes.js'
import userRoutes from './userRoutes.js'
import accountRoutes from './accountRoutes.js'
import contactRoutes from './contactRoutes.js'
import profileRoutes from './profileRoutes.js'
import ticketCategoryRoutes from './ticketCategoryRoutes.js'
import ticketPriorityRoutes from './ticketPriorityRoutes.js'
import ticketStatusRoutes from './ticketStatusRoutes.js'
import ticketTypeRoutes from './ticketTypeRoutes.js'
import contactSalutationRoutes from './contactSalutationRoutes.js'

/**
 * @namespace IndexRoutes
 * @type {Router}
 * @exports IndexRoutes
 */
const router = Router()

/**
 * Mounting auth routes under /auth
 *
 * @memberof IndexRoutes
 * /auth
 * @type {Router}
 * @name AuthRoutes
 */
router.use('/auth', authRoutes)

/**
 * Mounting organization routes under /organizations
 *
 * @memberof IndexRoutes
 * /organizations
 * @type {Router}
 * @name OrganizationRoutes
 */
router.use('/organizations', organizationRoutes)

/**
 * Mounting ticket routes under /tickets
 *
 * @memberof IndexRoutes
 * /tickets
 * @type {Router}
 * @name TicketRoutes
 */
router.use('/tickets', ticketRoutes)

/**
 * Mounting user routes under /users
 *
 * @memberof IndexRoutes
 * /users
 * @type {Router}
 * @name UserRoutes
 */
router.use('/users', userRoutes)

/**
 * Mounting profile routes under /profile
 *
 * @memberof IndexRoutes
 * /profile
 * @type {Router}
 * @name ProfileRoutes
 */
router.use('/profile', profileRoutes)

/**
 * Mounting account routes under /accounts
 *
 * @memberof IndexRoutes
 * /accounts
 * @type {Router}
 * @name AccountRoutes
 */
router.use('/accounts', accountRoutes)

/**
 * Mounting contact routes under /contacts
 *
 * @memberof IndexRoutes
 * /contacts
 * @type {Router}
 * @name ContactRoutes
 */
router.use('/contacts', contactRoutes)

/**
 * Mounting contact salutation routes under /contact-salutations
 *
 * @memberof IndexRoutes
 * /contact-salutations
 * @type {Router}
 * @name ContactSalutationRoutes
 */
router.use('/contact-salutations', contactSalutationRoutes)

/**
 * Mounting ticket category routes under /ticket-categories
 *
 * @memberof IndexRoutes
 * /ticket-categories
 * @type {Router}
 * @name TicketCategoryRoutes
 */
router.use('/ticket-categories', ticketCategoryRoutes)

/**
 * Mounting ticket routes under /tickets
 *
 * @memberof IndexRoutes
 * /tickets
 * @type {Router}
 * @name TicketRoutes
 */
router.use('/tickets', ticketRoutes)

/**
 * Mounting user routes under /users
 *
 * @memberof IndexRoutes
 * /users
 * @type {Router}
 * @name UserRoutes
 */
router.use('/users', userRoutes)

/**
 * Mounting profile routes under /profile
 *
 * @memberof IndexRoutes
 * /profile
 * @type {Router}
 * @name TicketPriorityRoutes
 */
router.use('/ticket-priorities', ticketPriorityRoutes)

/**
 * Mounting ticket status routes under /ticket-statuses
 *
 * @memberof IndexRoutes
 * /ticket-statuses
 * @type {Router}
 * @name TicketStatusRoutes
 */
router.use('/ticket-statuses', ticketStatusRoutes)

/**
 * Mounting ticket type routes under /ticket-types
 *
 * @memberof IndexRoutes
 * /ticket-types
 * @type {Router}
 * @name TicketTypeRoutes
 */
router.use('/ticket-types', ticketTypeRoutes)

export default router
