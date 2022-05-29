import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddStationDto, UpdateStationDto } from './dto';

import { Station } from './station.model';

@Injectable()
export class StationService {
  constructor(
    @InjectModel('Station') private readonly stationModel: Model<Station>,
  ) { }

  async newStation(dto: AddStationDto) {
    const newStation = new this.stationModel({
      stationName: dto.stationName,
      dxcc: dto.dxcc,
      gridSquare: dto.dxcc,
      notes: dto.notes,
    });
    const result = await newStation.save();
    return result.id as string;
  }

  async getStations() {
    const stations = await this.stationModel.find().exec();
    return stations.map(station => ({
      stationName: station.stationName,
      dxcc: station.dxcc,
      gridSquare: station.gridSquare,
      notes: station.notes,
    }));
  }

  async getSingleStation(stationId: string) {
    const station = await this.findStation(stationId);
    return {
      stationName: station.stationName,
      dxcc: station.dxcc,
      gridSquare: station.gridSquare,
      notes: station.notes,
    };
  }

  async updateStation(
    stationId: string,
    dto: UpdateStationDto,
  ) {
    const updatedStation = await this.findStation(stationId);
    if (dto.stationName) {
      updatedStation.stationName = dto.stationName;
    }
    if (dto.dxcc) {
      updatedStation.dxcc = dto.dxcc;
    }
    if (dto.gridSquare) {
      updatedStation.gridSquare = dto.gridSquare;
    }
    if (dto.notes) {
      updatedStation.notes = dto.notes;
    }
    updatedStation.save();
  }

  async deleteStation(stationId: string) {
    const result = await this.stationModel.deleteOne({ _id: stationId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Could not find station.');
    }
  }

  private async findStation(id: string): Promise<Station> {
    let station;
    try {
      station = await this.stationModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find station.');
    }
    if (!station) {
      throw new NotFoundException('Could not find station.');
    }
    return station;
  }
}