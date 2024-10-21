import userRepository from '../repositories/userRepositoryInstance';
import { User, UserDocument } from '../model/userModel';

class UserService {
  async createUser(userData: User): Promise<UserDocument> {
    return userRepository.create(userData);
  }

  async getUserById(id: string): Promise<UserDocument | null> {
    return userRepository.getById(id);
  }

  async getAllUsers(): Promise<UserDocument[]> {
    return userRepository.getAll();
  }

  async updateUser(
    id: string,
    updateData: Partial<User>
  ): Promise<UserDocument | null> {
    return userRepository.update(id, updateData);
  }

  async deleteUser(id: string): Promise<UserDocument | null> {
    return userRepository.delete(id);
  }
}

export default new UserService();
