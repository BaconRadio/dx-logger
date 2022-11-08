import * as mongoose from 'mongoose';

export const StationRadioSchema = new mongoose.Schema({
    // This uses Javascript var types and not Typescript types
    stationID: {type: String, required: true},
    stationRadio: { type: String, required: true },
    radioInstallDate: { type: Date, required: true },
    radioRemovalDate: { type: Date, required: false },
    radioBands: { type: String, required: true },
});

export interface StationRadio extends mongoose.Document {
    // Back to Typescript types here
    stationID: string;
    stationRadio: string;
    radioInstallDate: Date;
    radioRemovalDate: Date;
    radioBands: string;
}