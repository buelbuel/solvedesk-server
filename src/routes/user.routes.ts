import { Router } from 'express'
import { getUsers, getOneById, editUser, deleteUser } from '../controllers/user.controller'
import { checkJwt } from '../middlewares/checkJwt.middleware'
import { checkRole } from '../middlewares/checkRole.middleware'

const router = Router()

router.get('/', [checkJwt], getUsers)
router.get('/:id', [checkJwt], getOneById)
router.patch('/:id', [checkJwt, checkRole(['ADMIN'])], editUser)
router.delete('/:id', [checkJwt, checkRole(['ADMIN'])], deleteUser)

export default router
