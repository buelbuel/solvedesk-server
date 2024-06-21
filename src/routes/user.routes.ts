import { Router } from 'express'
import { listAll, getOneById, editUser, deleteUser } from '../controllers/user.controller'
import { checkJwt } from '../middlewares/checkJwt.middleware'
import { checkRole } from '../middlewares/checkRole.middleware'

const router = Router()

//Get all users
router.get('/', [checkJwt, checkRole(['ADMIN'])], listAll)

// Get one user
router.get('/:id([0-9]+)', [checkJwt, checkRole(['ADMIN'])], getOneById)

//Edit one user
router.patch('/:id([0-9]+)', [checkJwt, checkRole(['ADMIN'])], editUser)

//Delete one user
router.delete('/:id([0-9]+)', [checkJwt, checkRole(['ADMIN'])], deleteUser)

export default router