import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddUserCallsignDto } from './dto';
import { UpdateUserCallsignDto } from './dto';

import { UserCallsign } from './user-callsign.model';

@Injectable()
export class UserCallsignService {
  constructor(
    @InjectModel('UserCallsign') private readonly userCallsignModel: Model<UserCallsign>,
  ) { }

  async newUserCallsign(dto: AddUserCallsignDto) {
    const newUserCallsign = new this.userCallsignModel({
      userID: dto.userID,
      userCallsign: dto.userCallsign,
      calsignStartDate: dto.calsignStartDate,
      calsignEndDate: dto.calsignEndDate,
    });
    const result = await newUserCallsign.save();
    return result.id as string;
  }

  async getUserCallsigns() {
    const userCallsigns = await this.userCallsignModel.find().exec();
    return userCallsigns.map(callsign => ({
      userID: callsign.userID,
      userCallsign: callsign.userCallsign,
      calsignStartDate: callsign.calsignStartDate,
      calsignEndDate: callsign.calsignEndDate,
    }));
  }

  async getSingleUserCallsign(userCallsignId: string) {
    const callsign = await this.findUserCallsign(userCallsignId);
    return {
      userID: callsign.userID,
      userCallsign: callsign.userCallsign,
      calsignStartDate: callsign.calsignStartDate,
      calsignEndDate: callsign.calsignEndDate,
    };
  }

  async updateUserCallsign(
    userCallsignId: string,
    dto: UpdateUserCallsignDto,
  ) {
    const updatedUserCallsign = await this.findUserCallsign(userCallsignId);
    if (dto.userID) {
      updatedUserCallsign.userID = dto.userID;
    }
    if (dto.userCallsign) {
      updatedUserCallsign.userCallsign = dto.userCallsign;
    }
    if (dto.calsignStartDate) {
      updatedUserCallsign.calsignStartDate = dto.calsignStartDate;
    }
    if (dto.calsignEndDate) {
      updatedUserCallsign.calsignEndDate = dto.calsignEndDate;
    }
    updatedUserCallsign.save();
  }

  async deleteUserCallsign(userCallsignId: string) {
    const result = await this.userCallsignModel.deleteOne({ _id: userCallsignId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Could not find callsign.');
    }
  }

  private async findUserCallsign(id: string): Promise<UserCallsign> {
    let callsign;
    try {
      callsign = await this.userCallsignModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find callsign.');
    }
    if (!callsign) {
      throw new NotFoundException('Could not find callsign.');
    }
    return callsign;
  }
}