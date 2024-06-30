/**
 * @description Represents a contact.
 * @typedef {Object} Contact
 * @property {string} id - The unique identifier of the contact.
 * @property {Object} account - The account associated with the contact.
 * @property {string} assignedTo - The ID or name of the user assigned to this contact.
 * @property {string} firstName - The first name of the contact.
 * @property {string} lastName - The last name of the contact.
 * @property {string} phone - The phone number of the contact.
 * @property {string} mobile - The mobile number of the contact.
 * @property {string} email - The email address of the contact.
 * @property {string} role - The role of the contact.
 * @property {Date} createdAt - The date when the contact was created.
 * @property {Date} updatedAt - The date when the contact was last updated.
 * @property {Date} deletedAt - The date when the contact was soft-deleted (optional).
 * @property {Array} tickets - An array of ticket IDs or objects associated with this contact.
 * @property {string} title - The title of the contact.
 * @property {string} description - The description of the contact.
 * @property {string} salutation - The salutation for the contact (Mr., Ms., etc.).
 * @property {string} createdBy - The ID or name of the user who created this contact.
 * @property {string} updatedBy - The ID or name of the user who last updated this contact.
 */
class Contact {
	/**
	 * @description Creates an instance of Contact.
	 * @param {string} id - The unique identifier of the contact.
	 * @param {Object} account - The account associated with the contact.
	 * @param {string} assignedTo - The ID or name of the user assigned to this contact.
	 * @param {string} firstName - The first name of the contact.
	 * @param {string} lastName - The last name of the contact.
	 * @param {string} phone - The phone number of the contact.
	 * @param {string} mobile - The mobile number of the contact.
	 * @param {string} email - The email address of the contact.
	 * @param {string} role - The role of the contact.
	 * @param {Date} createdAt - The date when the contact was created.
	 * @param {Date} updatedAt - The date when the contact was last updated.
	 * @param {Date} deletedAt - The date when the contact was soft-deleted (optional).
	 * @param {Array} tickets - An array of ticket IDs or objects associated with this contact.
	 * @param {string} title - The title of the contact.
	 * @param {string} description - The description of the contact.
	 * @param {string} salutation - The salutation for the contact (Mr., Ms., etc.).
	 * @param {string} createdBy - The ID or name of the user who created this contact.
	 * @param {string} updatedBy - The ID or name of the user who last updated this contact.
	 */
	constructor(
		id,
		account,
		assignedTo,
		firstName,
		lastName,
		phone,
		mobile,
		email,
		role,
		createdAt,
		updatedAt,
		deletedAt,
		tickets,
		title,
		description,
		salutation,
		createdBy,
		updatedBy
	) {
		this.id = id
		this.account = account
		this.assignedTo = assignedTo
		this.firstName = firstName
		this.lastName = lastName
		this.phone = phone
		this.mobile = mobile
		this.email = email
		this.role = role
		this.createdAt = createdAt
		this.updatedAt = updatedAt
		this.deletedAt = deletedAt
		this.tickets = tickets
		this.title = title
		this.description = description
		this.salutation = salutation
		this.createdBy = createdBy
		this.updatedBy = updatedBy
	}
}

export default Contact
