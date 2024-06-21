// src/controllers/auth.controller.ts
import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

const authService = new AuthService();

export class AuthController {
    static register = async (req: Request, res: Response) => {
        const { email, password, firstName, lastName } = req.body;
        try {
            const newUser = await authService.createUser(email, password, firstName, lastName);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(409).json({ error: error.message });
        }
    };

    static login = async (req: Request, res: Response) => {
        const { email, password } = req.body;
        try {
            const token = await authService.validateUser(email, password);
            res.json({ token });
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    };

    static changePassword = async (req: Request, res: Response) => {
        try {
            await authService.changePassword(req, res);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
}
