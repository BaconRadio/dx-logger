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
  
  @Controller('club')
  export class ClubController {
    constructor(private readonly clubService: ClubService) {}
  
    @Post()
    async addClub(
      @Body('clubName') clubName: string,
    ) {
      const clubId = await this.clubService.newClub(
        clubName,
      );
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
      @Body('clubName') clubName: string,
    ) {
      await this.clubService.updateClub(clubId, clubName);
      return null;
    }
  
    @Delete(':id')
    async removeClub(@Param('id') clubId: string) {
        await this.clubService.deleteClub(clubId);
        return null;
    }
  }