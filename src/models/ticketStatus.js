/**
 * Represents a support ticket's status.
 * @typedef {Object} TicketStatus
 * @property {string} id - The unique identifier of the ticket status.
 * @property {string} name - The name of the ticket status.
 * @property {Array} tickets - Array of tickets associated with this status.
 * @property {Date} createdAt - The date when the ticket status was created.
 * @property {Date} updatedAt - The date when the ticket status was last updated.
 * @property {Date} deletedAt - The date when the ticket status was deleted (soft delete).
 * @property {string} createdBy - The user who created the ticket status.
 * @property {string} updatedBy - The user who last updated the ticket status.
 */

/**
 * Represents a support ticket status entity.
 */
class TicketStatus {
	/**
	 * Creates an instance of TicketStatus.
	 * @param {string} id - The unique identifier of the ticket status.
	 * @param {string} name - The name of the ticket status.
	 * @param {Array} tickets - Array of tickets associated with this status.
	 * @param {Date} createdAt - The date when the ticket status was created.
	 * @param {Date} updatedAt - The date when the ticket status was last updated.
	 * @param {Date} deletedAt - The date when the ticket status was deleted (soft delete).
	 * @param {string} createdBy - The user who created the ticket status.
	 * @param {string} updatedBy - The user who last updated the ticket status.
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

export default TicketStatus
