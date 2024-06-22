import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	OneToMany,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn
} from 'typeorm'
import { User } from './user.entity'
import { Contact } from './contact.entity'

/**
 * Represents a account.
 *
 * @file controllers/entities/ticket.entity.ts
 */

@Entity()
export class Account {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({ length: 255 })
	name: string

	@Column({ length: 255, nullable: true })
	description: string

	@Column({ length: 255, nullable: true })
	billingStreet: string

	@Column({ length: 255, nullable: true })
	billingCity: string

	@Column({ length: 255, nullable: true })
	billingCode: string

	@Column({ length: 255, nullable: true })
	billingState: string

	@Column({ length: 255, nullable: true })
	billingCountry: string

	@Column({ length: 255, nullable: true })
	mailingStreet: string

	@Column({ length: 255, nullable: true })
	mailingCity: string

	@Column({ length: 255, nullable: true })
	mailingCode: string

	@Column({ length: 255, nullable: true })
	mailingState: string

	@Column({ length: 255, nullable: true })
	mailingCountry: string

	@Column({ length: 255, nullable: true })
	website: string

	@Column({ length: 255, nullable: true })
	phone: string

	@CreateDateColumn({ nullable: false })
	createdAt: Date

	@UpdateDateColumn({ nullable: true })
	updatedAt: Date

	@DeleteDateColumn({ nullable: true })
	deletedAt: Date

	@ManyToOne(() => User, user => user.accounts, { nullable: false })
	assignedTo: User

	@OneToMany(() => Contact, contact => contact.account)
	contacts: Contact[]

	@ManyToOne(() => User, user => user.createdAccounts, { nullable: false })
	createdBy: User

	@ManyToOne(() => User, user => user.updatedAccounts, { nullable: true })
	updatedBy: User
}
