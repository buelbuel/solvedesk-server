import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	CreateDateColumn,
	DeleteDateColumn,
	UpdateDateColumn,
	ManyToOne,
} from 'typeorm'
import { TicketType } from './ticket.type.entity'
import { Ticket } from './ticket.entity'
import { User } from './user.entity'

/**
 * Represents a support tickets category.
 * 
 * @file controllers/entities/ticket.entity.ts
 */
@Entity()
export class TicketCategory {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({ length: 255, nullable: false })
	name: string

	@Column({ length: 255, nullable: true })
	description: string

	@OneToMany(() => TicketType, (ticketType) => ticketType.ticketCategory)
	ticketTypes: TicketType[]

	@OneToMany(() => Ticket, (ticket) => ticket.category)
	tickets: Ticket[]

	@CreateDateColumn({ nullable: false })
	createdAt: Date

	@UpdateDateColumn({ nullable: true })
	updatedAt: Date

	@DeleteDateColumn({ nullable: true })
	deletedAt: Date

	@ManyToOne(() => User, (user) => user.createdTicketCategories, { nullable: false })
	createdBy: User

	@ManyToOne(() => User, (user) => user.updatedTicketCategories, { nullable: true })
	updatedBy: User
}
