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
import { Length, IsNotEmpty } from 'class-validator'
import * as bcrypt from 'bcrypt'
import { Organization } from './organization.entity'
import { Ticket } from './ticket.entity'
import { Account } from './account.entity'
import { Contact } from './contact.entity'

/**
 * Represents a user.
 *
 * @source controllers/entities/ticket.entity.ts
 */
@Entity({ name: 'user' })
export class User {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({ length: 255, nullable: false })
	email: string

	@Column({ length: 255 })
	firstName: string

	@Column({ length: 255, nullable: false })
	@IsNotEmpty()
	lastName: string

	@Column({ length: 255, nullable: false })
	@IsNotEmpty()
	role: string

	@Column({ nullable: false })
	password: string

	@CreateDateColumn({ nullable: false })
	@IsNotEmpty()
	createdAt: Date

	@UpdateDateColumn({ nullable: true })
	updatedAt: Date

	@DeleteDateColumn({ nullable: true })
	deletedAt: Date

	@OneToMany(() => Ticket, ticket => ticket.assignedTo)
	assignedTickets: Ticket[]

	@OneToMany(() => Account, account => account.assignedTo)
	accounts: Account[]

	@OneToMany(() => Contact, contact => contact.assignedTo)
	contacts: Contact[]

	@ManyToOne(() => Organization, organization => organization.users)
	organization: Organization

	@OneToMany(() => Ticket, ticket => ticket.createdBy)
	createdAccounts: Ticket[]

	@OneToMany(() => Ticket, ticket => ticket.updatedBy)
	updatedAccounts: Ticket[]

	@OneToMany(() => Ticket, ticket => ticket.createdBy)
	createdContacts: Ticket[]

	@OneToMany(() => Ticket, ticket => ticket.updatedBy)
	updatedContacts: Ticket[]

	@OneToMany(() => Ticket, ticket => ticket.updatedBy)
	updatedOrganizations: Ticket[]

	@OneToMany(() => Ticket, ticket => ticket.createdBy)
	createdSalutations: Ticket[]

	@OneToMany(() => Ticket, ticket => ticket.updatedBy)
	updatedSalutations: Ticket[]

	@OneToMany(() => Ticket, ticket => ticket.createdBy)
	createdTickets: Ticket[]

	@OneToMany(() => Ticket, ticket => ticket.updatedBy)
	updatedTickets: Ticket[]

	@OneToMany(() => Ticket, ticket => ticket.closedBy)
	closedTickets: Ticket[]

	@OneToMany(() => Ticket, ticket => ticket.createdBy)
	createdTicketCategories: Ticket[]

	@OneToMany(() => Ticket, ticket => ticket.updatedBy)
	updatedTicketCategories: Ticket[]

	@OneToMany(() => Ticket, ticket => ticket.createdBy)
	createdTicketPriorities: Ticket[]

	@OneToMany(() => Ticket, ticket => ticket.updatedBy)
	updatedTicketPriorities: Ticket[]

	@OneToMany(() => Ticket, ticket => ticket.createdBy)
	createdTicketStatuses: Ticket[]

	@OneToMany(() => Ticket, ticket => ticket.updatedBy)
	updatedTicketStatuses: Ticket[]

	@OneToMany(() => Ticket, ticket => ticket.createdBy)
	createdTicketTypes: Ticket[]

	@OneToMany(() => Ticket, ticket => ticket.updatedBy)
	updatedTicketTypes: Ticket[]

	@OneToMany(() => User, user => user.updatedBy)
	updatedUsers: User[]

	@ManyToOne(() => User, user => user.updatedUsers, { nullable: true })
	updatedBy: User

	hashPassword() {
		this.password = bcrypt.hashSync(this.password, 8)
	}

	checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
		return bcrypt.compareSync(unencryptedPassword, this.password)
	}
}
