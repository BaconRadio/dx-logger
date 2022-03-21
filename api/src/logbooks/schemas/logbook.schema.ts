import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LogbookDocument = Logbook & Document;

@Schema()
export class Logbook {
    @Prop()
    name: string;

    @Prop()
    callsign: string;

    @Prop()
    gridSquare: string;
}

export const LogbookSchema = SchemaFactory.createForClass(Logbook)