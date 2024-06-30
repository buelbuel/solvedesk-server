/**
 * Represents a support ticket's priority.
 * @typedef {Object} TicketPriority
 * @property {string} id - The unique identifier of the ticket priority.
 * @property {string} name - The name of the ticket priority.
 * @property {Array} tickets - Array of tickets associated with this priority.
 * @property {Date} createdAt - The date when the ticket priority was created.
 * @property {Date} updatedAt - The date when the ticket priority was last updated.
 * @property {Date} deletedAt - The date when the ticket priority was deleted (soft delete).
 * @property {string} createdBy - The user who created the ticket priority.
 * @property {string} updatedBy - The user who last updated the ticket priority.
 */

/**
 * Represents a support ticket priority entity.
 */
class TicketPriority {
	/**
	 * Creates an instance of TicketPriority.
	 * @param {string} id - The unique identifier of the ticket priority.
	 * @param {string} name - The name of the ticket priority.
	 * @param {Array} tickets - Array of tickets associated with this priority.
	 * @param {Date} createdAt - The date when the ticket priority was created.
	 * @param {Date} updatedAt - The date when the ticket priority was last updated.
	 * @param {Date} deletedAt - The date when the ticket priority was deleted (soft delete).
	 * @param {string} createdBy - The user who created the ticket priority.
	 * @param {string} updatedBy - The user who last updated the ticket priority.
	 */
	constructor(id, name, tickets, createdAt, updatedAt, deletedAt, createdBy, updatedBy) {
		this.id = id
		this.name = name
		this.tickets = tickets
		this.createdAt = createdAt
		this.updatedAt = updatedAt
		this.deletedAt = deletedAt
		this.createdBy = createdBy
		this.updatedBy = updatedBy
	}
}

export default TicketPriority
