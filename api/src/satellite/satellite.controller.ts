import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
import { AddSatelliteDto } from './dto';
  
  import { SatelliteService } from './satellite.service';
  
  @Controller('satellite')
  export class SatelliteController {
    constructor(private readonly satelliteService: SatelliteService) {}
  
    @Post()
    async addSatellite(
      @Body() dto: AddSatelliteDto,
    ) {
      const satelliteId = await this.satelliteService.newSatellite(dto);
      return { id: satelliteId };
    }
  
    @Get()
    async getAllSatellites() {
      const satellites = await this.satelliteService.getSatellites();
      return satellites;
    }
  
    @Get(':id')
    getSatellite(@Param('id') satelliteId: string) {
      return this.satelliteService.getSingleSatellite(satelliteId);
    }
  
    @Patch(':id')
    async updateSatellite(
      @Param('id') satelliteId: string,
      @Body() dto: AddSatelliteDto,
    ) {
      await this.satelliteService.updateSatellite(satelliteId, dto);
      return null;
    }
  
    @Delete(':id')
    async removeSatellite(@Param('id') satelliteId: string) {
        await this.satelliteService.deleteSatellite(satelliteId);
        return null;
    }
  }