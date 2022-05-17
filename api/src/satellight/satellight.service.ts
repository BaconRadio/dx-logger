import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Satellight } from './satellight.model';

@Injectable()
export class SatellightService {
  constructor(
    @InjectModel('Satellight') private readonly satellightModel: Model<Satellight>,
  ) {}

  async newSatellight(satellightName: string) {
    const newSatellight = new this.satellightModel({
      satellightName,
    });
    const result = await newSatellight.save();
    return result.id as string;
  }

  async getSatellights() {
    const satellights = await this.satellightModel.find().exec();
    return satellights.map(satellight => ({
      satellightId: satellight.id,
      satellightName: satellight.satellightName,
    }));
  }

  async getSingleSatellight(satellightId: string) {
    const satellight = await this.findSatellight(satellightId);
    return {
      satellightId: satellight.id,
      satellightName: satellight.satellightName,
    };
  }

  async updateSatellight(
    satellightId: string,
    satellightName: string,
  ) {
    const updatedSatellight = await this.findSatellight(satellightId);
    if (satellightName) {
        updatedSatellight.satellightName = satellightName;
    }
    updatedSatellight.save();
  }

  async deleteSatellight(satellightId: string) {
    const result = await this.satellightModel.deleteOne({_id: satellightId}).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Could not find satellight.');
    }
  }

  private async findSatellight(id: string): Promise<Satellight> {
    let satellight;
    try {
      satellight = await this.satellightModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find satellight.');
    }
    if (!satellight) {
      throw new NotFoundException('Could not find satellight.');
    }
    return satellight;
  }
}