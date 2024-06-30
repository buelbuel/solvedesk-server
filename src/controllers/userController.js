import UserService from '../services/userService.js'

const userService = new UserService()

/**
 * Retrieves all users.
 * @async
 * @function getUsers
 * @param {Request} req - The request object.
 * @param {Response} res - The response object used to send back the list of users.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the list of users or an error message.
 */
export const getUsers = async (req, res) => {
	try {
		const users = await userService.getUsers()
		res.status(200).json(users)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

/**
 * Retrieves a user by ID.
 * @async
 * @function getUserById
 * @param {Request} req - The request object containing the user ID as a parameter.
 * @param {Response} res - The response object used to send back the user details.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the user details or a 'User not found' error message.
 */
export const getUserById = async (req, res) => {
	try {
		const user = await userService.getUserById(req.params.id)
		if (!user) {
			return res.status(404).json({ error: 'User not found' })
		}
		res.status(200).json(user)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

/**
 * Edits a user.
 * @async
 * @function editUser
 * @param {Request} req - The request object containing the user ID as a parameter and updated user details in the body.
 * @param {Response} res - The response object used to send back the updated user details.
 * @returns {Promise<void>} - A promise that resolves to sending a response with the updated user details or an error message.
 */
export const editUser = async (req, res) => {
	try {
		const updatedUser = await userService.editUser(req.params.id, req.body)
		res.status(200).json(updatedUser)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

/**
 * Deletes a user.
 * @async
 * @function deleteUser
 * @param {Request} req - The request object containing the user ID as a parameter.
 * @param {Response} res - The response object used to send back a success status (204 No Content) upon successful deletion.
 * @returns {Promise<void>} - A promise that resolves to sending a response with a success status or an error message.
 */
export const deleteUser = async (req, res) => {
	try {
		await userService.deleteUser(req.params.id)
		res.status(204).send()
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}
