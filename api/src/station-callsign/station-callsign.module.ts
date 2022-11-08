import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StationCallsignController } from './station-callsign.controller';
import { StationCallsignService } from './station-callsign.service';
import { StationCallsignSchema } from './station-callsign.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'StationCallsign', schema: StationCallsignSchema }]),
  ],
  controllers: [StationCallsignController],
  providers: [StationCallsignService],
})
export class StationCallsignModule {}