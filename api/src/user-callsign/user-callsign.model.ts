import * as mongoose from 'mongoose';

export const UserCallsignSchema = new mongoose.Schema({
    // This uses Javascript var types and not Typescript types
    userID: {type:String, required: true},
    userCallsign: { type: String, required: true },
    calsignStartDate: { type: Date, required: true },
    calsignEndDate: { type: Date, required: false },
});

export interface UserCallsign extends mongoose.Document {
    // Back to Typescript types here
    userID: string;
    userCallsign: string;
    calsignStartDate: Date;
    calsignEndDate: Date;
}