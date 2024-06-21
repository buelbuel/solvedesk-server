import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	OneToMany,
	CreateDateColumn,
	DeleteDateColumn,
	UpdateDateColumn
} from 'typeorm'
import { TicketCategory } from './ticket.category.entity'
import { Ticket } from './ticket.entity'
import { User } from './user.entity'

/**
 * Represents a support tickets type.
 * 
 * @file controllers/entities/ticket.entity.ts
 */

@Entity()
export class TicketType {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({ length: 255 })
	name: string

	@Column({ length: 255, nullable: true })
	description: string | null

	@ManyToOne(() => TicketCategory, (ticketCategory) => ticketCategory.ticketTypes, { nullable: false })
	ticketCategory: TicketCategory

	@OneToMany(() => Ticket, (ticket) => ticket.type)
	tickets: Ticket[]

	@CreateDateColumn({ nullable: false })
	createdAt: Date

	@UpdateDateColumn({ nullable: true })
	updatedAt: Date

	@DeleteDateColumn({ nullable: true })
	deletedAt: Date

	@ManyToOne(() => User, (user) => user.createdTicketTypes, { nullable: false })
	createdBy: User

	@ManyToOne(() => User, (user) => user.updatedTicketTypes, { nullable: true })
	updatedBy: User
}
