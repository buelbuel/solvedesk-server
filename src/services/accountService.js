import pool from '../database.js'
import Account from '../models/account.js'

/**
 * Service class to handle operations related to accounts.
 * @class AccountService
 * @namespace AccountService
 */
export default class AccountService {
	/**
	 * Creates a new account in the database.
	 * @function
	 * @name createAccount
	 * @memberof AccountService
	 * @param {Object} data - The account data.
	 * @param {string} data.name - The name of the account.
	 * @param {string} data.industry - The industry of the account.
	 * @param {string} data.website - The website URL of the account.
	 * @returns {Promise<Account>} The created account.
	 * @throws {Error} If there is an error creating the account.
	 */
	async createAccount(data) {
		try {
			const { rows } = await pool.query(
				'INSERT INTO accounts (name, industry, website) VALUES ($1, $2, $3) RETURNING *',
				[data.name, data.industry, data.website]
			)
			const accountData = rows[0]
			return new Account(
				accountData.id,
				accountData.name,
				accountData.industry,
				accountData.website,
				accountData.createdAt,
				accountData.updatedAt,
				accountData.deletedAt
			)
		} catch (error) {
			throw new Error(`Error creating account: ${error.message}`)
		}
	}

	/**
	 * Retrieves all accounts from the database.
	 * @function
	 * @name getAccounts
	 * @memberof AccountService
	 * @returns {Promise<Array<Account>>} The list of accounts.
	 * @throws {Error} If there is an error fetching accounts.
	 */
	async getAccounts() {
		try {
			const { rows } = await pool.query('SELECT * FROM accounts')
			return rows.map(
				accountData =>
					new Account(
						accountData.id,
						accountData.name,
						accountData.industry,
						accountData.website,
						accountData.createdAt,
						accountData.updatedAt,
						accountData.deletedAt
					)
			)
		} catch (error) {
			throw new Error(`Error fetching accounts: ${error.message}`)
		}
	}

	/**
	 * Retrieves an account by its ID.
	 * @function
	 * @name getAccountById
	 * @memberof AccountService
	 * @param {string} id - The ID of the account.
	 * @returns {Promise<Account>} The account.
	 */
	async getAccountById(id) {
		const { rows } = await pool.query('SELECT * FROM accounts WHERE id = $1', [id])
		return new Account(...rows[0])
	}

	/**
	 * Updates an account.
	 * @function
	 * @name updateAccount
	 * @memberof AccountService
	 * @param {string} id - The ID of the account.
	 * @param {Object} data - The account data.
	 * @returns {Promise<Account>} The updated account.
	 */
	async updateAccount(id, data) {
		const { rows } = await pool.query('UPDATE accounts SET name = $1 WHERE id = $2 RETURNING *', [data.name, id])
		return new Account(...rows[0])
	}

	/**
	 * Deletes an account.
	 * @function
	 * @name deleteAccount
	 * @memberof AccountService
	 * @param {string} id - The ID of the account.
	 * @returns {Promise<void>}
	 */
	async deleteAccount(id) {
		await pool.query('DELETE FROM accounts WHERE id = $1', [id])
	}
}
