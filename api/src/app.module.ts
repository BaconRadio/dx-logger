import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { LogbooksModule } from './logbooks/logbooks.module';
import { LogsModule } from './logs/logs.module';
import { UserModule } from './user/user.module';
import { ClubModule } from './club/club.module';
import { StationModule } from './station/station.module';
import { SatellightModule } from './satellight/satellight.module';

@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://<url_to_connect_to_db>`), UserModule, ClubModule, StationModule, SatellightModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
