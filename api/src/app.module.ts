import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { LogbooksModule } from './logbooks/logbooks.module';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [MongooseModule.forRoot(`mongodb://${process.env.DB_IP}:${process.env.DP_PORT}/dx-logger-db`), LogbooksModule, LogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
