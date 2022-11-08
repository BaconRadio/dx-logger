import * as mongoose from 'mongoose';

export const StationCallsignSchema = new mongoose.Schema({
    // This uses Javascript var types and not Typescript types
    stationID: {type: String, required: true},
    stationCallsign: { type: String, required: true },
    calsignStartDate: { type: Date, required: true },
    calsignEndDate: { type: Date, required: false },
});

export interface StationCallsign extends mongoose.Document {
    // Back to Typescript types here
    stationID: string;
    stationCallsign: string;
    calsignStartDate: Date;
    calsignEndDate: Date;
}