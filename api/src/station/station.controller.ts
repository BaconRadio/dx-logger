import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
import { AddStationDto, UpdateStationDto } from './dto';
  
  import { StationService } from './station.service';
  
  @Controller('station')
  export class StationController {
    constructor(private readonly stationService: StationService) {}
  
    @Post()
    async addStation(
      @Body() dto: AddStationDto,
    ) {
      const stationId = await this.stationService.newStation(dto);
      return { id: stationId };
    }
  
    @Get()
    async getAllStations() {
      const stations = await this.stationService.getStations();
      return stations;
    }
  
    @Get(':id')
    getStation(@Param('id') stationId: string) {
      return this.stationService.getSingleStation(stationId);
    }
  
    @Patch(':id')
    async updateStation(
      @Param('id') stationId: string,
      @Body() dto: UpdateStationDto,
    ) {
      await this.stationService.updateStation(stationId, dto);
      return null;
    }
  
    @Delete(':id')
    async removeStation(@Param('id') stationId: string) {
        await this.stationService.deleteStation(stationId);
        return null;
    }
  }