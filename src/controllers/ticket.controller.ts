import { Request, Response } from 'express'
import { TicketService } from '../services/ticket.service'

const ticketService = new TicketService()

/**
 * 
 * @source controllers/ticket.controller.ts
 */
export const createTicket = async (req: Request, res: Response) => {
	try {
		const newTicket = await ticketService.createTicket(req.body)
		res.status(201).json(newTicket)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

export const getTickets = async (req: Request, res: Response) => {
	try {
		const page = parseInt(req.query.page as string) || 1
		const pageSize = parseInt(req.query.pageSize as string) || 20

		const { tickets, totalPages } = await ticketService.getTickets(
			page,
			pageSize
		)
		res.status(200).json({ tickets, totalPages })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}
