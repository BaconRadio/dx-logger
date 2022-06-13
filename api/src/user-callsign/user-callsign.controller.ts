import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { UserCallsignService } from './user-callsign.service';
import { AddUserCallsignDto } from './dto';
import { UpdateUserCallsignDto } from './dto';

@Controller('user-callsign')
export class UserCallsignController {
  constructor(private readonly userCallsignService: UserCallsignService) { }

  @Post()
  async addUserCallsign(@Body() dto: AddUserCallsignDto) {
    const userCallsignId = await this.userCallsignService.newUserCallsign(dto);
    return { id: userCallsignId };
  }

  @Get()
  async getAllUserCallsigns() {
    const userCallsigns = await this.userCallsignService.getUserCallsigns();
    return userCallsigns;
  }

  @Get(':id')
  getUserCallsign(@Param('id') userCallsignId: string) {
    return this.userCallsignService.getSingleUserCallsign(userCallsignId);
  }

  @Patch(':id')
  async updateUserCallsign(
    @Param('id') userCallsignId: string,
    @Body() dto: UpdateUserCallsignDto,
  ) {
    await this.userCallsignService.updateUserCallsign(userCallsignId, dto);
    return null;
  }

  @Delete(':id')
  async removeUserCallsign(@Param('id') userCallsignId: string) {
    await this.userCallsignService.deleteUserCallsign(userCallsignId);
    return null;
  }
}