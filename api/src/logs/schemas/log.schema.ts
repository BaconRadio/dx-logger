import { Prop, Schema } from '@nestjs/mongoose';
import { Logbook } from 'src/logbooks/schemas/logbook.schema';

@Schema()
export class Log {
  // TODO - Required fields

  /* 
  
  Connections

  */

  @Prop()
  logbook: Logbook;

  // TODO
  // @Prop()
  // station: Station;

  /*

  Basic Details

  */

  @Prop()
  contest: string;

  @Prop()
  myCallsign: string;

  @Prop()
  myGrid: string;

  @Prop()
  theirCall: string;

  @Prop()
  rstSent: number;

  @Prop()
  rstRcvd: number;

  @Prop()
  startTime: Date;

  @Prop()
  endTime: Date;

  // TODO - long string?
  @Prop()
  notes: string;

  @Prop()
  theirName: string;

  @Prop()
  theirQTH: string;

  @Prop()
  theirState: string;

  @Prop()
  theirCounty: string;

  @Prop()
  theirGrid: string;

  // Note - in KHZ
  @Prop()
  frequency: number;

  // May be able to auto gen based on freq
  @Prop()
  band: number;

  @Prop()
  power: number; // in watts

  // TODO - enum
  @Prop()
  mode: string;

  /* 
  
  Contest Specific Fields
  
  */

  @Prop()
  myExch: string;

  @Prop()
  theirExch: string;

  // for multi ops
  @Prop()
  operator: string;

  @Prop()
  isMultiplier: boolean;

  @Prop()
  wasRunning: boolean;

  /*

  Satellites

  TODO - validate sat names + freq

  */

  @Prop()
  satellite: string;

  /*

  QSL Information

  Plan is to sync against misc platforms and update these fields.

  */

  @Prop()
  qslSentLOTW: boolean;

  @Prop()
  qslSentQRZ: boolean;

  @Prop()
  qslRcvdLOTW: boolean;

  @Prop()
  qslRcvdQRZ: boolean;

  @Prop()
  qslSentPhysical: boolean;

  @Prop()
  qslRcvdPhysical: boolean;
}
