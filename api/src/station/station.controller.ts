import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  
  import { StationService } from './station.service';
  
  @Controller('station')
  export class StationController {
    constructor(private readonly stationService: StationService) {}
  
    @Post()
    async addStation(
      @Body('stationName') stationName: string,
      @Body('dxcc') dxcc: string,
      @Body('gridSquare') gridSquare: string,
      @Body('notes') notes: string,
    ) {
      const stationId = await this.stationService.newStation(
        stationName,
        dxcc,
        gridSquare,
        notes,
      );
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
      @Body('stationName') stationName: string,
      @Body('dxcc') dxcc: string,
      @Body('gridSquare') gridSquare: string,
      @Body('notes') notes: string,
    ) {
      await this.stationService.updateStation(stationId, stationName, dxcc, gridSquare, notes);
      return null;
    }
  
    @Delete(':id')
    async removeStation(@Param('id') stationId: string) {
        await this.stationService.deleteStation(stationId);
        return null;
    }
  }