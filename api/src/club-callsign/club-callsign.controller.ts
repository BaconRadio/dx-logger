import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { ClubCallsignService } from './club-callsign.service';
import { AddClubCallsignDto } from './dto';
import { UpdateClubCallsignDto } from './dto';

@Controller('club-callsign')
export class ClubCallsignController {
  constructor(private readonly clubCallsignService: ClubCallsignService) { }

  @Post()
  async addClubCallsign(@Body() dto: AddClubCallsignDto) {
    const clubCallsignId = await this.clubCallsignService.newClubCallsign(dto);
    return { id: clubCallsignId };
  }

  @Get()
  async getAllClubCallsigns() {
    const clubCallsigns = await this.clubCallsignService.getClubCallsigns();
    return clubCallsigns;
  }

  @Get(':id')
  getClubCallsign(@Param('id') clubCallsignId: string) {
    return this.clubCallsignService.getSingleClubCallsign(clubCallsignId);
  }

  @Patch(':id')
  async updateClubCallsign(
    @Param('id') clubCallsignId: string,
    @Body() dto: UpdateClubCallsignDto,
  ) {
    await this.clubCallsignService.updateClubCallsign(clubCallsignId, dto);
    return null;
  }

  @Delete(':id')
  async removeClubCallsign(@Param('id') clubCallsignId: string) {
    await this.clubCallsignService.deleteClubCallsign(clubCallsignId);
    return null;
  }
}