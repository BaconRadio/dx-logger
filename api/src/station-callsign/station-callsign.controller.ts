import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { StationCallsignService } from './station-callsign.service';
import { AddStationCallsignDto } from './dto';
import { UpdateStationCallsignDto } from './dto';

@Controller('station-callsign')
export class StationCallsignController {
  constructor(private readonly stationCallsignService: StationCallsignService) { }

  @Post()
  async addStationCallsign(@Body() dto: AddStationCallsignDto) {
    const stationCallsignId = await this.stationCallsignService.newStationCallsign(dto);
    return { id: stationCallsignId };
  }

  @Get()
  async getAllStationCallsigns() {
    const stationCallsigns = await this.stationCallsignService.getStationCallsigns();
    return stationCallsigns;
  }

  @Get(':id')
  getStationCallsign(@Param('id') stationCallsignId: string) {
    return this.stationCallsignService.getSingleStationCallsign(stationCallsignId);
  }

  @Patch(':id')
  async updateStationCallsign(
    @Param('id') stationCallsignId: string,
    @Body() dto: UpdateStationCallsignDto,
  ) {
    await this.stationCallsignService.updateStationCallsign(stationCallsignId, dto);
    return null;
  }

  @Delete(':id')
  async removeStationCallsign(@Param('id') stationCallsignId: string) {
    await this.stationCallsignService.deleteStationCallsign(stationCallsignId);
    return null;
  }
}