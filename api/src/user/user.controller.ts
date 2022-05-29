import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { UserService } from './user.service';
import { AddUserDto } from './dto';
import { UpdateUserDto } from './dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async addUser(@Body() dto: AddUserDto) {
    const userId = await this.userService.newUser(dto);
    return { id: userId };
  }

  @Get()
  async getAllUsers() {
    const users = await this.userService.getUsers();
    return users;
  }

  @Get(':id')
  getUser(@Param('id') userId: string) {
    return this.userService.getSingleUser(userId);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') userId: string,
    @Body() dto: UpdateUserDto,
  ) {
    await this.userService.updateUser(userId, dto);
    return null;
  }

  @Delete(':id')
  async removeUser(@Param('id') userId: string) {
    await this.userService.deleteUser(userId);
    return null;
  }
}