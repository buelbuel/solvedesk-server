import { AppDataSource } from '../data-source';
import { Ticket } from '../entities/ticket.entity';

export class TicketService {
    private ticketRepository = AppDataSource.getRepository(Ticket);

    async createTicket(data: Partial<Ticket>): Promise<Ticket> {
        const newTicket = this.ticketRepository.create(data);
        return this.ticketRepository.save(newTicket);
    }

    async getTickets(): Promise<Ticket[]> {
        return this.ticketRepository.find();
    }
}
