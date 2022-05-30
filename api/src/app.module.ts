import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';
import { LogbooksModule } from './logbooks/logbooks.module';
import { LogsModule } from './logs/logs.module';
import { UserModule } from './user/user.module';
import { ClubModule } from './club/club.module';
import { StationModule } from './station/station.module';
import { SatelliteModule } from './satellite/satellite.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env` }),
    MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`),
    UserModule,
    ClubModule,
    StationModule,
    SatelliteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
