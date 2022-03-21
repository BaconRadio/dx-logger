import { Module } from '@nestjs/common';
import { LogbooksService } from './logbooks.service';
import { LogbooksController } from './logbooks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Logbook, LogbookSchema } from './schemas/logbook.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Logbook.name, schema: LogbookSchema}])],
  controllers: [LogbooksController],
  providers: [LogbooksService]
})
export class LogbooksModule {}
