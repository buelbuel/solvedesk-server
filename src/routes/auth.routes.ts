// src/routes/auth.routes.ts
import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { checkJwt } from "../middlewares/checkJwt.middleware";

const router = Router();

router.post('/register', AuthController.register);

//Login route
router.post("/login", AuthController.login);

//Change my password
router.post("/change-password", [checkJwt], AuthController.changePassword);

export default router;
