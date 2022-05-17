import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StationController } from './station.controller';
import { StationService } from './station.service';
import { StationSchema } from './station.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Station', schema: StationSchema }]),
  ],
  controllers: [StationController],
  providers: [StationService],
})
export class StationModule {}