import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { StationAntennaService } from './station-antenna.service';
import { AddStationAntennaDto } from './dto';
import { UpdateStationAntennaDto } from './dto';

@Controller('station-antenna')
export class StationAntennaController {
  constructor(private readonly stationAntennaService: StationAntennaService) { }

  @Post()
  async addStationAntenna(@Body() dto: AddStationAntennaDto) {
    const stationAntennaId = await this.stationAntennaService.newStationAntenna(dto);
    return { id: stationAntennaId };
  }

  @Get()
  async getAllStationAntennas() {
    const stationAntennas = await this.stationAntennaService.getStationAntennas();
    return stationAntennas;
  }

  @Get(':id')
  getStationAntenna(@Param('id') stationAntennaId: string) {
    return this.stationAntennaService.getSingleStationAntenna(stationAntennaId);
  }

  @Patch(':id')
  async updateStationAntenna(
    @Param('id') stationAntennaId: string,
    @Body() dto: UpdateStationAntennaDto,
  ) {
    await this.stationAntennaService.updateStationAntenna(stationAntennaId, dto);
    return null;
  }

  @Delete(':id')
  async removeStationAntenna(@Param('id') stationAntennaId: string) {
    await this.stationAntennaService.deleteStationAntenna(stationAntennaId);
    return null;
  }
}