import * as mongoose from 'mongoose';

export const UserCallsignSchema = new mongoose.Schema({
    // This uses Javascript var types and not Typescript types
    userCallsign: { type: String, required: true },
    calsignStartDate: { type: Date, required: true },
    calsignEndDate: { type: Date, required: false },
});

export interface UserCallsign extends mongoose.Document {
    // Back to Typescript types here
    userCallsign: string;
    calsignStartDate: Date;
    calsignEndDate: Date;
}