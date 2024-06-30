/**
 * Represents a support ticket's type.
 * @typedef {Object} TicketType
 * @property {string} id - The unique identifier of the ticket type.
 * @property {string} name - The name of the ticket type.
 * @property {string} description - The description of the ticket type.
 * @property {Object} ticketCategory - The category to which this ticket type belongs.
 * @property {Array} tickets - Array of tickets associated with this ticket type.
 * @property {Date} createdAt - The date when the ticket type was created.
 * @property {Date} updatedAt - The date when the ticket type was last updated.
 * @property {Date} deletedAt - The date when the ticket type was deleted (soft delete).
 * @property {string} createdBy - The user who created the ticket type.
 * @property {string} updatedBy - The user who last updated the ticket type.
 */

/**
 * Represents a support ticket type entity.
 */
class TicketType {
	/**
	 * Creates an instance of TicketType.
	 * @param {string} id - The unique identifier of the ticket type.
	 * @param {string} name - The name of the ticket type.
	 * @param {string} description - The description of the ticket type.
	 * @param {Object} ticketCategory - The category to which this ticket type belongs.
	 * @param {Array} tickets - Array of tickets associated with this ticket type.
	 * @param {Date} createdAt - The date when the ticket type was created.
	 * @param {Date} updatedAt - The date when the ticket type was last updated.
	 * @param {Date} deletedAt - The date when the ticket type was deleted (soft delete).
	 * @param {string} createdBy - The user who created the ticket type.
	 * @param {string} updatedBy - The user who last updated the ticket type.
	 */
	constructor(id, name, description, ticketCategory, tickets, createdAt, updatedAt, deletedAt, createdBy, updatedBy) {
		this.id = id
		this.name = name
		this.description = description
		this.ticketCategory = ticketCategory
		this.tickets = tickets
		this.createdAt = createdAt
		this.updatedAt = updatedAt
		this.deletedAt = deletedAt
		this.createdBy = createdBy
		this.updatedBy = updatedBy
	}
}

export default TicketType
