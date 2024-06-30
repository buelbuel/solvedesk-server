import AccountService from '../services/accountService.js'

const accountService = new AccountService()

/**
 * Creates a new account.
 * @async
 * @function createAccount
 * @param {Request} req - The request object containing the account data in the body.
 * @param {Response} res - The response object used to send the status and JSON data.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the newly created account or an error message.
 */
export const createAccount = async (req, res) => {
	try {
		const newAccount = await accountService.createAccount(req.body)
		res.status(201).json(newAccount)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

/**
 * Retrieves all accounts.
 * @async
 * @function getAccounts
 * @param {Request} req - The request object.
 * @param {Response} res - The response object used to send the status and JSON data.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the list of accounts or an error message.
 */
export const getAccounts = async (req, res) => {
	try {
		const accounts = await accountService.getAccounts()
		res.status(200).json(accounts)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}
