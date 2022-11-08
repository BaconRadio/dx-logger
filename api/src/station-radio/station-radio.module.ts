import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StationRadioController } from './station-radio.controller';
import { StationRadioService } from './station-radio.service';
import { StationRadioSchema } from './station-radio.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'StationRadio', schema: StationRadioSchema }]),
  ],
  controllers: [StationRadioController],
  providers: [StationRadioService],
})
export class StationRadioModule {}