import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddUserDto } from './dto';
import { UpdateUserDto } from './dto/update.user.dto';

import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) { }

  async newUser(dto: AddUserDto) {
    const newUser = new this.userModel({
      username: dto.username,
      name: dto.name,
    });
    const result = await newUser.save();
    return result.id as string;
  }

  async getUsers() {
    const users = await this.userModel.find().exec();
    return users.map(user => ({
      userId: user.id,
      username: user.username,
      name: user.name,
    }));
  }

  async getSingleUser(userId: string) {
    const user = await this.findUser(userId);
    return {
      userId: user.id,
      username: user.username,
      name: user.name,
    };
  }

  async updateUser(
    userId: string,
    dto: UpdateUserDto,
  ) {
    const updatedUser = await this.findUser(userId);
    if (dto.username) {
      updatedUser.username = dto.username;
    }
    if (dto.name) {
      updatedUser.name = dto.name;
    }
    updatedUser.save();
  }

  async deleteUser(userId: string) {
    const result = await this.userModel.deleteOne({ _id: userId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Could not find user.');
    }
  }

  private async findUser(id: string): Promise<User> {
    let user;
    try {
      user = await this.userModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find user.');
    }
    if (!user) {
      throw new NotFoundException('Could not find user.');
    }
    return user;
  }
}