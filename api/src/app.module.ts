import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { LogbooksModule } from './logbooks/logbooks.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/dx-logger'), LogbooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
