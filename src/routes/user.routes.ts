import { Router } from 'express'
import {
	getUsers,
	getOneById,
	editUser,
	deleteUser
} from '../controllers/user.controller'
import { checkJwt } from '../middlewares/checkJwt.middleware'
import { checkRole } from '../middlewares/checkRole.middleware'

const router = Router()

//Get all users
router.get('/', [checkJwt, checkRole(['ADMIN'])], getUsers)

// Get one user
router.get('/:id', [checkJwt], getOneById)

//Edit one user
router.patch('/:id([0-9]+)', [checkJwt, checkRole(['ADMIN'])], editUser)

//Delete one user
router.delete('/:id([0-9]+)', [checkJwt, checkRole(['ADMIN'])], deleteUser)

export default router
