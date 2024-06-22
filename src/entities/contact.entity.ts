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
import { Account } from './account.entity'
import { User } from './user.entity'
import { Ticket } from './ticket.entity'
import { ContactSalutation } from './contact.salutation.entity'

/**
 * Represents a contact.
 *
 * @file controllers/entities/ticket.entity.ts
 */

@Entity()
export class Contact {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(() => Account, account => account.contacts, { nullable: false })
	account: Account

	@ManyToOne(() => User, user => user.contacts, { nullable: false })
	assignedTo: User

	@Column({ length: 255, nullable: true })
	firstName: string

	@Column({ length: 255, nullable: false })
	lastName: string

	@Column({ length: 255, nullable: true })
	phone: string

	@Column({ length: 255, nullable: true })
	mobile: string

	@Column({ length: 255, nullable: true })
	email: string

	@Column({ length: 255, nullable: true })
	role: string

	@CreateDateColumn({ nullable: false })
	createdAt: Date

	@UpdateDateColumn({ nullable: true })
	updatedAt: Date

	@DeleteDateColumn({ nullable: true })
	deletedAt: Date

	@OneToMany(() => Ticket, ticket => ticket.contact)
	tickets: Ticket[]

	/**
	 * Represents a support tickets priority.
	 *
	 * @file controllers/entities/ticket.entity.ts
	 */
	@Column({ length: 255, nullable: true })
	title: string

	@Column({ length: 255, nullable: true })
	description: string

	@ManyToOne(() => ContactSalutation)
	salutation: ContactSalutation

	@ManyToOne(() => User, user => user.createdContacts, { nullable: false })
	createdBy: User

	@ManyToOne(() => User, user => user.updatedContacts, { nullable: true })
	updatedBy: User
}
