/**
 * Represents an account.
 * @typedef {Object} Account
 * @property {string} id - The unique identifier of the account.
 * @property {string} name - The name of the account.
 * @property {string} description - The description of the account.
 * @property {string} billingStreet - The street address for billing.
 * @property {string} billingCity - The city for billing.
 * @property {string} billingCode - The postal code for billing.
 * @property {string} billingState - The state or province for billing.
 * @property {string} billingCountry - The country for billing.
 * @property {string} mailingStreet - The street address for mailing.
 * @property {string} mailingCity - The city for mailing.
 * @property {string} mailingCode - The postal code for mailing.
 * @property {string} mailingState - The state or province for mailing.
 * @property {string} mailingCountry - The country for mailing.
 * @property {string} website - The website URL of the account.
 * @property {string} phone - The phone number of the account.
 * @property {Date} createdAt - The date when the account was created.
 * @property {Date} updatedAt - The date when the account was last updated.
 * @property {Date} deletedAt - The date when the account was soft-deleted (optional).
 * @property {string} assignedTo - The ID or name of the user assigned to this account.
 * @property {Array} contacts - An array of contact IDs or objects associated with this account.
 * @property {string} createdBy - The ID or name of the user who created this account.
 * @property {string} updatedBy - The ID or name of the user who last updated this account.
 */

/**
 * Represents an account entity.
 */
class Account {
	/**
	 * Creates an instance of Account.
	 * @param {string} id - The unique identifier of the account.
	 * @param {string} name - The name of the account.
	 * @param {string} description - The description of the account.
	 * @param {string} billingStreet - The street address for billing.
	 * @param {string} billingCity - The city for billing.
	 * @param {string} billingCode - The postal code for billing.
	 * @param {string} billingState - The state or province for billing.
	 * @param {string} billingCountry - The country for billing.
	 * @param {string} mailingStreet - The street address for mailing.
	 * @param {string} mailingCity - The city for mailing.
	 * @param {string} mailingCode - The postal code for mailing.
	 * @param {string} mailingState - The state or province for mailing.
	 * @param {string} mailingCountry - The country for mailing.
	 * @param {string} website - The website URL of the account.
	 * @param {string} phone - The phone number of the account.
	 * @param {Date} createdAt - The date when the account was created.
	 * @param {Date} updatedAt - The date when the account was last updated.
	 * @param {Date} deletedAt - The date when the account was soft-deleted (optional).
	 * @param {string} assignedTo - The ID or name of the user assigned to this account.
	 * @param {Array} contacts - An array of contact IDs or objects associated with this account.
	 * @param {string} createdBy - The ID or name of the user who created this account.
	 * @param {string} updatedBy - The ID or name of the user who last updated this account.
	 */
	constructor(
		id,
		name,
		description,
		billingStreet,
		billingCity,
		billingCode,
		billingState,
		billingCountry,
		mailingStreet,
		mailingCity,
		mailingCode,
		mailingState,
		mailingCountry,
		website,
		phone,
		createdAt,
		updatedAt,
		deletedAt,
		assignedTo,
		contacts,
		createdBy,
		updatedBy
	) {
		this.id = id
		this.name = name
		this.description = description
		this.billingStreet = billingStreet
		this.billingCity = billingCity
		this.billingCode = billingCode
		this.billingState = billingState
		this.billingCountry = billingCountry
		this.mailingStreet = mailingStreet
		this.mailingCity = mailingCity
		this.mailingCode = mailingCode
		this.mailingState = mailingState
		this.mailingCountry = mailingCountry
		this.website = website
		this.phone = phone
		this.createdAt = createdAt
		this.updatedAt = updatedAt
		this.deletedAt = deletedAt
		this.assignedTo = assignedTo
		this.contacts = contacts
		this.createdBy = createdBy
		this.updatedBy = updatedBy
	}
}

export default Account
