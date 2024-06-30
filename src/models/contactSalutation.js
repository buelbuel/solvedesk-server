/**
 * Represents a contact's salutation.
 * @typedef {Object} ContactSalutation
 * @property {string} id - The unique identifier of the contact salutation.
 * @property {string} name - The name of the contact salutation.
 * @property {string} letterSalutation - The letter salutation associated with the contact (e.g., Mr., Ms., Dr.).
 * @property {Date} createdAt - The date when the contact salutation was created.
 * @property {Date} updatedAt - The date when the contact salutation was last updated.
 * @property {Date} deletedAt - The date when the contact salutation was soft-deleted (optional).
 * @property {string} createdBy - The ID or name of the user who created this contact salutation.
 * @property {string} updatedBy - The ID or name of the user who last updated this contact salutation.
 */

/**
 * Represents a contact salutation entity.
 */
class ContactSalutation {
	/**
	 * Creates an instance of ContactSalutation.
	 * @param {string} id - The unique identifier of the contact salutation.
	 * @param {string} name - The name of the contact salutation.
	 * @param {string} letterSalutation - The letter salutation associated with the contact.
	 * @param {Date} createdAt - The date when the contact salutation was created.
	 * @param {Date} updatedAt - The date when the contact salutation was last updated.
	 * @param {Date} deletedAt - The date when the contact salutation was soft-deleted (optional).
	 * @param {string} createdBy - The ID or name of the user who created this contact salutation.
	 * @param {string} updatedBy - The ID or name of the user who last updated this contact salutation.
	 */
	constructor(id, name, letterSalutation, createdAt, updatedAt, deletedAt, createdBy, updatedBy) {
		this.id = id
		this.name = name
		this.letterSalutation = letterSalutation
		this.createdAt = createdAt
		this.updatedAt = updatedAt
		this.deletedAt = deletedAt
		this.createdBy = createdBy
		this.updatedBy = updatedBy
	}
}

export default ContactSalutation
