import { Request, Response } from 'express';
import userService from '../application/userService';

class UserController {
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (err: any) {
      res
        .status(500)
        .json({ message: 'Error creating user', error: err.message });
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.getUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (err: any) {
      res
        .status(500)
        .json({ message: 'Error fetching user', error: err.message });
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (err: any) {
      res
        .status(500)
        .json({ message: 'Error fetching users', error: err.message });
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (err: any) {
      res
        .status(500)
        .json({ message: 'Error updating user', error: err.message });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      await userService.deleteUser(req.params.id);
      res.status(204).send();
    } catch (err: any) {
      res
        .status(500)
        .json({ message: 'Error deleting user', error: err.message });
    }
  }
}

export default new UserController();
