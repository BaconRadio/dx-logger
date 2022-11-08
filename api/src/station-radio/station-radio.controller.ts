import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { StationRadioService } from './station-radio.service';
import { AddStationRadioDto } from './dto';
import { UpdateStationRadioDto } from './dto';

@Controller('station-radio')
export class StationRadioController {
  constructor(private readonly stationRadioService: StationRadioService) { }

  @Post()
  async addStationRadio(@Body() dto: AddStationRadioDto) {
    const stationRadioId = await this.stationRadioService.newStationRadio(dto);
    return { id: stationRadioId };
  }

  @Get()
  async getAllStationRadios() {
    const stationRadios = await this.stationRadioService.getStationRadios();
    return stationRadios;
  }

  @Get(':id')
  getStationRadio(@Param('id') stationRadioId: string) {
    return this.stationRadioService.getSingleStationRadio(stationRadioId);
  }

  @Patch(':id')
  async updateStationRadio(
    @Param('id') stationRadioId: string,
    @Body() dto: UpdateStationRadioDto,
  ) {
    await this.stationRadioService.updateStationRadio(stationRadioId, dto);
    return null;
  }

  @Delete(':id')
  async removeStationRadio(@Param('id') stationRadioId: string) {
    await this.stationRadioService.deleteStationRadio(stationRadioId);
    return null;
  }
}