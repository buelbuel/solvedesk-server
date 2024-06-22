import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	ManyToOne,
	UpdateDateColumn
} from 'typeorm'
import { User } from './user.entity'
import { Ticket } from './ticket.entity'

/**
 * Represents an organziation.
 *
 * @file controllers/entities/ticket.entity.ts
 */

@Entity()
export class Organization {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({ length: 255, unique: true, nullable: false })
	name: string

	@Column({ length: 255, nullable: true })
	billingStreet: string

	@Column({ length: 255, nullable: true })
	billingCode: string

	@Column({ length: 255, nullable: true })
	billingCity: string

	@Column({ length: 255, nullable: true })
	billingState: string

	@Column({ length: 255, nullable: true })
	billingCountry: string

	@UpdateDateColumn({ nullable: true })
	updatedAt: Date

	@OneToMany(() => User, user => user.organization)
	users: User[]

	@OneToMany(() => Ticket, ticket => ticket.organization)
	tickets: Ticket[]

	@ManyToOne(() => User, user => user.updatedOrganizations, {
		nullable: true
	})
	updatedBy: User
}
