import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddSatelliteDto, UpdateSatelliteDto } from './dto';

import { Satellite } from './satellite.model';

@Injectable()
export class SatelliteService {
  constructor(
    @InjectModel('Satellite') private readonly satelliteModel: Model<Satellite>,
  ) {}

  async newSatellite(dto: AddSatelliteDto) {
    const newSatellite = new this.satelliteModel({
      satelliteName: dto.satelliteName,
    });
    const result = await newSatellite.save();
    return result.id as string;
  }

  async getSatellites() {
    const satellites = await this.satelliteModel.find().exec();
    return satellites.map(satellite => ({
      satelliteId: satellite.id,
      satelliteName: satellite.satelliteName,
    }));
  }

  async getSingleSatellite(satelliteId: string) {
    const satellite = await this.findSatellite(satelliteId);
    return {
      satelliteId: satellite.id,
      satelliteName: satellite.satelliteName,
    };
  }

  async updateSatellite(
    satelliteId: string,
    dto: UpdateSatelliteDto,
  ) {
    const updatedSatellite = await this.findSatellite(satelliteId);
    if (dto.satelliteName) {
        updatedSatellite.satelliteName = dto.satelliteName;
    }
    updatedSatellite.save();
  }

  async deleteSatellite(satelliteId: string) {
    const result = await this.satelliteModel.deleteOne({_id: satelliteId}).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Could not find satellite.');
    }
  }

  private async findSatellite(id: string): Promise<Satellite> {
    let satellite;
    try {
      satellite = await this.satelliteModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find satellite.');
    }
    if (!satellite) {
      throw new NotFoundException('Could not find satellite.');
    }
    return satellite;
  }
}