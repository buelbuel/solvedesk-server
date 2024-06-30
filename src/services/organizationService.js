import pool from '../database.js'
import Organization from '../models/organization.js'

/**
 * Service to handle organization-related operations.
 * @class OrganizationService
 * @namespace OrganizationService
 */
export default class OrganizationService {
	/**
	 * Creates a new organization.
	 *
	 * @function
	 * @name createOrganization
	 * @memberof OrganizationService
	 * @param {Object} data - The organization data.
	 * @param {string} data.name - The name of the organization.
	 * @param {string} data.billingStreet - The billing street of the organization.
	 * @param {string} data.billingCode - The billing code of the organization.
	 * @param {string} data.billingCity - The billing city of the organization.
	 * @param {string} data.billingState - The billing state of the organization.
	 * @param {string} data.billingCountry - The billing country of the organization.
	 * @returns {Promise<Organization>} The created organization.
	 */
	async createOrganization(data) {
		const { rows } = await pool.query(
			'INSERT INTO organizations (name, billingStreet, billingCode, billingCity, billingState, billingCountry) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
			[data.name, data.billingStreet, data.billingCode, data.billingCity, data.billingState, data.billingCountry]
		)
		const orgData = rows[0]
		return new Organization(
			orgData.id,
			orgData.name,
			orgData.billingStreet,
			orgData.billingCode,
			orgData.billingCity,
			orgData.billingState,
			orgData.billingCountry,
			orgData.createdAt,
			orgData.updatedAt,
			orgData.updatedBy
		)
	}

	/**
	 * Retrieves all organizations.
	 *
	 * @function
	 * @name getOrganizations
	 * @memberof OrganizationService
	 * @returns {Promise<Array<Organization>>} The list of organizations.
	 */
	async getOrganizations() {
		const { rows } = await pool.query('SELECT * FROM organizations')
		return rows.map(
			orgData =>
				new Organization(
					orgData.id,
					orgData.name,
					orgData.billingStreet,
					orgData.billingCode,
					orgData.billingCity,
					orgData.billingState,
					orgData.billingCountry,
					orgData.createdAt,
					orgData.updatedAt,
					orgData.updatedBy
				)
		)
	}

	/**
	 * Retrieves an organization by its ID.
	 *
	 * @function
	 * @name getOrganizationById
	 * @memberof OrganizationService
	 * @param {string} id - The ID of the organization.
	 * @returns {Promise<Organization>} The organization.
	 */
	async getOrganizationById(id) {
		const { rows } = await pool.query('SELECT * FROM organizations WHERE id = $1', [id])
		return new Organization(...rows[0])
	}

	/**
	 * Updates an organization.
	 *
	 * @function
	 * @name updateOrganization
	 * @memberof OrganizationService
	 * @param {string} id - The ID of the organization.
	 * @param {Object} data - The organization data.
	 * @returns {Promise<Organization>} The updated organization.
	 */
	async updateOrganization(id, data) {
		const { rows } = await pool.query('UPDATE organizations SET name = $1 WHERE id = $2 RETURNING *', [
			data.name,
			id
		])
		return new Organization(...rows[0])
	}

	/**
	 * Deletes an organization.
	 *
	 * @function
	 * @name deleteOrganization
	 * @memberof OrganizationService
	 * @param {string} id - The ID of the organization.
	 * @returns {Promise<void>}
	 */
	async deleteOrganization(id) {
		await pool.query('DELETE FROM organizations WHERE id = $1', [id])
	}
}
