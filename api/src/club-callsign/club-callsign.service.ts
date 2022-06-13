import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddClubCallsignDto } from './dto';
import { UpdateClubCallsignDto } from './dto';

import { ClubCallsign } from './club-callsign.model';

@Injectable()
export class ClubCallsignService {
  constructor(
    @InjectModel('ClubCallsign') private readonly clubCallsignModel: Model<ClubCallsign>,
  ) { }

  async newClubCallsign(dto: AddClubCallsignDto) {
    const newClubCallsign = new this.clubCallsignModel({
      clubCallsign: dto.clubCallsign,
      calsignStartDate: dto.calsignStartDate,
      calsignEndDate: dto.calsignEndDate,
    });
    const result = await newClubCallsign.save();
    return result.id as string;
  }

  async getClubCallsigns() {
    const clubCallsigns = await this.clubCallsignModel.find().exec();
    return clubCallsigns.map(callsign => ({
      clubCallsign: callsign.clubCallsign,
      calsignStartDate: callsign.calsignStartDate,
      calsignEndDate: callsign.calsignEndDate,
    }));
  }

  async getSingleClubCallsign(clubCallsignId: string) {
    const callsign = await this.findClubCallsign(clubCallsignId);
    return {
      clubCallsign: callsign.clubCallsign,
      calsignStartDate: callsign.calsignStartDate,
      calsignEndDate: callsign.calsignEndDate,
    };
  }

  async updateClubCallsign(
    clubCallsignId: string,
    dto: UpdateClubCallsignDto,
  ) {
    const updatedClubCallsign = await this.findClubCallsign(clubCallsignId);
    if (dto.clubCallsign) {
      updatedClubCallsign.clubCallsign = dto.clubCallsign;
    }
    if (dto.calsignStartDate) {
      updatedClubCallsign.calsignStartDate = dto.calsignStartDate;
    }
    if (dto.calsignEndDate) {
      updatedClubCallsign.calsignEndDate = dto.calsignEndDate;
    }
    updatedClubCallsign.save();
  }

  async deleteClubCallsign(clubCallsignId: string) {
    const result = await this.clubCallsignModel.deleteOne({ _id: clubCallsignId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Could not find callsign.');
    }
  }

  private async findClubCallsign(id: string): Promise<ClubCallsign> {
    let callsign;
    try {
      callsign = await this.clubCallsignModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find callsign.');
    }
    if (!callsign) {
      throw new NotFoundException('Could not find callsign.');
    }
    return callsign;
  }
}