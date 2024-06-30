/**
 * Represents an organization.
 * @typedef {Object} Organization
 * @property {string} id - The unique identifier of the organization.
 * @property {string} name - The name of the organization.
 * @property {string} billingStreet - The street address for billing of the organization.
 * @property {string} billingCode - The postal code for billing of the organization.
 * @property {string} billingCity - The city for billing of the organization.
 * @property {string} billingState - The state or region for billing of the organization.
 * @property {string} billingCountry - The country for billing of the organization.
 * @property {Date} updatedAt - The date when the organization was last updated.
 * @property {Array} users - An array of users associated with the organization.
 * @property {Array} tickets - An array of tickets associated with the organization.
 * @property {string} updatedBy - The ID or name of the user who last updated this organization.
 */

/**
 * Represents an organization entity.
 */
class Organization {
	/**
	 * Creates an instance of Organization.
	 * @param {string} id - The unique identifier of the organization.
	 * @param {string} name - The name of the organization.
	 * @param {string} billingStreet - The street address for billing of the organization.
	 * @param {string} billingCode - The postal code for billing of the organization.
	 * @param {string} billingCity - The city for billing of the organization.
	 * @param {string} billingState - The state or region for billing of the organization.
	 * @param {string} billingCountry - The country for billing of the organization.
	 * @param {Date} updatedAt - The date when the organization was last updated.
	 * @param {Array} users - An array of users associated with the organization.
	 * @param {Array} tickets - An array of tickets associated with the organization.
	 * @param {string} updatedBy - The ID or name of the user who last updated this organization.
	 */
	constructor(
		id,
		name,
		billingStreet,
		billingCode,
		billingCity,
		billingState,
		billingCountry,
		updatedAt,
		users,
		tickets,
		updatedBy
	) {
		this.id = id
		this.name = name
		this.billingStreet = billingStreet
		this.billingCode = billingCode
		this.billingCity = billingCity
		this.billingState = billingState
		this.billingCountry = billingCountry
		this.updatedAt = updatedAt
		this.users = users
		this.tickets = tickets
		this.updatedBy = updatedBy
	}
}

export default Organization
