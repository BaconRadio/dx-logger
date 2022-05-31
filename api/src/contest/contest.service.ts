import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddContestDto, UpdateContestDto } from './dto';

import { Contest } from './contest.model';

@Injectable()
export class ContestService {
  constructor(
    @InjectModel('Contest') private readonly contestModel: Model<Contest>,
  ) {}

  async newContest(dto: AddContestDto) {
    const newContest = new this.contestModel({
      contestName: dto.contestName,
    });
    const result = await newContest.save();
    return result.id as string;
  }

  async getContests() {
    const contests = await this.contestModel.find().exec();
    return contests.map(contest => ({
      contestId: contest.id,
      contestName: contest.contestName,
    }));
  }

  async getSingleContest(contestId: string) {
    const contest = await this.findContest(contestId);
    return {
      contestId: contest.id,
      contestName: contest.contestName,
    };
  }

  async updateContest(
    contestId: string,
    dto: UpdateContestDto,
  ) {
    const updatedContest = await this.findContest(contestId);
    if (dto.contestName) {
        updatedContest.contestName = dto.contestName;
    }
    updatedContest.save();
  }

  async deleteContest(contestId: string) {
    const result = await this.contestModel.deleteOne({_id: contestId}).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Could not find satellite.');
    }
  }

  private async findContest(id: string): Promise<Contest> {
    let contest;
    try {
      contest = await this.contestModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find contest.');
    }
    if (!contest) {
      throw new NotFoundException('Could not find contest.');
    }
    return contest;
  }
}