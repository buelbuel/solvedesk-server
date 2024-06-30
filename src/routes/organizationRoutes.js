import { Router } from 'express'
import { createOrganization, getOrganizations } from '../controllers/organizationController.js'

/**
 * @namespace OrganizationRoutes
 * @type {Router}
 * @exports OrganizationRoutes
 */
const router = Router()

/**
 * Route to create a new organization.
 *
 * @memberof OrganizationRoutes
 * POST /organizations/
 * @type {Router}
 * @name CreateOrganization
 */
router.post('/', createOrganization)

/**
 * Route to get all organizations.
 *
 * @memberof OrganizationRoutes
 * GET /organizations/
 * @type {Router}
 * @name GetOrganizations
 */
router.get('/', getOrganizations)

export default router
