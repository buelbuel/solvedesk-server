import { AppDataSource } from '../data-source'
import { Ticket } from '../entities/ticket.entity'

export class TicketService {
  private ticketRepository = AppDataSource.getRepository(Ticket)

  async createTicket(data: Partial<Ticket>): Promise<Ticket> {
    const newTicket = this.ticketRepository.create(data)
    return this.ticketRepository.save(newTicket)
  }

  async getTickets(page: number = 1, pageSize: number = 20): Promise<{ tickets: Ticket[], totalPages: number }> {
    const [tickets, totalTickets] = await this.ticketRepository.findAndCount({
      skip: (page - 1) * pageSize,
      take: pageSize
    })

    const totalPages = Math.ceil(totalTickets / pageSize)
    return { tickets, totalPages }
  }
}
