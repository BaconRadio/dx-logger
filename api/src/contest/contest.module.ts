import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ContestController } from './contest.controller';
import { ContestService } from './contest.service';
import { ContestSchema } from './contest.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Contest', schema: ContestSchema }]),
  ],
  controllers: [ContestController],
  providers: [ContestService],
})
export class ContestModule {}