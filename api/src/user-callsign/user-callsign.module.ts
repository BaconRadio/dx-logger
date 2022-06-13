import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserCallsignController } from './user-callsign.controller';
import { UserCallsignService } from './user-callsign.service';
import { UserCallsignSchema } from './user-callsign.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'UserCallsign', schema: UserCallsignSchema }]),
  ],
  controllers: [UserCallsignController],
  providers: [UserCallsignService],
})
export class UserCallsignModule {}