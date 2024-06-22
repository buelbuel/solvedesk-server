import { Request, Response } from 'express'
import { OrganizationService } from '../services/organization.service'

const organizationService = new OrganizationService()

export const createOrganization = async (req: Request, res: Response) => {
	try {
		const newOrganization = await organizationService.createOrganization(
			req.body
		)
		res.status(201).json(newOrganization)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

export const getOrganizations = async (req: Request, res: Response) => {
	try {
		const organizations = await organizationService.getOrganizations()
		res.status(200).json(organizations)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}
