import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
import { AddContestDto } from './dto';
  
  import { ContestService } from './contest.service';
  
  @Controller('contest')
  export class ContestController {
    constructor(private readonly contestService: ContestService) {}
  
    @Post()
    async addContest(
      @Body() dto: AddContestDto,
    ) {
      const contestId = await this.contestService.newContest(dto);
      return { id: contestId };
    }
  
    @Get()
    async getAllContest() {
      const contests = await this.contestService.getContests();
      return contests;
    }
  
    @Get(':id')
    getContest(@Param('id') contestId: string) {
      return this.contestService.getSingleContest(contestId);
    }
  
    @Patch(':id')
    async updateContest(
      @Param('id') contestId: string,
      @Body() dto: AddContestDto,
    ) {
      await this.contestService.updateContest(contestId, dto);
      return null;
    }
  
    @Delete(':id')
    async removeContest(@Param('id') contestId: string) {
        await this.contestService.deleteContest(contestId);
        return null;
    }
  }