import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SatellightController } from './satellight.controller';
import { SatellightService } from './satellight.service';
import { SatellightSchema } from './satellight.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Satellight', schema: SatellightSchema }]),
  ],
  controllers: [SatellightController],
  providers: [SatellightService],
})
export class SatellightModule {}