import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StationAntennaController } from './station-antenna.controller';
import { StationAntennaService } from './station-antenna.service';
import { StationAntennaSchema } from './station-antenna.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'StationAntenna', schema: StationAntennaSchema }]),
  ],
  controllers: [StationAntennaController],
  providers: [StationAntennaService],
})
export class StationAntennaModule {}