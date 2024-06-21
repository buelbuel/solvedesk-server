import { User } from '../entities/user.entity';
import { AppDataSource } from '../data-source';
import { validate } from 'class-validator';
import { z } from 'zod';

export class UserService {
    private userRepository = AppDataSource.getRepository(User);

    async getOneById(id: string): Promise<User | undefined> {
        const schema = z.string().uuid();
        const result = schema.safeParse(id);
        if (!result.success) {
            throw new Error('Invalid user ID format');
        }

        try {
            return await this.userRepository.findOne({ where: { id } });
        } catch (error) {
            throw new Error('Error fetching user by ID');
        }
    }

    async listAll(): Promise<User[]> {
        try {
            return await this.userRepository.find();
        } catch (error) {
            throw new Error('Error fetching users');
        }
    }

    async editUser(id: string, userDetails: Partial<User>): Promise<User | undefined> {
        const idSchema = z.string().uuid();
        const userSchema = z.object({
            email: z.string().email().optional(),
            password: z.string().min(6).optional(),
            firstName: z.string().min(1).optional(),
            lastName: z.string().min(1).optional(),
            role: z.string().optional(),
        });

        const idResult = idSchema.safeParse(id);
        if (!idResult.success) {
            throw new Error('Invalid user ID format');
        }

        const userResult = userSchema.safeParse(userDetails);
        if (!userResult.success) {
            throw new Error('Invalid input data');
        }

        try {
            const user = await this.userRepository.findOne({ where: { id } });
            if (!user) {
                throw new Error('User not found');
            }

            Object.assign(user, userDetails);

            const errors = await validate(user);
            if (errors.length > 0) {
                throw new Error('Validation failed');
            }

            return await this.userRepository.save(user);
        } catch (error) {
            throw new Error('Error updating user');
        }
    }

    async deleteUser(id: string): Promise<void> {
        const schema = z.string().uuid();
        const result = schema.safeParse(id);
        if (!result.success) {
            throw new Error('Invalid user ID format');
        }

        try {
            const user = await this.userRepository.findOne({ where: { id } });
            if (!user) {
                throw new Error('User not found');
            }
            await this.userRepository.remove(user);
        } catch (error) {
            throw new Error('Error deleting user');
        }
    }
}
