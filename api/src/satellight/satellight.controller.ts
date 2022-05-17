import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  
  import { SatellightService } from './satellight.service';
  
  @Controller('satellight')
  export class SatellightController {
    constructor(private readonly satellightService: SatellightService) {}
  
    @Post()
    async addSatellight(
      @Body('satellightName') satellightName: string,
    ) {
      const satellightId = await this.satellightService.newSatellight(
        satellightName,
      );
      return { id: satellightId };
    }
  
    @Get()
    async getAllSatellights() {
      const satellights = await this.satellightService.getSatellights();
      return satellights;
    }
  
    @Get(':id')
    getClub(@Param('id') satellightId: string) {
      return this.satellightService.getSingleSatellight(satellightId);
    }
  
    @Patch(':id')
    async updateSatellight(
      @Param('id') satellightId: string,
      @Body('satellightName') satellightName: string,
    ) {
      await this.satellightService.updateSatellight(satellightId, satellightName);
      return null;
    }
  
    @Delete(':id')
    async removeSatellight(@Param('id') satellightId: string) {
        await this.satellightService.deleteSatellight(satellightId);
        return null;
    }
  }