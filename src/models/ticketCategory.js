/**
 * Represents a support ticket's category.
 * @typedef {Object} TicketCategory
 * @property {string} id - The unique identifier of the ticket category.
 * @property {string} name - The name of the ticket category.
 * @property {string} description - The description of the ticket category.
 * @property {Array} ticketTypes - Array of ticket types associated with this category.
 * @property {Array} tickets - Array of tickets belonging to this category.
 * @property {Date} createdAt - The date when the ticket category was created.
 * @property {Date} updatedAt - The date when the ticket category was last updated.
 * @property {Date} deletedAt - The date when the ticket category was deleted (soft delete).
 * @property {string} createdBy - The user who created the ticket category.
 * @property {string} updatedBy - The user who last updated the ticket category.
 */

/**
 * Represents a support ticket category entity.
 */
class TicketCategory {
	/**
	 * Creates an instance of TicketCategory.
	 * @param {string} id - The unique identifier of the ticket category.
	 * @param {string} name - The name of the ticket category.
	 * @param {string} description - The description of the ticket category.
	 * @param {Array} ticketTypes - Array of ticket types associated with this category.
	 * @param {Array} tickets - Array of tickets belonging to this category.
	 * @param {Date} createdAt - The date when the ticket category was created.
	 * @param {Date} updatedAt - The date when the ticket category was last updated.
	 * @param {Date} deletedAt - The date when the ticket category was deleted (soft delete).
	 * @param {string} createdBy - The user who created the ticket category.
	 * @param {string} updatedBy - The user who last updated the ticket category.
	 */
	constructor(id, name, description, ticketTypes, tickets, createdAt, updatedAt, deletedAt, createdBy, updatedBy) {
		this.id = id
		this.name = name
		this.description = description
		this.ticketTypes = ticketTypes
		this.tickets = tickets
		this.createdAt = createdAt
		this.updatedAt = updatedAt
		this.deletedAt = deletedAt
		this.createdBy = createdBy
		this.updatedBy = updatedBy
	}
}

export default TicketCategory
