import { Router } from 'express';
import userController from '../controller/userController';

const router = Router();

// User routes
router.post('/users', userController.createUser); // Create a user
router.get('/users', userController.getAllUsers); // Get all users
router.get('/users/:id', userController.getUserById); // Get user by ID
router.put('/users/:id', userController.updateUser); // Update user by ID
router.delete('/users/:id', userController.deleteUser); // Delete user by ID

export default router;
