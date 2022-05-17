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
  
  @Controller('user')
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    @Post()
    async addUser(
      @Body('username') username: string,
      @Body('name') name: string,
    ) {
      const userId = await this.userService.newUser(
        username,
        name,
      );
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
      @Body('username') username: string,
      @Body('name') name: string,
    ) {
      await this.userService.updateUser(userId, username, name);
      return null;
    }
  
    @Delete(':id')
    async removeUser(@Param('id') userId: string) {
        await this.userService.deleteUser(userId);
        return null;
    }
  }