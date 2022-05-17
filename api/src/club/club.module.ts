import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ClubController } from './club.controller';
import { ClubService } from './club.service';
import { ClubSchema } from './club.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Club', schema: ClubSchema }]),
  ],
  controllers: [ClubController],
  providers: [ClubService],
})
export class ClubModule {}