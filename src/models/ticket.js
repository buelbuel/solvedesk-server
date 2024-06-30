/**
 * Represents a support ticket.
 * @typedef {Object} Ticket
 * @property {string} id - The unique identifier of the ticket.
 * @property {string} subject - The subject or title of the ticket.
 * @property {string} description - The detailed description of the ticket.
 * @property {string} email - The email associated with the ticket.
 * @property {string} ticketNumber - The ticket number or identifier.
 * @property {Date} resolvedAt - The date when the ticket was resolved (if resolved).
 * @property {Date} createdAt - The date when the ticket was created.
 * @property {Date} updatedAt - The date when the ticket was last updated.
 * @property {Date} deletedAt - The date when the ticket was deleted (soft delete).
 * @property {Object} contact - The contact associated with the ticket.
 * @property {string} priority - The priority level of the ticket.
 * @property {string} category - The category of the ticket.
 * @property {string} type - The type or subtype of the ticket.
 * @property {string} status - The current status of the ticket.
 * @property {Object} organization - The organization associated with the ticket.
 * @property {Object} assignedTo - The user or entity assigned to handle the ticket.
 * @property {Object} closedBy - The user who closed the ticket (if closed).
 * @property {Object} createdBy - The user who created the ticket.
 * @property {Object} updatedBy - The user who last updated the ticket.
 */

/**
 * Represents a support ticket entity.
 */
class Ticket {
	/**
	 * Creates an instance of Ticket.
	 * @param {string} id - The unique identifier of the ticket.
	 * @param {string} subject - The subject or title of the ticket.
	 * @param {string} description - The detailed description of the ticket.
	 * @param {string} email - The email associated with the ticket.
	 * @param {string} ticketNumber - The ticket number or identifier.
	 * @param {Date} resolvedAt - The date when the ticket was resolved (if resolved).
	 * @param {Date} createdAt - The date when the ticket was created.
	 * @param {Date} updatedAt - The date when the ticket was last updated.
	 * @param {Date} deletedAt - The date when the ticket was deleted (soft delete).
	 * @param {Object} contact - The contact associated with the ticket.
	 * @param {string} priority - The priority level of the ticket.
	 * @param {string} category - The category of the ticket.
	 * @param {string} type - The type or subtype of the ticket.
	 * @param {string} status - The current status of the ticket.
	 * @param {Object} organization - The organization associated with the ticket.
	 * @param {Object} assignedTo - The user or entity assigned to handle the ticket.
	 * @param {Object} closedBy - The user who closed the ticket (if closed).
	 * @param {Object} createdBy - The user who created the ticket.
	 * @param {Object} updatedBy - The user who last updated the ticket.
	 */
	constructor(
		id,
		subject,
		description,
		email,
		ticketNumber,
		resolvedAt,
		createdAt,
		updatedAt,
		deletedAt,
		contact,
		priority,
		category,
		type,
		status,
		organization,
		assignedTo,
		closedBy,
		createdBy,
		updatedBy
	) {
		this.id = id
		this.subject = subject
		this.description = description
		this.email = email
		this.ticketNumber = ticketNumber
		this.resolvedAt = resolvedAt
		this.createdAt = createdAt
		this.updatedAt = updatedAt
		this.deletedAt = deletedAt
		this.contact = contact
		this.priority = priority
		this.category = category
		this.type = type
		this.status = status
		this.organization = organization
		this.assignedTo = assignedTo
		this.closedBy = closedBy
		this.createdBy = createdBy
		this.updatedBy = updatedBy
	}
}

export default Ticket
