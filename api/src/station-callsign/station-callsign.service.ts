import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddStationCallsignDto } from './dto';
import { UpdateStationCallsignDto } from './dto';

import { StationCallsign } from './station-callsign.model';

@Injectable()
export class StationCallsignService {
  constructor(
    @InjectModel('StationCallsign') private readonly stationCallsignModel: Model<StationCallsign>,
  ) { }

  async newStationCallsign(dto: AddStationCallsignDto) {
    const newStationCallsign = new this.stationCallsignModel({
      stationCallsign: dto.stationCallsign,
      calsignStartDate: dto.calsignStartDate,
      calsignEndDate: dto.calsignEndDate,
    });
    const result = await newStationCallsign.save();
    return result.id as string;
  }

  async getStationCallsigns() {
    const stationCallsigns = await this.stationCallsignModel.find().exec();
    return stationCallsigns.map(callsign => ({
      stationCallsign: callsign.stationCallsign,
      calsignStartDate: callsign.calsignStartDate,
      calsignEndDate: callsign.calsignEndDate,
    }));
  }

  async getSingleStationCallsign(stationCallsignId: string) {
    const callsign = await this.findStationCallsign(stationCallsignId);
    return {
      stationCallsign: callsign.stationCallsign,
      calsignStartDate: callsign.calsignStartDate,
      calsignEndDate: callsign.calsignEndDate,
    };
  }

  async updateStationCallsign(
    stationCallsignId: string,
    dto: UpdateStationCallsignDto,
  ) {
    const updatedStationCallsign = await this.findStationCallsign(stationCallsignId);
    if (dto.stationCallsign) {
      updatedStationCallsign.stationCallsign = dto.stationCallsign;
    }
    if (dto.calsignStartDate) {
      updatedStationCallsign.calsignStartDate = dto.calsignStartDate;
    }
    if (dto.calsignEndDate) {
      updatedStationCallsign.calsignEndDate = dto.calsignEndDate;
    }
    updatedStationCallsign.save();
  }

  async deleteStationCallsign(stationCallsignId: string) {
    const result = await this.stationCallsignModel.deleteOne({ _id: stationCallsignId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Could not find callsign.');
    }
  }

  private async findStationCallsign(id: string): Promise<StationCallsign> {
    let callsign;
    try {
      callsign = await this.stationCallsignModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find callsign.');
    }
    if (!callsign) {
      throw new NotFoundException('Could not find callsign.');
    }
    return callsign;
  }
}