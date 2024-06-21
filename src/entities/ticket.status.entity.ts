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
 * Represents a support tickets status.
 * 
 * @file controllers/entities/ticket.entity.ts
 */

@Entity()
export class TicketStatus {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({ length: 255, nullable: false })
	name: string

	@OneToMany(() => Ticket, (ticket) => ticket.status)
	tickets: Ticket[]

	@CreateDateColumn({ nullable: false })
	createdAt: Date

	@UpdateDateColumn({ nullable: true })
	updatedAt: Date

	@DeleteDateColumn({ nullable: true })
	deletedAt: Date

	@ManyToOne(() => User, (user) => user.createdTicketStatuses, { nullable: false })
	createdBy: User

	@ManyToOne(() => User, (user) => user.updatedTicketStatuses, { nullable: true })
	updatedBy: User
}
