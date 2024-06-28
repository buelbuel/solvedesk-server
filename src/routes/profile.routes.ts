import { Router } from 'express'
import { getCurrentUser } from '../controllers/profile.controller'
import { checkJwt } from '../middlewares/checkJwt.middleware'

const profileRouter = Router()

profileRouter.get('/', [checkJwt], getCurrentUser)

export default profileRouter
