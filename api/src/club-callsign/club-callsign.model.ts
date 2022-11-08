import * as mongoose from 'mongoose';

export const ClubCallsignSchema = new mongoose.Schema({
    // This uses Javascript var types and not Typescript types
    clubID: { type: String, required: true},
    clubCallsign: { type: String, required: true },
    calsignStartDate: { type: Date, required: true },
    calsignEndDate: { type: Date, required: false },
});

export interface ClubCallsign extends mongoose.Document {
    // Back to Typescript types here
    clubID: string;
    clubCallsign: string;
    calsignStartDate: Date;
    calsignEndDate: Date;
}