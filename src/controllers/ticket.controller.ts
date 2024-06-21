import { Request, Response } from 'express';
import { TicketService } from '../services/ticket.service';

const ticketService = new TicketService();

export const createTicket = async (req: Request, res: Response) => {
    try {
        const newTicket = await ticketService.createTicket(req.body);
        res.status(201).json(newTicket);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getTickets = async (req: Request, res: Response) => {
    try {
        const tickets = await ticketService.getTickets();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
