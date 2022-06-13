import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ClubCallsignController } from './club-callsign.controller';
import { ClubCallsignService } from './club-callsign.service';
import { ClubCallsignSchema } from './club-callsign.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ClubCallsign', schema: ClubCallsignSchema }]),
  ],
  controllers: [ClubCallsignController],
  providers: [ClubCallsignService],
})
export class ClubCallsignModule {}