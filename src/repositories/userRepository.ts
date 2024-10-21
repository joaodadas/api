import { Model } from 'mongoose';
import { User, UserDocument } from '../model/userModel'; // Ensure the correct import path

class UserRepository {
  private userModel: Model<UserDocument>;

  constructor(userModel: Model<UserDocument>) {
    this.userModel = userModel;
  }

  async create(userData: User): Promise<UserDocument> {
    const user = new this.userModel(userData);
    return user.save();
  }

  async getById(id: string): Promise<UserDocument | null> {
    return this.userModel.findById(id);
  }

  async getAll(): Promise<UserDocument[]> {
    return this.userModel.find();
  }

  async update(
    id: string,
    updateData: Partial<User>
  ): Promise<UserDocument | null> {
    return this.userModel.findByIdAndUpdate(id, updateData, { new: true });
  }

  async delete(id: string): Promise<UserDocument | null> {
    return this.userModel.findByIdAndDelete(id);
  }
}

export default UserRepository;
