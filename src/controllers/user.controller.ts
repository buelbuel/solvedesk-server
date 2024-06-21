import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

const userService = new UserService();

export const getOneById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await userService.getOneById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const listAll = async (req: Request, res: Response) => {
    try {
        const users = await userService.listAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const editUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const userDetails = req.body;
    try {
        const updatedUser = await userService.editUser(id, userDetails);
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await userService.deleteUser(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
