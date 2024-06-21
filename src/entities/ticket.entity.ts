import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
} from 'typeorm'
import { User } from './user.entity'
import { TicketType } from './ticket.type.entity'
import { TicketStatus } from './ticket.status.entity'
import { Contact } from './contact.entity'
import { Organization } from './organization.entity'
import { TicketPriority } from './ticket.priority.entity'
import { TicketCategory } from './ticket.category.entity'

/**
 * Represents a support ticket.
 * 
 * @file controllers/entities/ticket.entity.ts
 */
@Entity()
export class Ticket {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({ length: 255, nullable: false })
	subject: string

	@Column({ length: 243780, nullable: true })
	description: string

	@Column({ length: 255, nullable: true })
	email: string

	@Column({ length: 10, nullable: false })
	ticketNumber: string

	@Column({ type: 'timestamptz', nullable: true })
	resolvedAt: Date

	@CreateDateColumn({ nullable: false })
	createdAt: Date

	@UpdateDateColumn({ nullable: true })
	updatedAt: Date

	@DeleteDateColumn({ nullable: true })
	deletedAt: Date

	@ManyToOne(() => Contact, (contact) => contact.tickets, { nullable: true })
	contact: Contact

	@ManyToOne(() => TicketPriority, (ticketPriority) => ticketPriority.tickets, { nullable: true })
	priority: TicketPriority

	@ManyToOne(() => TicketCategory, (ticketCategory) => ticketCategory.tickets, { nullable: true })
	category: TicketCategory

	@ManyToOne(() => TicketType, (ticketType) => ticketType.tickets, { nullable: true })
	type: TicketType

	@ManyToOne(() => TicketStatus, (ticketStatus) => ticketStatus.tickets, { nullable: true })
	status: TicketStatus

	@ManyToOne(() => Organization, (organization) => organization.tickets, { nullable: false })
	organization: Organization

	@ManyToOne(() => User, (user) => user.assignedTickets, { nullable: true })
	assignedTo: User

	@ManyToOne(() => User, (user) => user.closedTickets, { nullable: true })
	closedBy: User

	@ManyToOne(() => User, (user) => user.createdTickets, { nullable: false })
	createdBy: User

	@ManyToOne(() => User, (user) => user.updatedTickets, { nullable: true })
	updatedBy: User
}
