import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Club } from './club.model';

@Injectable()
export class ClubService {
  constructor(
    @InjectModel('Club') private readonly clubModel: Model<Club>,
  ) {}

  async newClub(clubName: string) {
    const newClub = new this.clubModel({
      clubName,
    });
    const result = await newClub.save();
    return result.id as string;
  }

  async getClubs() {
    const clubs = await this.clubModel.find().exec();
    return clubs.map(club => ({
      clubId: club.id,
      clubName: club.clubName,
    }));
  }

  async getSingleClub(clubId: string) {
    const club = await this.findClub(clubId);
    return {
      clubId: club.id,
      clubName: club.clubName,
    };
  }

  async updateClub(
    clubId: string,
    clubName: string,
  ) {
    const updatedClub = await this.findClub(clubId);
    if (clubName) {
        updatedClub.clubName = clubName;
    }
    updatedClub.save();
  }

  async deleteClub(clubId: string) {
    const result = await this.clubModel.deleteOne({_id: clubId}).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Could not find club.');
    }
  }

  private async findClub(id: string): Promise<Club> {
    let club;
    try {
      club = await this.clubModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find club.');
    }
    if (!club) {
      throw new NotFoundException('Could not find club.');
    }
    return club;
  }
}