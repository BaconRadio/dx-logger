import * as mongoose from 'mongoose';

export const StationAntennaSchema = new mongoose.Schema({
    // This uses Javascript var types and not Typescript types
    stationID: {type: String, required: true},
    stationAntenna: { type: String, required: true },
    antennaInstallDate: { type: Date, required: true },
    antennaRemovalDate: { type: Date, required: false },
    antennaBands: { type: String, required: true },
});

export interface StationAntenna extends mongoose.Document {
    // Back to Typescript types here
    stationID: string;
    stationAntenna: string;
    antennaInstallDate: Date;
    antennaRemovalDate: Date;
    antennaBands: string;
}