import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddStationAntennaDto } from './dto';
import { UpdateStationAntennaDto } from './dto';

import { StationAntenna } from './station-antenna.model';

@Injectable()
export class StationAntennaService {
  constructor(
    @InjectModel('StationAntenna') private readonly stationAntennaModel: Model<StationAntenna>,
  ) { }

  async newStationAntenna(dto: AddStationAntennaDto) {
    const newStationAntenna = new this.stationAntennaModel({
      stationID: dto.stationID,
      stationAntenna: dto.stationAntenna,
      antennaInstallDate: dto.antennaInstallDate,
      antennaRemovalDate: dto.antennaRemovalDate,
      antennaBands: dto.antennaBands,
    });
    const result = await newStationAntenna.save();
    return result.id as string;
  }

  async getStationAntennas() {
    const stationAntennas = await this.stationAntennaModel.find().exec();
    return stationAntennas.map(antenna => ({
      stationID: antenna.stationID,
      stationAntenna: antenna.stationAntenna,
      antennaInstallDate: antenna.antennaInstallDate,
      antennaRemovalDate: antenna.antennaRemovalDate,
      antennaBands: antenna.antennaBands,
    }));
  }

  async getSingleStationAntenna(stationAntennaId: string) {
    const antenna = await this.findStationAntenna(stationAntennaId);
    return {
      stationID: antenna.stationID,
      stationAntenna: antenna.stationAntenna,
      antennaInstallDate: antenna.antennaInstallDate,
      antennaRemovalDate: antenna.antennaRemovalDate,
      antennaBands: antenna.antennaBands,
    };
  }

  async updateStationAntenna(
    stationAntennaId: string,
    dto: UpdateStationAntennaDto,
  ) {
    const updatedStationAntenna = await this.findStationAntenna(stationAntennaId);
    if (dto.stationID) {
      updatedStationAntenna.stationID = dto.stationID;
    }
    if (dto.stationAntenna) {
      updatedStationAntenna.stationAntenna = dto.stationAntenna;
    }
    if (dto.antennaInstallDate) {
      updatedStationAntenna.antennaInstallDate = dto.antennaInstallDate;
    }
    if (dto.antennaRemovalDate) {
      updatedStationAntenna.antennaRemovalDate = dto.antennaRemovalDate;
    }
    if (dto.antennaBands) {
      updatedStationAntenna.antennaBands = dto.antennaBands;
    }
    updatedStationAntenna.save();
  }

  async deleteStationAntenna(stationAntennaId: string) {
    const result = await this.stationAntennaModel.deleteOne({ _id: stationAntennaId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Could not find antenna.');
    }
  }

  private async findStationAntenna(id: string): Promise<StationAntenna> {
    let antenna;
    try {
      antenna = await this.stationAntennaModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find antenna.');
    }
    if (!antenna) {
      throw new NotFoundException('Could not find antenna.');
    }
    return antenna;
  }
}