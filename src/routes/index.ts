// src/routes/index.ts
import { Router } from 'express'
import authRoutes from './auth.routes'
import organizationRoutes from './organization.routes'
import ticketRoutes from './ticket.routes'
import userRoutes from './user.routes'
import profileRoutes from './profile.routes'

const router = Router()

router.use('/auth', authRoutes)
router.use('/organizations', organizationRoutes)
router.use('/tickets', ticketRoutes)
router.use('/users', userRoutes)
router.use('/profile', profileRoutes)

export default router
