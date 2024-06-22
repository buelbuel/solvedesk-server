import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	UpdateDateColumn,
	ManyToOne
} from 'typeorm'
import { User } from './user.entity'

/**
 * Represents a contacts salutation.
 *
 * @file controllers/entities/ticket.entity.ts
 */
@Entity()
export class ContactSalutation {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({ length: 255, nullable: false })
	name: string

	@Column({ length: 255, nullable: true })
	letterSalutation: string

	@CreateDateColumn({ nullable: false })
	createdAt: Date

	@UpdateDateColumn({ nullable: true })
	updatedAt: Date

	@DeleteDateColumn({ nullable: true })
	deletedAt: Date

	@ManyToOne(() => User, user => user.createdSalutations, { nullable: false })
	createdBy: User

	@ManyToOne(() => User, user => user.updatedSalutations, { nullable: true })
	updatedBy: User
}
