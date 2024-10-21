import UserRepository from './userRepository';
import UserModel from '../model/userModel';

const userRepository = new UserRepository(UserModel);

export default userRepository;
