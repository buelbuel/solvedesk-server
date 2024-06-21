import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	CreateDateColumn,
	DeleteDateColumn,
	UpdateDateColumn,
	ManyToOne
} from 'typeorm'
import { Ticket } from './ticket.entity'
import { User } from './user.entity'

/**
 * Represents a support tickets priority.
 * 
 * @file controllers/entities/ticket.entity.ts
 */
@Entity()
export class TicketPriority {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({ length: 255, nullable: false })
	name: string

	@OneToMany(() => Ticket, (ticket) => ticket.priority)
	tickets: Ticket[]

	@CreateDateColumn({ nullable: false })
	createdAt: Date

	@UpdateDateColumn({ nullable: true })
	updatedAt: Date

	@DeleteDateColumn({ nullable: true })
	deletedAt: Date

	@ManyToOne(() => User, (user) => user.createdTicketPriorities, { nullable: false })
	createdBy: User

	@ManyToOne(() => User, (user) => user.updatedTicketPriorities, { nullable: true })
	updatedBy: User
}
