import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SatelliteController } from './satellite.controller';
import { SatelliteService } from './satellite.service';
import { SatelliteSchema } from './satellite.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Satellite', schema: SatelliteSchema }]),
  ],
  controllers: [SatelliteController],
  providers: [SatelliteService],
})
export class SatelliteModule {}