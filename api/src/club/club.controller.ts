import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { ClubService } from './club.service';
import { AddClubDto, UpdateClubDto } from './dto';

@Controller('club')
export class ClubController {
  constructor(private readonly clubService: ClubService) { }

  @Post()
  async addClub(@Body() dto: AddClubDto) {
    const clubId = await this.clubService.newClub(dto);
    return { id: clubId };
  }

  @Get()
  async getAllClubs() {
    const clubs = await this.clubService.getClubs();
    return clubs;
  }

  @Get(':id')
  getClub(@Param('id') clubId: string) {
    return this.clubService.getSingleClub(clubId);
  }

  @Patch(':id')
  async updateClub(
    @Param('id') clubId: string,
    @Body() dto: UpdateClubDto,
  ) {
    await this.clubService.updateClub(clubId, dto);
    return null;
  }

  @Delete(':id')
  async removeClub(@Param('id') clubId: string) {
    await this.clubService.deleteClub(clubId);
    return null;
  }
}